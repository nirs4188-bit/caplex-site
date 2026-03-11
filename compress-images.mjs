/**
 * compress-images.mjs
 * Batch-compress all JPEGs in public/images to ≤300 KB @ max 1200px wide.
 * Run: node compress-images.mjs
 *
 * First time: npm install sharp
 */

import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import { join, extname, basename, dirname } from "path";

const ROOT = "./public/images";
const MAX_WIDTH = 1200;     // px — won't upscale smaller images
const QUALITY = 82;         // JPEG quality — 80-85 hits ~150-300 KB on typical room photos
const SKIP_DIRS = ["Videos For Caplex"]; // skip video folders

let processed = 0, skipped = 0, saved = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (SKIP_DIRS.includes(e.name)) {
        console.log(`  ⏭  Skipping folder: ${e.name}`);
        continue;
      }
      await walk(full);
    } else if (/\.(jpe?g)$/i.test(e.name)) {
      await compress(full);
    }
  }
}

async function compress(filePath) {
  const before = (await stat(filePath)).size;
  const tmp = filePath + ".tmp";

  try {
    await sharp(filePath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(tmp);

    const after = (await stat(tmp)).size;

    if (after < before) {
      await rename(tmp, filePath);       // replace original
      const savedKB = ((before - after) / 1024).toFixed(0);
      const afterKB = (after / 1024).toFixed(0);
      console.log(`  ✅ ${basename(filePath).padEnd(45)} ${kb(before)} → ${kb(after)}  (saved ${savedKB} KB)`);
      saved += (before - after);
      processed++;
    } else {
      // Already small enough — delete temp and skip
      const { unlink } = await import("fs/promises");
      await unlink(tmp);
      console.log(`  ☑  ${basename(filePath).padEnd(45)} ${kb(before)} — already small, skipped`);
      skipped++;
    }
  } catch (err) {
    console.error(`  ❌ ${filePath}: ${err.message}`);
    try { const { unlink } = await import("fs/promises"); await unlink(tmp); } catch {}
  }
}

const kb = (b) => `${(b / 1024).toFixed(0).padStart(6)} KB`;

console.log(`\n🗜  Compressing JPEGs in ${ROOT}\n`);
await walk(ROOT);
console.log(`
✅ Done!
   Compressed : ${processed} files
   Skipped    : ${skipped} files (already small)
   Total saved: ${(saved / 1024 / 1024).toFixed(1)} MB
`);
