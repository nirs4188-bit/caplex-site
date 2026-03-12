import React, { useEffect, useState } from "react";
import {
  ArrowRight, BarChart3, Building2, CheckCircle2, Compass, Home,
  LineChart, Mail, MapPin, Menu, MessageCircle, Phone, Sparkles, Wallet, X
} from "lucide-react";

// ---------------- CONFIG ----------------
const CONFIG = {
  brand: {
    name: "CAPLEX EQUITY LLC",
    mark: "CAPLEX",
    submark: "EQUITY",
    city: "Dallas–Fort Worth",
    headline: "We help you buy a home that's a great investment in DFW.",
    tagline: "We're Nir Sheinbein & Alexa Peer — a Dallas-based team with close to a decade of experience and 300+ transactions. Whether you're buying your first home as a smart investment, house hacking a duplex, launching an Airbnb, or growing a portfolio from out of state — we source, underwrite, and execute with you."
  },
  contact: {
    phoneHref: "tel:+18585395219",
    textHref: "sms:+18585395219",
    whatsappHref: "https://wa.me/18585395219",
    emailDisplay: "nir@cap-lex.com",
    emailHref: "mailto:nir@cap-lex.com",
    bookingLabel: "Book 15‑min call",
    bookingHref: "https://calendar.app.google/48mb48amBityKYni7",
    addressLines: ["18484 Preston Rd", "Ste 102 #574", "Dallas, TX 75252"],
    mapsHref: "https://www.google.com/maps?q=18484+Preston+Rd+Dallas"
  },
  credentials: {
    agentName: "Nir Sheinbein",
    licenseNumber: "795672",
    brokerageName: "Texas Ally Real Estate Group LLC",
    brokerageLicense: "9001961"
  }
};

// ---------------- HELPERS ----------------
const cx = (...c) => c.filter(Boolean).join(" ");

function Button({ href, children, secondary, target }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={cx(
        "inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-semibold transition-opacity hover:opacity-80",
        secondary ? "border bg-white text-gray-900" : "bg-emerald-600 text-white"
      )}
    >
      {children}
    </a>
  );
}

function LogoMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M12 2l8 4.5v11L12 22l-8-4.5v-11z" stroke="currentColor" fill="none" strokeWidth="1.5" />
    </svg>
  );
}

// ---------------- NAV ----------------
function TopNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-3 text-gray-900 hover:opacity-80">
          <LogoMark />
          <div>
            <div className="font-bold">CAPLEX</div>
            <div className="text-xs text-gray-500">EQUITY</div>
          </div>
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-gray-700">
          {open ? <X /> : <Menu />}
        </button>
        <div className="hidden lg:flex gap-6 items-center text-gray-700 font-medium">
          <a href="#/" className="hover:text-gray-900">Home</a>
          <a href="#/case" className="hover:text-gray-900">Case Studies</a>
          <a href="#/blog" className="hover:text-gray-900">Blog</a>
          <a href="#/videos" className="hover:text-gray-900">Videos</a>
          <a href="#/gallery" className="hover:text-gray-900">Gallery</a>
          <a href="#/about" className="hover:text-gray-900">About</a>
          <a href="#/contact" className="hover:text-gray-900">Contact</a>
          <Button href={CONFIG.contact.bookingHref} target="_blank">Book Call</Button>
        </div>
      </div>
      {open && (
        <div className="p-6 border-t lg:hidden grid gap-3 text-gray-700 font-medium">
          <a href="#/" onClick={() => setOpen(false)}>Home</a>
          <a href="#/case" onClick={() => setOpen(false)}>Case Studies</a>
          <a href="#/blog" onClick={() => setOpen(false)}>Blog</a>
          <a href="#/videos" onClick={() => setOpen(false)}>Videos</a>
          <a href="#/gallery" onClick={() => setOpen(false)}>Gallery</a>
          <a href="#/about" onClick={() => setOpen(false)}>About</a>
          <a href="#/contact" onClick={() => setOpen(false)}>Contact</a>
          <Button href={CONFIG.contact.bookingHref} target="_blank">Book 15‑min call <ArrowRight className="h-5 w-5" /></Button>
        </div>
      )}
    </div>
  );
}

// ---------------- SHARED COMPONENTS ----------------
const TESTIMONIALS = [
  {
    name: "Michael B.",
    city: "Nazareth",
    text: "I worked with Nir across three different real estate investments. I followed his work for two years before investing, and what stood out was his professionalism and transparency. He's always available for questions — even on topics outside the exact scope — and the peace of mind of having a trusted team on the ground in DFW is huge."
  },
  {
    name: "Matt O.",
    city: "Seattle",
    text: "We started in 2019 and to date Nir has helped us buy and renovate multiple properties. Across states, I can honestly say he's the kind of person you want on your side — present at every stage, positive, professional, and dependable. Even when things didn't go to plan (it happens), he made sure we felt protected and informed."
  },
  {
    name: "Julia & Aaron",
    city: "Miami",
    text: "We're a couple that invests together, so we immediately connected with their style. Our first project was complex, but the value created was excellent. We later purchased another property with them — also a great result — and over time the relationship became a real friendship."
  },
  {
    name: "Daniel K.",
    city: "Tel Aviv",
    text: "My first deal with them in 2022 ran exactly as expected with minimal issues, and the property is renovated and rented. We're now in the mortgage process to refinance and return capital. Since then we've done more deals together and communication has stayed clear and thorough — especially helpful for less experienced investors."
  },
  {
    name: "Adam P.",
    city: "Mexico",
    text: "At first I was skeptical because of the industry's reputation, but their attention to detail and steady updates proved they're truly trustworthy. Over time we completed multiple projects — including Airbnb — and the execution and care remained consistent."
  },
  {
    name: "Olivia D.",
    city: "Salt Lake City",
    text: "What impressed me most is Nir's honest approach. There were times he advised me NOT to pursue a deal after deeper review — even though it could have benefited him. That's when I knew he prioritizes the client's outcome."
  }
];

const DEALS = [
  { id: "w9th",       address: "W. 9th St, Dallas, TX",           buy: 232000,  rehab: 129000,  arv: 550000,  result: "11% → Infinite return",
    photo: "/images/813-w9th/813_west_9th_street_6023536_001.jpg" },
  { id: "corsicana",  address: "N. 19th St, Corsicana, TX",        buy: 230000,  rehab: 181250,  arv: 550000,  result: "11% → 60%",
    slider: { before: "/images/212 N 19th St Corsicana/Before/WhatsApp Image 2025-06-30 at 1.43.32 PM.jpeg", after: "/images/212 N 19th St Corsicana/After/275542367_10159219985867851_7508397285433597479_n.jpg" } },
  { id: "shipp",      address: "Shipp Rd, Rowlett, TX",            buy: 490000,  rehab: 170000,  arv: 1003000, result: "Infinite return",
    slider: { before: "/Shipp/Shipp Pool - Before.jpg", after: "/Shipp/Shipp Pool After.webp" } },
  { id: "robinson",   address: "N. Robinson St, Cleburne, TX",     buy: 191000,  rehab: 68000,   arv: 400000,  result: "11.7% → Infinite",
    slider: { before: "/images/rob-liv-b-before.jpg", after: "/images/rob-liv-b-after.jpg" } },
  { id: "woodard",    address: "W. Woodard, Denison, TX",          buy: 97000,   rehab: 159000,  sell: 350000, result: "19%",
    slider: { before: "/images/wood-kitchen-before.jpg", after: "/images/wood-kitchen-after.jpg" } },
  { id: "livingston", address: "Livingston Ave, Fort Worth, TX",   buy: 135000,  rehab: 176000,  sell: 500000, result: "52%",
    slider: { before: "/images/liv-ext-b-before.jpg", after: "/images/liv-ext-b-after.jpg" } },
  { id: "bessie",     address: "Bessie St, Fort Worth, TX",        buy: 270000,  rehab: 73453,   arv: 700000,  result: "15% yield → Infinite (BRRRR)",
    photo: "/images/901 s Bessie/After/312_8675.jpg" },
  { id: "armstrong",  address: "S. Armstrong, Denison, TX",        buy: 237327,  rehab: 131412,  arv: 450000,  result: "40% return (cash-out refi)",
    photo: "/images/731-hull/ARS05277_sm.jpg" },
  { id: "lakeshore",  address: "Lakeshore Blvd, Oak Point, TX",      buy: 91368, rehab: 354004,  sell: 680000, result: "46% total / 23% per year",
    photo: "/images/1501 Lakeshore Blvd/1501 Lakeshore Blvd/301389063_10159507926737851_292481158858649682_n.jpg" },
];

function Stat({ label, value, icon: Icon }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3 text-gray-500">
        <Icon className="h-5 w-5" />
        <div className="text-sm font-semibold tracking-widest">{label}</div>
      </div>
      <div className="mt-3 text-3xl font-bold text-gray-900">{value}</div>
    </div>
  );
}

function Card({ children, className }) {
  return <div className={cx("rounded-3xl border bg-white p-8 shadow-sm", className)}>{children}</div>;
}

// ---------------- INSIGHTS ----------------
const INSIGHTS = [
  {
    tag: "Rate Strategy",
    id: "rate-buydown",
    title: "Should you pay upfront to buy down your interest rate?",
    body: "In real estate, you can always pay \"points\" at closing to reduce your mortgage rate. On a flip, it's almost never worth it — your goal is to minimize cash in and hold as short as possible. On a rental it's different. Say your total investment is $200k. A 75% LTV loan at 7% costs $998/month. For $5,000, you buy the rate down to 6% — now $899/month. That's $1,200/year saved on a $5,000 investment: a 24% annual return. Rule of thumb: if the return on the buydown exceeds 10–12%, do it.\n\nReal deal: S. Armstrong, Denison TX — purchased for $237k, rehabbed for $131k. Rent: $3,000+/month. We bought points for $10,000 to lock a 6% rate. After refinancing at $356,000, monthly profit after mortgage: $740. Cash-on-cash return: 40%.",
  },
  {
    tag: "BRRRR Strategy",
    id: "bessie-brrrr",
    title: "How a COVID-era fourplex became a 15% yield BRRRR deal",
    body: "Bessie St, Fort Worth — a fourplex that hadn't been occupied in years. The original plan: invest $270k, renovate in under a year, rent at 11–12% yield. Then COVID arrived. An AC contractor disappeared, zoning battles erupted (the city insisted it was single-family despite the multifamily designation), and costs overran by 20%+.\n\nTwo years and $343,453 later — we closed. Leased to a commercial tenant at $6,400/month — a 15% yield. Property value: ~$700,000, up from $270,000 purchase. With 50%+ leverage, all capital returned. Infinite return, even at 7% interest rates. Every project has its battles. This one was worth it.",
  },
  {
    tag: "Gentrification",
    id: "w9th-gentrification",
    title: "How we achieved an infinite return in 18 months through gentrification",
    body: "Gentrification is the process where a lower-income neighborhood transforms as higher-income residents move in — reflected in renovations, new construction, and rising prices. Early-stage gentrification carries higher risk and higher reward. Later stages offer more certainty but proportionally lower returns.\n\nW. 9th St, Dallas (Bishop Arts area) — a triplex in the middle of this process. Purchase: $232k. Rehab: $129k. Total: $361k. Current value: $550k. Monthly rent: $4,847. Expenses: $1,494. Profit: $3,353/month — 11.14% annual yield.\n\nThen the BRRRR exit: 70% LTV at 5% → $385,000 back from the bank, minus $22k closing costs. Net returned: $363,000 — more than we put in. Monthly profit after mortgage: $1,404. Annual: $16,853. Infinite return.",
  },
  {
    tag: "Risk Management",
    title: "The importance of Plan B — flexibility saves deals",
    body: "No matter how polished your action plan is, reality will find a way to surprise you. We purchased a single-family home in a multifamily-zoned area, planning to convert it to three units — a project we'd done before. Then the political winds shifted, and city support for that conversion disappeared. After investing time, money, and energy, we were left with single-family approval only.\n\nSo we pivoted to Plan B: a flip. Texas got hit by a storm, materials prices rose, the roof failed inspection — and we had to relist. Not our most glamorous deal, but we delivered a return.\n\nNumbers: Purchase $90k, rehab $58k, sold $175k. Profit: $17,992. Annualized return: 11.45%. Always have an exit strategy for when Plan A doesn't work.",
  },
  {
    tag: "Case Study",
    title: "Would you reinvest with someone who almost lost your money?",
    body: "About two years before this deal, the same investor joined us on a new construction project that fell apart after city and neighbor battles. He barely recovered his investment — in opportunity cost terms, we effectively lost him money.\n\nAnd yet he came back. Waited for the right deal. And this time it worked.\n\nSears St, Denison TX — 2 units. Purchased December 2020, fully leased July 2021 (7 months). Purchase: $96,800. Rehab: $69,300. Total: $166,110. Monthly rent: $2,300. Yield after expenses: 11.27%. ARV: $195,000.\n\nWith a cash-out refi (75% LTV at 4%, 2% closing): investor gets back $146,250. Cash left in deal: $23,750. Annual profit: $10,343. Cash-on-cash return: 43.6%. Every partnership has failures. The ones who stay through them — and the returns they eventually see — are what make this work worth doing.",
  },
  {
    tag: "Multifamily",
    title: "Duplex to fourplex — 14% yield during COVID",
    body: "Fort Worth, TX — we converted a duplex into a fourplex. Then COVID arrived and complicated everything. The first mortgage fell through after a $225,000 appraisal. The next lender would only appraise based on dollars invested: $180,000 — a 20% haircut. Painful, but we accepted it and moved forward.\n\nNumbers: Purchase $116k, rehab $77k, total $193k. Monthly rent: $3,500. Expenses: $1,200. Monthly profit: $2,300. Annual yield: 14.32%.\n\nAfter securing a 4% mortgage (remarkable for that period) with 75% LTV: cash-on-cash return of 32% — meaning full capital recovery in under 3 years. Not a simple path, but the result made it worth it.",
  },
  {
    tag: "Flipping",
    id: "livingston-flip",
    relatedVideoId: "wFK7g7TL6Sw",
    title: "Flip vs. new construction — how we outsold every new build in the area",
    body: "\"It's a teardown.\" \"I'd demolish and rebuild.\" We hear it on almost every acquisition. But is tearing down and rebuilding always better from a cost and return standpoint? Not necessarily.\n\nAt Livingston Ave, Fort Worth, we stripped the house to studs, added a full second story, and renovated from the ground up. We went back and forth on demolishing vs. building on the existing structure — and chose to build on it, saving ~$50,000.\n\nThe result: we sold for more than any new build in the area at the time. Numbers: Purchase $135k, rehab $156k, holding costs $20k, total $312k. Sale: $500,000. Agent fee: $25k. Net profit: $163,000. ROI: 52%. Project duration: 18 months. Sometimes the smarter play is adding to what's there.",
  },
  {
    tag: "Creative Investing",
    id: "canton-nonconf",
    title: "The non-conforming play — a creative approach in a small market",
    body: "Anticipating rising inflation, we looked for higher-yield opportunities with calculated risk. We found a property zoned single-family but split into five small units. The town had under 5,000 residents — but a unique draw: First Monday, a massive market that brings hundreds of thousands of visitors one weekend per month.\n\nWe approached the city for written recognition of the unit split — requesting \"Non-Conforming\" status. Waited two months, put down $5,000, extended for another $5,000 — and got the approval. Renovated in 5 months. All units rented within a week of completion.\n\nNumbers: Purchase $137,600, rehab $50,000, total $187,600. Monthly rent: $3,000. Yield after expenses: ~13%. Current value: ~$300,000. With a 65% LTV BRRRR exit — all capital returned, $700+/month cash flow. Infinite return.",
  },
  {
    tag: "Apartment Buildings",
    title: "$3,000/month profit with no money out of pocket — owner financing on an 18-unit",
    body: "S. Armstrong, Denison TX — a former hotel converted to apartments. 18 units with potential to expand to 21.\n\nPurchase: $750,000. Planned renovation: $125,000. Total: $875,000. Current gross income: $12,500/month, with future potential of $15,000–16,000/month.\n\nHow we structured it with zero equity out of pocket: The seller agreed to owner financing in second position at 6% for 20 years → $2,000/month. A private lender funded the remainder at 6% for 30 years → $3,000/month. Total financing: $5,000/month.\n\nNet monthly profit today: $3,000. Future profit after improvements: $6,000/month. Creative deal structuring — combining owner financing with private lending — allowed us to acquire a nearly $900k asset with no cash required.",
  },
  {
    tag: "Market Strategy",
    id: "samrayburn-market",
    relatedVideoId: "qYqW9__51SQ",
    title: "Market is down, rates are sky-high — here's where to put your money anyway",
    body: "Everyone's asking the same question: rates are high, inflation won't quit, and the market is dropping. Do we pause investing? Do we wait?\n\nFirst, let's separate recession from crisis. A recession is an economic slowdown — GDP contracts, unemployment rises. A crisis is a structural collapse. We've seen both. Right now we're in the former, not the latter.\n\nIn a recession, long-term real estate investors have historically done well — especially those focused on cash flow rather than appreciation. Our strategy: target 9–10% yield on rental properties. In a satellite market, that's very achievable even at today's rates.\n\nReal example: Bonham, TX — $91,800 purchase, $70,000 renovation, $1,600/month rent, 9% yield. Low price point, small town, steady demand. The strategy doesn't change. The market changes.",
  },
  {
    tag: "Suburb Revival",
    id: "corsicana-suburbs",
    relatedVideoId: "alFSEFyC2HI",
    title: "How satellite towns are outperforming DFW core markets right now",
    body: "During COVID, something interesting happened: people left dense urban cores and moved to suburbs and smaller towns — for space, lower cost, and lifestyle. This wasn't temporary. It created lasting demand in markets that were previously ignored by most investors.\n\nWe've been buying in Corsicana, Denison, Cleburne, and other DFW-adjacent markets for years. The math works better. Properties are cheaper, yields are higher, and buyer demand is growing.\n\nReal deal: Corsicana, TX — purchased a duplex set for $230,000, renovated for $181,250, total $411,250. Six units generating $5,700/month income — 11% yield. After refinancing at 75% LTV: investor gets most capital back, cash-on-cash return jumps to 60%+.\n\nThe suburbs aren't a fallback. They're a strategy.",
  },
  {
    tag: "New Construction",
    id: "lakeshore-newbuild",
    relatedVideoId: "oSoh9uv16Eg",
    title: "23% annually on a new build — the Oak Point story",
    body: "New construction gets a bad reputation among value-add investors. Too slow, too expensive, too risky. But when you find the right lot in an appreciating market, the math can be exceptional.\n\nLakeshore Blvd, Oak Point TX — we purchased the lot for $91,368 and built from scratch. Total construction cost: $354,004. Total investment: $446,372.\n\nSold for $680,000. Net profit after agent fees and closing: approximately $200,000. Total return: 46% over two years — 23% annually.\n\nWe also outperformed the comps in the area, which set a new ceiling for the neighborhood. The key: careful selection of the location, and a builder relationship that kept costs in check. Not every new build makes sense — but when it does, it makes a lot of sense.",
  },
  {
    tag: "Multifamily",
    title: "4 units, fully renovated from start to finish — 17.68% yield",
    body: "Science Bluff area, Fort Worth TX — a fourplex we took from rough condition to fully renovated, all four units.\n\nPurchase: $113,000. Total investment including renovation: $190,000. Monthly income: $3,575. Expenses: ~$900/month. Net monthly: ~$2,675. Annual yield: 17.68%.\n\nAfter securing 75% LTV refinancing, cash left in deal: ~$47,500. Cash-on-cash return: over 64% — meaning full capital recovery in under two years from cash flow alone.\n\nThis is what the BRRRR model looks like when it works cleanly. The key wasn't finding the cheapest property — it was finding a property with the right unit mix, in a market with solid rental demand, and executing a clean renovation that held its appraisal value.",
  },
  {
    tag: "New Construction",
    title: "42% return in 18 months on a COVID-era new build",
    body: "In the middle of COVID, we started a new construction project. Supply chain delays, labor shortages, material cost spikes — everything that could complicate a build was happening simultaneously.\n\nWe pushed through. Total project cost: $593,000. Sale price: $905,000. Net profit after costs: approximately $250,000. Total return: 42% over 18 months.\n\nThe financing math makes it even better. We used leverage throughout — the effective return on equity deployed was over 110% once you account for the structure.\n\nLesson: market disruption creates opportunity for people who can execute. The investors who got into new construction during COVID and delivered — those are the ones who built the track records that attract capital today.",
  },
  {
    tag: "Case Study",
    title: "The deal that lost $100,000 — the honest post-mortem",
    body: "Walnut St, Cleburne TX — I'm writing this one because I think it matters more than most success stories.\n\nWe purchased a property that appeared to have five income-producing units. Purchase price: $80,000. We budgeted $250,000 for renovation and conversion. The problem: the units were non-conforming in a single-family zone, and the city — after two years of bureaucratic back-and-forth — required us to demolish the structure.\n\nWe sold the lot for $150,000. Net result: we lost approximately $100,000 of investor money.\n\nWhat I learned: always get written zoning confirmation before closing, not after. Never assume a city will grandfather a non-conforming use. Plan for the worst-case exit from day one — including lot value only.\n\nThe investor stayed with us. That said more than I could.",
  },
  {
    tag: "Creative Investing",
    title: "How we discovered a hidden 5-unit inside a duplex — and created infinite returns",
    body: "E. Vickery, Fort Worth TX — we purchased what was listed as a duplex. During due diligence, we discovered it had actually been operating as five units — a configuration the city hadn't officially recognized.\n\nWe worked to obtain non-conforming status, renovated all five units, and stabilized the building.\n\nNumbers: Purchase $172,767, renovation $253,125, total investment $425,893. Monthly rent: $4,850. Property now valued at $585,000. Annual yield: 10%.\n\nAfter refinancing: all capital returned. Monthly profit continues. Infinite return.\n\nThese hidden multi-unit opportunities exist more than people think. Requires patience, due diligence, and a team that knows how to navigate zoning — but the upside is significant.",
  },
  {
    tag: "Short-Term Rentals",
    title: "Long-term vs. short-term rentals — 4 years of real data",
    body: "Darvany, Dallas TX — we've run this property as a short-term rental and analyzed the data closely. Here's what we found after several years:\n\nShort-term rental yield: approximately 13–14% annually. Long-term rental yield on similar properties: approximately 9%. That's a meaningful gap — but short-term comes with higher management intensity, more vacancy risk, and regulatory exposure.\n\nOur 2023 numbers: $413,000 purchase, $162,500 renovation, $580,500 total investment. Annual income from short-term: 14% return — outperforming long-term projections consistently.\n\nConclusion: STR outperforms in the right market and property type. The right market means tourist demand, business travel, or both. The right property means no HOA, proper licensing, and proximity to demand drivers. Don't do STR in a market where you're guessing on demand.",
  },
  {
    tag: "Short-Term Rentals",
    title: "Six months into our first Airbnb — here's what actually happened",
    body: "A year and a half ago I shared a post about long-term vs. short-term rentals. Now I have six months of actual data to share.\n\nProperty: $690,000 purchase with a $660,000 mortgage at 3.17%. Monthly average income: $13,663. Monthly costs (excluding mortgage): $2,238. Net before mortgage: $9,660/month — a 17.6% annual yield on total investment.\n\nAfter mortgage payment: the property cash flows at roughly $290% return on equity deployed. That's not a typo — it reflects the leverage at an extraordinary rate locked before the rate environment shifted.\n\nDoes this mean STR is always better? No. It means this property, in this location, with this financing structure, worked exceptionally well. The variables matter. Don't project one deal's result onto a different market.",
  },
  {
    tag: "Short-Term Rentals",
    title: "One year later — our Airbnb projections vs. reality",
    body: "When we started the short-term rental, I published projections. Here's the update.\n\nActual annual income: $167,029. Actual annual expenses (excluding mortgage): $93,829. Pre-tax profit: $73,200. Effective return: 14.15%.\n\nWe also purchased a similar property in Sherman, TX projecting 13.5% returns based on this experience. The system is repeatable when the inputs are right.\n\nWhat we track that most people don't: occupancy by season, average nightly rate vs. platform average, review velocity and its effect on visibility, and cost-per-clean as a percentage of revenue. These details separate a well-run STR from one that underperforms its potential.",
  },
  {
    tag: "Fourplex",
    title: "Duplex to fourplex during COVID — the pandemic deal that still returned 49%",
    body: "Fort Worth, TX — a duplex we converted to a fourplex. The pandemic started mid-project. Materials delayed, labor disrupted, and the appraisal came in lower than expected at $180,000 — based on invested dollars rather than market value.\n\nWe accepted the terms and moved forward.\n\nNumbers: Purchase $140,000, renovation $82,000, total investment $227,700. Yield after stabilization: 12%+. Current value with full occupancy: strong.\n\nWith a cash-out refinance at 6% interest rate: potential cash-on-cash return of 49%. Even in a difficult environment, the fundamentals held. COVID didn't change the long-term demand for quality rentals in Fort Worth.",
  },
  {
    tag: "Case Study",
    title: "The auction duplex that took 3x longer than planned — still delivered 11%",
    body: "This one is a lesson in patience over perfection.\n\nWe purchased a duplex at auction for $72,760 — well below market. The plan: renovate in 3–4 months, rent, refinance. Reality: it took over a year. Permits, contractor issues, and scope creep pushed the renovation to $126,466. Total investment: $199,226.\n\nMonthly rent: $2,650. Net income after expenses: $1,850/month. Yield: 11.1%. Estimated sale value: $250,000.\n\nThis deal never looked great on paper during execution. Every month it was over timeline felt like a failure. But we stayed disciplined, didn't overpay to rush, and the final numbers came in where they needed to be. Not every deal runs clean. The ones that don't still count.",
  },
  {
    tag: "Multifamily",
    id: "sylvania-patient",
    title: "8.5% now, 11% at stabilization — the patient play in Fort Worth",
    body: "Not every deal starts at its peak yield. Some deals are priced at today's income, with tomorrow's potential already visible — you just have to be willing to execute the path.\n\nFort Worth triplex — we acquired it at $293,075 and put $177,500 into renovation. Three units: $2,400/month, $1,700/month, $1,700/month — total $5,800/month at stabilization.\n\nAt acquisition: 8.5% yield on current rents. After renovation and lease-up: 11% annual return. Estimated post-renovation value: $600,000–$700,000.\n\nThe investors on this deal came in at the 8.5% stage, knowing the plan. They're collecting 11% today. That's the deal — not every investment needs to start at its ceiling.",
  },
  {
    tag: "Multifamily",
    title: "Community or multi-family? When 5 units outperform everything nearby",
    body: "We acquired a property with five units — technically on the edge between community housing and standard multi-family classification. The question was whether to stabilize all five or convert some.\n\nWe stabilized all five, with a potential sixth unit conversion pending.\n\nNumbers: Purchase $144,658, renovation $162,500, total $307,158. Annual gross income: $60,600. Return on investment: 33%. Current estimated value after renovation: ~$436,000.\n\nAfter a 75% LTV cash-out refi, the returns become extraordinary. This property type — between 4 and 8 units — is often overlooked by both residential and commercial buyers. That gap is exactly where we find value.",
  },
  {
    tag: "Mindset",
    title: "Why real estate — the full answer",
    body: "I get this question a lot. Why real estate? Why not stocks, crypto, a business?\n\nHere's the honest answer: real estate is the only asset class I know of where you can use other people's money to buy a physical asset, that someone else pays off over time, while you collect cash flow, tax benefits, and appreciation simultaneously.\n\nI've been doing this for close to a decade in DFW. I've watched clients from Israel, the US, and elsewhere build meaningful wealth — not through speculation, but through consistent execution on boring, cash-flowing rental properties.\n\nThe math compounds in your favor over time. The tax benefits are real. The leverage amplifies everything. And in DFW specifically — population growth, job diversification, no state income tax — the fundamentals are as strong as anywhere in the country.\n\nIt's not glamorous. It's not fast. It works.",
  },
  {
    tag: "Mindset",
    title: "The laser pointer and the lesson on respect",
    body: "When I was a kid, I went to a market with my dad. He haggled aggressively with every vendor — and I remember feeling proud of how much he \"won.\" Years later, in business, I started the same way. Negotiate hard. Push for the bottom.\n\nThen my wife said something I couldn't shake: you catch more flies with honey than vinegar.\n\nI started treating contractors, suppliers, and service providers differently — fairly, consistently, with appreciation. The result: better work, faster response, loyalty during hard jobs.\n\nOne contractor told me: \"I give my best crews to clients who treat us well.\" That statement is worth more than any discount I've ever negotiated.\n\nIn real estate execution, your team is your edge. How you treat them determines how they show up. Respect isn't just the right thing to do — it's a competitive advantage.",
  },
];

function InsightsSection() {
  const preview = INSIGHTS.slice(0, 3);
  return (
    <div className="mt-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-sm font-semibold tracking-widest text-gray-500">INSIGHTS</div>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">Real estate strategies that work in DFW</h2>
          <p className="mt-3 text-lg text-gray-600">Practical thinking on homebuying, house hacking, BRRRR investing, and building wealth through real estate.</p>
        </div>
        <Button href="#/blog" secondary>View all <ArrowRight className="h-5 w-5" /></Button>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {preview.map((ins) => (
          <Card key={ins.title}>
            <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 tracking-wider">{ins.tag}</div>
            <div className="mt-3 text-xl font-bold text-gray-900">{ins.title}</div>
            <p className="mt-3 text-base text-gray-600 leading-relaxed line-clamp-4">{ins.body.split('\n')[0]}</p>
            <a href="#/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:underline">Read more <ArrowRight className="h-4 w-4" /></a>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ---------------- BLOG PAGE ----------------
function BlogPage() {
  useEffect(() => {
    const match = window.location.hash.match(/[?&]post=([^&]+)/);
    if (match) {
      const el = document.getElementById(`insight-${match[1]}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-gray-900 px-6 py-16">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:"url('/images/813-w9th/813_west_9th_street_6023536_001.jpg')",backgroundSize:"cover",backgroundPosition:"center"}} />
        <div className="max-w-6xl mx-auto relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white">
            <Sparkles className="h-4 w-4" />
            Insights
          </div>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white">Real estate insights from the field</h1>
          <p className="mt-4 text-xl text-white/70">Deal breakdowns, investment strategies, and lessons from 300+ transactions in DFW and beyond.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {INSIGHTS.map((ins, i) => (
            <div key={ins.title} id={ins.id ? `insight-${ins.id}` : undefined} className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-md transition-shadow scroll-mt-24">
              <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 tracking-wider">{ins.tag}</div>
              <div className="mt-4 text-2xl font-bold text-gray-900 leading-snug">{ins.title}</div>
              <div className="mt-4 text-base text-gray-600 leading-relaxed whitespace-pre-line">{ins.body}</div>
              {ins.relatedVideoId && (() => {
                const rv = VIDEOS.find(vid => vid.youtubeId === ins.relatedVideoId);
                return rv ? (
                  <div className="mt-6 pt-5 border-t border-gray-100">
                    <div className="text-xs font-semibold tracking-widest text-gray-400 mb-3">RELATED VIDEO</div>
                    <VideoCard v={rv} />
                  </div>
                ) : null;
              })()}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[32px] border bg-emerald-50 p-8">
          <div className="text-2xl font-bold text-gray-900">Want to discuss any of these strategies?</div>
          <p className="mt-3 text-lg text-gray-700">Book a quick call — I'll walk through what makes sense for your situation and budget.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href={CONFIG.contact.bookingHref} target="_blank">Book call <ArrowRight className="h-5 w-5" /></Button>
            <Button href="#/contact" secondary>Contact me</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------- PHOTO STRIP ----------------
const STRIP_PHOTOS = [
  // — interleaved across all properties —
  { src: "/Shipp/Shipp Kitchen- After.webp",                      label: "Rowlett, TX" },
  { src: "/images/813-w9th/813_west_9th_street_6023536_001.jpg",  label: "Dallas, TX" },
  { src: "/images/wood-kitchen-after.jpg",                        label: "Denison, TX" },
  { src: "/images/lang-kit-b-after.jpg",                          label: "DFW, TX" },
  { src: "/images/731-hull/ARS05128_sm.jpg",                      label: "Denison, TX" },
  { src: "/images/liv-ext-b-after.jpg",                           label: "Fort Worth, TX" },
  { src: "/images/rob-liv-b-after.jpg",                           label: "Cleburne, TX" },

  { src: "/Shipp/Shipp Pool After.webp",                          label: "Rowlett, TX" },
  { src: "/images/813-w9th/813_west_9th_street_6023536_003.jpg",  label: "Dallas, TX" },
  { src: "/images/ram-ext-b-after.jpg",                           label: "DFW, TX" },
  { src: "/images/wood-living1-after.jpg",                        label: "Denison, TX" },
  { src: "/images/731-hull/ARS05142_sm.jpg",                      label: "Denison, TX" },
  { src: "/images/liv-liv-b-after.jpg",                           label: "Fort Worth, TX" },
  { src: "/images/rob-bath-b-after.jpg",                          label: "Cleburne, TX" },

  { src: "/Shipp/Shipp Master Bath - After 1.webp",               label: "Rowlett, TX" },
  { src: "/images/sers-ext-b-after.jpg",                          label: "DFW, TX" },
  { src: "/images/813-w9th/813_west_9th_street_6023536_005.jpg",  label: "Dallas, TX" },
  { src: "/images/wood-dining-after.jpg",                         label: "Denison, TX" },
  { src: "/images/731-hull/ARS05162_sm.jpg",                      label: "Denison, TX" },

  { src: "/Shipp/Shipp Living Bird- After.webp",                  label: "Rowlett, TX" },
  { src: "/images/813-w9th/813_west_9th_street_6023536_007.jpg",  label: "Dallas, TX" },
  { src: "/images/vick-ext-b-after.jpg",                          label: "Fort Worth, TX" },
  { src: "/images/wood-family-after.jpg",                         label: "Denison, TX" },
  { src: "/images/731-hull/ARS05182_sm.jpg",                      label: "Denison, TX" },

  { src: "/Shipp/Shipp Master Bed - After.webp",                  label: "Rowlett, TX" },
  { src: "/images/813-w9th/813_west_9th_street_6023536_009.jpg",  label: "Dallas, TX" },
  { src: "/images/lang-bath-b-after.jpg",                         label: "DFW, TX" },
  { src: "/images/wood-bedroom-after.jpg",                        label: "Denison, TX" },
  { src: "/images/731-hull/ARS05192_sm.jpg",                      label: "Denison, TX" },

  { src: "/Shipp/Shipp Breakfest - After.webp",                   label: "Rowlett, TX" },
  { src: "/images/813-w9th/813_west_9th_street_6023536_010.jpg",  label: "Dallas, TX" },
  { src: "/images/ram-kit-b-after.jpg",                           label: "DFW, TX" },
  { src: "/images/wood-bath1-after.jpg",                          label: "Denison, TX" },
  { src: "/images/731-hull/ARS05207_sm.jpg",                      label: "Denison, TX" },

  { src: "/Shipp/Shipp Dine - After.webp",                        label: "Rowlett, TX" },
  { src: "/images/813-w9th/813_west_9th_street_6023536_012.jpg",  label: "Dallas, TX" },
  { src: "/images/sers-kit-b-after.jpg",                          label: "DFW, TX" },
  { src: "/images/wood-bath2-after.jpg",                          label: "Denison, TX" },
  { src: "/images/731-hull/ARS05222_sm.jpg",                      label: "Denison, TX" },

  { src: "/images/ship-bedroom-after.jpg",                        label: "Rowlett, TX" },
  { src: "/images/813-w9th/813_west_9th_street_6023536_014.jpg",  label: "Dallas, TX" },
  { src: "/images/vick-bath-b-after.jpg",                         label: "Fort Worth, TX" },
  { src: "/images/wood-shower-after.jpg",                         label: "Denison, TX" },
  { src: "/images/731-hull/ARS05232_sm.jpg",                      label: "Denison, TX" },

  { src: "/images/ship-deck-b-after.jpg",                         label: "Rowlett, TX" },
  { src: "/images/813-w9th/813_west_9th_street_6023536_016.jpg",  label: "Dallas, TX" },
  { src: "/images/lang-int-b-after.jpg",                          label: "DFW, TX" },
  { src: "/images/wood-stairs-after.jpg",                         label: "Denison, TX" },
  { src: "/images/731-hull/ARS05242_sm.jpg",                      label: "Denison, TX" },

  { src: "/images/ship-dining-after.jpg",                         label: "Rowlett, TX" },
  { src: "/images/813-w9th/813_west_9th_street_6023536_006.jpg",  label: "Dallas, TX" },
  { src: "/images/ram-bath-b-after.jpg",                          label: "DFW, TX" },
  { src: "/images/wood-landing-after.jpg",                        label: "Denison, TX" },
  { src: "/images/731-hull/ARS05252_sm.jpg",                      label: "Denison, TX" },

  { src: "/images/ship-nook-after.jpg",                           label: "Rowlett, TX" },
  { src: "/images/sers-bath-b-after.jpg",                         label: "DFW, TX" },
  { src: "/images/wood-living2-after.jpg",                        label: "Denison, TX" },
  { src: "/images/731-hull/ARS05262_sm.jpg",                      label: "Denison, TX" },

  { src: "/images/ship-masterbath-after.jpg",                     label: "Rowlett, TX" },
  { src: "/images/qui-bath-b-after.jpg",                          label: "DFW, TX" },
  { src: "/images/wood-vanity-after.jpg",                         label: "Denison, TX" },
  { src: "/images/ram-gar-b-after.jpg",                           label: "DFW, TX" },
  { src: "/images/731-hull/ARS05272_sm.jpg",                      label: "Denison, TX" },
  { src: "/images/sers-liv-b-after.jpg",                          label: "DFW, TX" },
  { src: "/images/731-hull/ARS05277_sm.jpg",                      label: "Denison, TX" },
];

// ---------------- THE PLATFORM ECOSYSTEM ----------------
const ECOSYSTEM = [
  {
    name: "Apex Acquisitions",
    role: "Off-Market Deal Sourcing",
    description: "We find off-market and wholesale deals before they ever hit the MLS.",
    url: null,
    live: false,
    phase: "Acquire",
  },
  {
    name: "Caplex Equity",
    role: "Investment Strategy & Acquisitions",
    description: "Investment-focused brokerage. We help you find, underwrite, and close smart deals in DFW.",
    url: "https://cap-lex.com",
    live: true,
    current: true,
    phase: "Acquire",
  },
  {
    name: "AMP Live Group",
    role: "Construction & Renovation",
    description: "Full-service renovation and remodeling. Alexa Peer on-site every week.",
    url: "https://amplivegroupllc.com",
    live: true,
    phase: "Improve",
  },
  {
    name: "Furnish4Stay",
    role: "STR & Furnished Rental Setup",
    description: "Full furnishing and design service for Airbnb, mid-term, and furnished rentals.",
    url: null,
    live: false,
    phase: "Furnish",
  },
  {
    name: "Fixory",
    role: "Property Maintenance & Repairs",
    description: "Ongoing maintenance, repairs, and turnovers for rental investors.",
    url: null,
    live: false,
    phase: "Maintain",
  },
  {
    name: "Bloxx Property Management",
    role: "Leasing & Operations",
    description: "Full-service property management built for investors. By investors, for investors.",
    url: "https://bloxxpm.com",
    live: true,
    phase: "Operate",
  },
];

const PHASE_STYLE = {
  Acquire:  { badge: "bg-blue-100 text-blue-700",   card: "bg-blue-50 border-blue-100"   },
  Improve:  { badge: "bg-amber-100 text-amber-700",  card: "bg-amber-50 border-amber-100" },
  Furnish:  { badge: "bg-violet-100 text-violet-700",card: "bg-violet-50 border-violet-100"},
  Maintain: { badge: "bg-orange-100 text-orange-700",card: "bg-orange-50 border-orange-100"},
  Operate:  { badge: "bg-emerald-100 text-emerald-700",card:"bg-emerald-50 border-emerald-100"},
};

// ---------------- VIDEOS ----------------
const ytThumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const ytThumbFallback = (id) => `https://img.youtube.com/vi/${id}/0.jpg`;
const ytEmbed = (id) => `https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1&enablejsapi=1`;

const VIDEOS = [
  // Featured — most visually impactful property videos
  { youtubeId: "pv-tiGlWF9I", title: "Before & After Transformations", label: "All Projects · DFW, TX", featured: true, thumb: "/Shipp/Shipp Kitchen- After.webp" },
  { youtubeId: "VaFLwByddOM", title: "Hull — Before & After Renovation", label: "Denison, TX", featured: true, unpublished: true },
  { youtubeId: "oSoh9uv16Eg", title: "Lakeshore New Build", label: "DFW, TX", featured: true, unpublished: true },
  // Alexa — field videos featuring Alexa
  { youtubeId: "WjKKQXwa-ds", title: "Meet Alexa — Our Contractor", label: "DFW, TX", alexa: true, unpublished: true },
  { youtubeId: "ctOQQhHkSSE", title: "Alexa Wins Zoning Case", label: "Fort Worth, TX", alexa: true, thumb: "/images/sers-ext-b-after.jpg", caseId: "bessie" },
  { youtubeId: "LYOh19_nrTA", title: "Real Estate Isn't Always Glamorous", label: "DFW, TX", alexa: true, unpublished: true },
  // More clips
  { youtubeId: "kP8qNdWINBA", title: "Inside a Texas Investment Property", label: "DFW, TX", unpublished: true },
  { youtubeId: "IrlxaPO9m0s", title: "Woodard — Before & After", label: "DFW, TX", unpublished: true },
  { youtubeId: "alFSEFyC2HI", title: "3 Duplexes in Corsicana, TX", label: "Corsicana, TX", thumb: "/images/212 N 19th St Corsicana/After/275542367_10159219985867851_7508397285433597479_n.jpg", caseId: "corsicana" },
  { youtubeId: "GQUb9ym0WOU", title: "Broken Duplex → 5-Unit Property", label: "DFW, TX", unpublished: true },
  { youtubeId: "UgD6XLh-oRE", title: "2 Hours to Close on a Lake House", label: "DFW, TX", unpublished: true },
  { youtubeId: "dKFfcl-e6K0", title: "Shipp Rd — Lake House Retreat", label: "Rowlett, TX", thumb: "/Shipp/Shipp Pool After.webp", caseId: "shipp" },
  { youtubeId: "CN4_P1suAvg", title: "Turning a Duplex Into 5 Units", label: "Fort Worth, TX", thumb: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1235696367969856010/original/b54e3174-74dd-41cb-83a1-a9ab9e3f50bd.jpeg", caseId: "blandin" },
  { youtubeId: "GuLMK6OIqhw", title: "Real Estate Isn't Always Pretty", label: "DFW, TX", thumb: "/images/813-w9th/813_west_9th_street_6023536_001.jpg" },
  { youtubeId: "vS-jeqbv1wE", title: "Fagan Project Breakdown", label: "Blue Mound, TX", thumb: "/images/Fagan/1712 Fagan/After/1.jpeg", caseId: "fagan" },
  { youtubeId: "RwgHwC5x8nc", title: "Investing With Little Money — 4 Strategies", label: "DFW, TX", unpublished: true },
  { youtubeId: "5EgiyDCOY2I", title: "Which Parts of a House Should You Renovate?", label: "DFW, TX", unpublished: true },
  { youtubeId: "dY6vPRhaw44", title: "Should You Renovate the Exterior?", label: "DFW, TX", unpublished: true },
  { youtubeId: "tMfqcwDEw_0", title: "When Deals Don't Go as Planned", label: "DFW, TX", unpublished: true },
  { youtubeId: "cnVakKcSBEo", title: "Renovating While Living in the House", label: "Fort Worth, TX", thumb: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1235696367969856010/original/bee3e795-9f95-489c-ae76-0f4c008a5eb8.jpeg", caseId: "blandin" },
  { youtubeId: "ow3zrZiqOhQ", title: "McKinney, TX — Deal Breakdown", label: "McKinney, TX", unpublished: true },
  { youtubeId: "lEGoqdIQt0o", title: "My House Hacking Journey", label: "DFW, TX", unpublished: true },
  { youtubeId: "wFK7g7TL6Sw", title: "Fort Worth — Renovation vs New Build", label: "Fort Worth, TX", unpublished: true },
  { youtubeId: "z5ywNcZPAvg", title: "Contractor on Renovation Benefits", label: "DFW, TX", unpublished: true },
  { youtubeId: "BzMdTU5frHI", title: "Unexpected Construction Site Rescue", label: "DFW, TX", unpublished: true },
  { youtubeId: "5TddiKcCxNs", title: "You Don't Need a License for Real Estate", label: "DFW, TX", unpublished: true },
  { youtubeId: "8ZxcmfAOZyE", title: "The #1 Rule of Real Estate", label: "DFW, TX", unpublished: true },
  { youtubeId: "qYqW9__51SQ", title: "Recession vs Depression — Real Estate", label: "DFW, TX", unpublished: true },
  { youtubeId: "vZzr6XXMQiY", title: "Real Estate Market Insights", label: "DFW, TX", thumb: "/images/web_Nir-Portrait9.jpg" },
  { youtubeId: "JWnnehdkCP0", title: "Our Journey — Paycheck to Top 1%", label: "DFW, TX", unpublished: true },
  { youtubeId: "Naz_bkmL7Zk", title: "Working as a Married Couple", label: "DFW, TX", unpublished: true },
  { youtubeId: "fe4cWUlTGcQ", title: "The Business That Failed", label: "DFW, TX", unpublished: true },
  { youtubeId: "IFwuxVrGzO0", title: "Break Big Goals Into Steps", label: "DFW, TX", unpublished: true },
  { youtubeId: "hQie42OTdjw", title: "The Importance of Empathy", label: "DFW, TX", thumb: "/images/web_Nir-Portrait3.jpg" },
  { youtubeId: "Vvhbb57uc8Y", title: "Project Overview", label: "DFW, TX", thumb: "/images/731-hull/ARS05128_sm.jpg" },
];

// ── Phone mockup components ──────────────────────────────────────────────────
function PhoneShell({ v, active, playing, onPlay }) {
  return (
    <div style={{ position: 'relative', userSelect: 'none' }}>
      {/* Phone body */}
      <div style={{
        background: 'linear-gradient(145deg, #2c2c2c, #1a1a1a)',
        borderRadius: '36px',
        padding: '14px 12px 24px',
        boxShadow: active
          ? '0 28px 65px rgba(0,0,0,0.55), 0 0 0 1.5px #3d3d3d, inset 0 1px 0 rgba(255,255,255,0.08)'
          : '0 8px 24px rgba(0,0,0,0.28), 0 0 0 1px #2a2a2a',
        position: 'relative',
        transition: 'box-shadow 0.3s',
      }}>
        {/* Dynamic island */}
        <div style={{
          position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
          width: '64px', height: '18px', background: '#000', borderRadius: '9px', zIndex: 10,
        }} />
        {/* Left side buttons */}
        <div style={{ position: 'absolute', top: '62px',  left: '-3px', width: '3px', height: '22px', background: '#111', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', top: '92px',  left: '-3px', width: '3px', height: '32px', background: '#111', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', top: '130px', left: '-3px', width: '3px', height: '32px', background: '#111', borderRadius: '2px 0 0 2px' }} />
        {/* Right side button */}
        <div style={{ position: 'absolute', top: '78px', right: '-3px', width: '3px', height: '52px', background: '#111', borderRadius: '0 2px 2px 0' }} />
        {/* Screen */}
        <div style={{ borderRadius: '26px', overflow: 'hidden', aspectRatio: '9/16', background: '#000', position: 'relative' }}>
          {active && playing ? (
            <iframe
              src={ytEmbed(v.youtubeId)}
              title={v.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            />
          ) : (
            <div
              style={{ position: 'relative', width: '100%', height: '100%', cursor: active ? 'pointer' : 'default' }}
              onClick={active ? onPlay : undefined}
            >
              <img
                src={v.thumb || ytThumb(v.youtubeId)}
                alt={v.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={e => { e.target.onerror = null; e.target.src = ytThumbFallback(v.youtubeId); }}
              />
              {active && (
                <>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(0,0,0,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.15)'; }}
                  >
                    <div style={{ background: 'rgba(255,255,255,0.93)', borderRadius: '50%', padding: '14px', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
                      <svg viewBox="0 0 24 24" fill="#cc0000" style={{ width: 28, height: 28, display: 'block' }}>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.75))',
                    padding: '28px 12px 12px',
                    pointerEvents: 'none',
                  }}>
                    <div style={{ color: '#fff', fontSize: '11px', fontWeight: 600, lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {v.title}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '10px', marginTop: '2px' }}>{v.label}</div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        {/* Home indicator */}
        <div style={{
          position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)',
          width: '70px', height: '3px', background: 'rgba(255,255,255,0.15)', borderRadius: '2px',
        }} />
      </div>
    </div>
  );
}

function PhoneCarousel({ videos }) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const [privateIds, setPrivateIds] = React.useState(new Set());
  const PHONE_W = 408;

  const goTo = (idx) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
    setPlaying(false);
  };

  // Detect YouTube player errors (100/101/150 = private or embedding disabled)
  React.useEffect(() => {
    const onMsg = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (data.event === 'onError' && [100, 101, 150].includes(data.info)) {
          setPrivateIds(prev => new Set([...prev, videos[activeIdx]?.youtubeId]));
          setPlaying(false);
        }
      } catch {}
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [activeIdx, videos]);

  return (
    <div className="flex flex-col items-center" style={{ userSelect: 'none' }}>
      {/* Static phone frame — only the screen content slides */}
      <div style={{
        width: `${PHONE_W}px`,
        position: 'relative',
        background: 'linear-gradient(145deg, #2c2c2c, #1a1a1a)',
        borderRadius: '44px',
        padding: '16px 14px 28px',
        boxShadow: '0 30px 70px rgba(0,0,0,0.55), 0 0 0 1.5px #3d3d3d, inset 0 1px 0 rgba(255,255,255,0.08)',
      }}>
        {/* Dynamic island */}
        <div style={{ position: 'absolute', top: '11px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '20px', background: '#000', borderRadius: '10px', zIndex: 10 }} />
        {/* Left side buttons */}
        <div style={{ position: 'absolute', top: '72px',  left: '-3px', width: '3px', height: '26px', background: '#111', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', top: '108px', left: '-3px', width: '3px', height: '38px', background: '#111', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', top: '154px', left: '-3px', width: '3px', height: '38px', background: '#111', borderRadius: '2px 0 0 2px' }} />
        {/* Right side button */}
        <div style={{ position: 'absolute', top: '94px', right: '-3px', width: '3px', height: '62px', background: '#111', borderRadius: '0 2px 2px 0' }} />

        {/* Screen — videos slide inside here */}
        <div style={{ borderRadius: '30px', overflow: 'hidden', aspectRatio: '9/16', background: '#000', position: 'relative' }}>
          {/* Sliding strip of all videos */}
          <div style={{
            display: 'flex',
            height: '100%',
            transform: `translateX(-${activeIdx * 100}%)`,
            transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}>
            {videos.map((v, i) => {
              const isPrivate = privateIds.has(v.youtubeId);
              return (
                <div key={v.youtubeId} style={{ flexShrink: 0, width: '100%', height: '100%', position: 'relative' }}>
                  {i === activeIdx && playing && !isPrivate ? (
                    <iframe
                      src={ytEmbed(v.youtubeId)}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                    />
                  ) : (
                    <div
                      style={{ position: 'relative', width: '100%', height: '100%', cursor: i === activeIdx && !isPrivate ? 'pointer' : 'default' }}
                      onClick={i === activeIdx && !isPrivate ? () => setPlaying(true) : undefined}
                    >
                      <img
                        src={v.thumb || ytThumb(v.youtubeId)}
                        alt={v.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: isPrivate ? 'brightness(0.3)' : 'none' }}
                        onError={e => { e.target.onerror = null; e.target.src = ytThumbFallback(v.youtubeId); }}
                      />
                      {isPrivate ? (
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '28px' }}>🎬</div>
                          <div style={{ color: '#fff', fontSize: '12px', fontWeight: 600, textAlign: 'center', padding: '0 16px' }}>Coming soon</div>
                          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', textAlign: 'center', padding: '0 16px' }}>{v.title}</div>
                        </div>
                      ) : i === activeIdx ? (
                        <>
                          <div style={{
                            position: 'absolute', inset: 0,
                            background: 'rgba(0,0,0,0.15)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'background 0.2s',
                          }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.3)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.15)'; }}
                          >
                            <div style={{ background: 'rgba(255,255,255,0.93)', borderRadius: '50%', padding: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
                              <svg viewBox="0 0 24 24" fill="#cc0000" style={{ width: 32, height: 32, display: 'block' }}>
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <div style={{
                            position: 'absolute', bottom: 0, left: 0, right: 0,
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.78))',
                            padding: '36px 16px 16px',
                            pointerEvents: 'none',
                          }}>
                            <div style={{ color: '#fff', fontSize: '13px', fontWeight: 600, lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                              {v.title}
                            </div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', marginTop: '3px' }}>{v.label}</div>
                            {v.caseId && (
                              <a
                                href={`#/case?id=${v.caseId}`}
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', marginTop: '6px', color: '#34d399', fontSize: '10px', fontWeight: 700, letterSpacing: '0.04em', pointerEvents: 'auto', textDecoration: 'none' }}
                              >
                                VIEW CASE STUDY →
                              </a>
                            )}
                          </div>
                        </>
                      ) : null}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Home indicator */}
        <div style={{
          position: 'absolute', bottom: '9px', left: '50%', transform: 'translateX(-50%)',
          width: '82px', height: '3px', background: 'rgba(255,255,255,0.15)', borderRadius: '2px',
        }} />
      </div>

      {/* Prev / next below the phone */}
      <div className="flex items-center gap-4 mt-5" style={{ width: '100%', maxWidth: `${PHONE_W}px`, padding: '0 8px' }}>
        <button
          onClick={() => goTo(Math.max(0, activeIdx - 1))}
          disabled={activeIdx === 0}
          className="flex-shrink-0 p-2.5 rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800 disabled:opacity-25 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
        </button>
        <div className="flex-1 text-center min-w-0">
          <div className="text-sm font-semibold text-gray-800 leading-tight" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {videos[activeIdx]?.title}
          </div>
          <div className="text-xs text-gray-400 mt-0.5">{activeIdx + 1} / {videos.length}</div>
        </div>
        <button
          onClick={() => goTo(Math.min(videos.length - 1, activeIdx + 1))}
          disabled={activeIdx === videos.length - 1}
          className="flex-shrink-0 p-2.5 rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800 disabled:opacity-25 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-1.5 mt-3 flex-wrap justify-center" style={{ maxWidth: `${PHONE_W}px` }}>
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              height: '6px',
              width: i === activeIdx ? '22px' : '6px',
              borderRadius: '3px',
              background: i === activeIdx ? '#059669' : '#d1d5db',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'width 0.2s, background 0.2s',
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Single phone with its own play state (used in blog/case studies)
function SinglePhone({ v }) {
  const [playing, setPlaying] = React.useState(false);
  return (
    <div className="flex flex-col items-center" style={{ width: '220px' }}>
      <PhoneShell v={v} active={true} playing={playing} onPlay={() => setPlaying(true)} />
    </div>
  );
}

// Hook: resolves to true if the YouTube video is publicly available, false if private/deleted.
// YouTube returns a 120×90 grey placeholder for unavailable videos; real thumbnails are larger.
function useYtAvailable(youtubeId) {
  const [available, setAvailable] = React.useState(null); // null = still checking
  React.useEffect(() => {
    if (!youtubeId) { setAvailable(false); return; }
    const img = new Image();
    img.onload  = () => setAvailable(img.naturalWidth > 120);
    img.onerror = () => setAvailable(false);
    img.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  }, [youtubeId]);
  return available;
}

// Shared skeleton shown while availability is still being checked
function VideoSkeleton({ className = '' }) {
  return (
    <div className={`rounded-2xl overflow-hidden bg-gray-100 animate-pulse ${className}`}>
      <div style={{ aspectRatio: '16/9' }} className="bg-gray-200 w-full" />
      <div className="px-3 py-2.5 space-y-1.5">
        <div className="h-3 bg-gray-200 rounded w-3/4" />
        <div className="h-2.5 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  );
}

// Standard video card for grid layouts (Videos page, etc.)
function VideoCard({ v }) {
  const available = useYtAvailable(v.youtubeId);
  const [playing, setPlaying] = React.useState(false);
  if (available === null) return <VideoSkeleton />;
  if (available === false) return null;
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md bg-gray-900 flex flex-col w-full">
      {playing ? (
        <iframe
          src={ytEmbed(v.youtubeId)}
          title={v.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full bg-black"
          style={{ aspectRatio: "16/9" }}
        />
      ) : (
        <div
          className="relative cursor-pointer group bg-black"
          style={{ aspectRatio: "16/9" }}
          onClick={() => setPlaying(true)}
        >
          <img
            src={v.thumb || ytThumb(v.youtubeId)}
            alt={v.title}
            className="w-full h-full object-cover"
            onError={e => { e.target.onerror = null; e.target.src = ytThumbFallback(v.youtubeId); }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
            <div className="bg-red-600 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="white" className="h-6 w-6"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
      )}
      <div className="px-3 py-2 bg-gray-900">
        <div className="text-white text-sm font-semibold leading-snug">{v.title}</div>
        <div className="text-gray-400 text-xs mt-0.5">{v.label}</div>
      </div>
    </div>
  );
}

// Video card used in case studies — shows house photo, hover reveals muted preview, click to play full
function VideoHoverCard({ v }) {
  const available = useYtAvailable(v.youtubeId);
  const [hovered, setHovered] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  if (available === null) return <VideoSkeleton className="shadow-md" />;
  if (available === false) return null;

  if (clicked) {
    return (
      <div className="rounded-2xl overflow-hidden shadow-md bg-gray-900">
        <iframe
          src={ytEmbed(v.youtubeId)}
          title={v.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', aspectRatio: '16/9', border: 'none', display: 'block' }}
        />
        <div className="px-3 py-2.5 bg-gray-900">
          <div className="text-white text-sm font-semibold leading-snug">{v.title}</div>
          <div className="text-gray-400 text-xs mt-0.5">{v.label}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-md bg-gray-900 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setClicked(true)}
    >
      {/* House photo */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={v.thumb || ytThumb(v.youtubeId)}
          alt={v.title}
          className="w-full h-full object-cover"
          style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.45s ease' }}
          onError={e => { e.target.onerror = null; e.target.src = ytThumbFallback(v.youtubeId); }}
        />

        {/* Default: subtle play button */}
        {!hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/15">
            <div className="bg-white/20 border border-white/30 backdrop-blur-sm rounded-full p-3">
              <svg viewBox="0 0 24 24" fill="white" style={{ width: 22, height: 22 }}><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        )}

        {/* Hover: muted video preview overlay */}
        {hovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: 'rgba(0,0,0,0.72)' }}>
            {/* Mini video player — pointer-events:none keeps hover stable */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10" style={{ width: '84%', aspectRatio: '16/9', pointerEvents: 'none' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0&autoplay=1&mute=1&controls=0&loop=1&playlist=${v.youtubeId}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block', pointerEvents: 'none' }}
              />
            </div>
            <div className="mt-2 flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
              <svg viewBox="0 0 24 24" fill="white" style={{ width: 13, height: 13 }}><path d="M8 5v14l11-7z"/></svg>
              <span style={{ color: 'white', fontSize: '11px', fontWeight: 600 }}>Click to play full video</span>
            </div>
          </div>
        )}
      </div>

      {/* Info footer */}
      <div className="px-3 py-2.5 bg-gray-900">
        <div className="text-white text-sm font-semibold leading-snug">{v.title}</div>
        <div className="text-gray-400 text-xs mt-0.5">{v.label}</div>
      </div>
    </div>
  );
}

// ---------------- GALLERY PAGE ----------------
function GalleryPage() {
  const [selected, setSelected] = React.useState(null);

  const close = () => setSelected(null);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-gray-900 px-6 py-16">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/Shipp/Shipp Kitchen- After.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="max-w-6xl mx-auto relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white">
            <Building2 className="h-4 w-4" />
            Photo Gallery
          </div>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white">Renovated Properties</h1>
          <p className="mt-4 text-xl text-white/70">Before &amp; after photos from our completed projects across DFW and beyond.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3">
          {STRIP_PHOTOS.map((p, i) => (
            <div
              key={p.src + i}
              className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
              onClick={() => setSelected(p)}
            >
              <img
                src={p.src}
                alt={p.label}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="text-white text-xs font-semibold">{p.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={close}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            onClick={close}
          >
            <X className="h-7 w-7" />
          </button>
          <img
            src={selected.src}
            alt={selected.label}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-sm font-medium">{selected.label}</div>
        </div>
      )}
    </div>
  );
}

// ---------------- BEFORE / AFTER SLIDER ----------------
function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const dragging = React.useRef(false);

  const updatePos = (clientX) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className="relative overflow-hidden select-none cursor-ew-resize"
      style={{ aspectRatio: '4/3' }}
      onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
      onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
      onTouchMove={(e) => { dragging.current && updatePos(e.touches[0].clientX); }}
      onTouchEnd={() => { dragging.current = false; }}
    >
      {/* After image — full width base */}
      <img src={after} alt="After" draggable={false} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      {/* Before image — clipped from the right at slider position */}
      <img src={before} alt="Before" draggable={false} className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
      {/* Divider line */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow pointer-events-none" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }} />
      {/* Handle */}
      <div className="absolute top-1/2 pointer-events-none" style={{ left: `${pos}%`, transform: 'translate(-50%, -50%)' }}>
        <div className="w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center gap-0.5">
          <svg viewBox="0 0 20 20" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16 }}>
            <path d="M6 4l-4 6 4 6M14 4l4 6-4 6" />
          </svg>
        </div>
      </div>
      {/* Labels */}
      <div className="absolute top-2 left-2 text-white text-[10px] font-bold tracking-wider px-2 py-0.5 bg-black/50 rounded pointer-events-none">BEFORE</div>
      <div className="absolute top-2 right-2 text-white text-[10px] font-bold tracking-wider px-2 py-0.5 bg-black/50 rounded pointer-events-none">AFTER</div>
    </div>
  );
}

// ---------------- HOME PAGE ----------------
function HomePage() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 relative">

        {/* Hero */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white">
              <Sparkles className="h-4 w-4" />
              {CONFIG.brand.city}
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl">
              {CONFIG.brand.headline}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-gray-600">
              {CONFIG.brand.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={CONFIG.contact.bookingHref} target="_blank">Book a 15‑min call <ArrowRight className="h-5 w-5" /></Button>
              <Button href="#/contact" secondary>Contact us</Button>
            </div>
            <div className="mt-8 rounded-3xl border bg-white p-6 text-gray-600">
              <div className="text-sm font-semibold tracking-widest text-gray-500">WHO WE WORK WITH</div>
              <div className="mt-3 grid gap-2 text-lg">
                <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" /><span><span className="font-semibold">Homebuyers</span> who want their primary home to also be a great investment.</span></div>
                <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" /><span><span className="font-semibold">House hackers</span> buying duplexes or small multifamily — live in one unit, rent the rest.</span></div>
                <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" /><span><span className="font-semibold">Airbnb &amp; short-term rental investors</span> — we source, renovate, furnish, and launch STRs in DFW markets with strong demand.</span></div>
                <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" /><span><span className="font-semibold">Out-of-state &amp; international investors</span> who need a trusted local team on the ground in DFW.</span></div>
                <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" /><span><span className="font-semibold">BRRRR &amp; value-add investors</span> — buy, rehab, rent, refinance, repeat.</span></div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {/* Nir photo */}
            <div className="flex items-center gap-5 rounded-3xl border bg-white p-5 shadow-sm">
              <div className="rounded-2xl shadow-md flex-shrink-0 overflow-hidden bg-gray-100" style={{width:"160px",height:"213px"}}>
                <img
                  src="/images/Nir - Portrait8_retouched.jpg"
                  alt="Nir Sheinbein"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">Nir Sheinbein</div>
                <div className="text-sm text-gray-500 mt-1">TX License #795672</div>
                <div className="text-sm text-gray-500">Dallas–Fort Worth</div>
                <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                  <Building2 className="h-4 w-4" /> Agent & Investor
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Stat label="Transactions" value="300+" icon={BarChart3} />
              <Stat label="Experience" value="~10 years" icon={Compass} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Stat label="Strategy" value="Flips · Rentals · STR" icon={LineChart} />
              <Stat label="Service" value="End‑to‑end" icon={Building2} />
            </div>
          </div>
        </div>

        {/* What I do */}
        <div className="mt-14">
          <Card>
            <div className="text-sm font-semibold tracking-widest text-gray-500">WHAT WE DO</div>
            <div className="mt-4 grid gap-3 text-lg text-gray-700">
              <a href="#/case?id=fagan" className="flex gap-3 items-start group hover:text-gray-900 transition-colors"><Home className="mt-1 h-5 w-5 text-emerald-700 flex-shrink-0" /><span><span className="font-semibold">Smart homebuying</span> — find a primary home in DFW that doubles as a long-term investment. Buy right from the start.{" "}<span className="text-emerald-600 text-sm font-semibold group-hover:underline whitespace-nowrap">→ See example</span></span></a>
              <a href="#/case?id=blandin" className="flex gap-3 items-start group hover:text-gray-900 transition-colors"><Building2 className="mt-1 h-5 w-5 text-emerald-700 flex-shrink-0" /><span><span className="font-semibold">House hacking</span> — buy a duplex, triplex, or small multifamily. Live in one unit, rent the others. Tenants cover your mortgage.{" "}<span className="text-emerald-600 text-sm font-semibold group-hover:underline whitespace-nowrap">→ See example</span></span></a>
              <a href="#/case?id=armstrong" className="flex gap-3 items-start group hover:text-gray-900 transition-colors"><Wallet className="mt-1 h-5 w-5 text-emerald-700 flex-shrink-0" /><span><span className="font-semibold">Rental &amp; BRRRR investing</span> — value-add acquisitions for out-of-state and local investors. We source, underwrite, rehab, and manage through to a lease.{" "}<span className="text-emerald-600 text-sm font-semibold group-hover:underline whitespace-nowrap">→ See example</span></span></a>
              <a href="#/case?id=shipp" className="flex gap-3 items-start group hover:text-gray-900 transition-colors"><Sparkles className="mt-1 h-5 w-5 text-emerald-700 flex-shrink-0" /><span><span className="font-semibold">Airbnb &amp; short-term rentals</span> — we've run STRs for years. We know which markets work, how to underwrite STR yields, and our team handles the full setup and launch.{" "}<span className="text-emerald-600 text-sm font-semibold group-hover:underline whitespace-nowrap">→ See example</span></span></a>
              <a href="#/case?id=livingston" className="flex gap-3 items-start group hover:text-gray-900 transition-colors"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-700 flex-shrink-0" /><span><span className="font-semibold">Flips &amp; creative strategies</span> — value-add flips, subject-to, seller finance, and lease options. We find the path when conventional doesn't work.{" "}<span className="text-emerald-600 text-sm font-semibold group-hover:underline whitespace-nowrap">→ See example</span></span></a>
              <a href="#/case?id=lakeshore" className="flex gap-3 items-start group hover:text-gray-900 transition-colors"><Building2 className="mt-1 h-5 w-5 text-emerald-700 flex-shrink-0" /><span><span className="font-semibold">New builds</span> — ground-up construction on infill lots and teardown sites. We manage the full process from permits to completion and sale or hold.{" "}<span className="text-emerald-600 text-sm font-semibold group-hover:underline whitespace-nowrap">→ See example</span></span></a>
            </div>
          </Card>
        </div>

        {/* Case studies preview */}
        <div className="mt-14 relative overflow-hidden rounded-[36px] px-8 py-10 -mx-0">
          <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage:"url('/images/731-hull/ARS05242_sm.jpg')",backgroundSize:"cover",backgroundPosition:"center"}} />
          <div className="relative">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-sm font-semibold tracking-widest text-gray-500">REAL RESULTS</div>
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">A few recent deals</h2>
              <p className="mt-3 text-lg text-gray-600">Numbers from completed projects I've worked on.</p>
            </div>
            <Button href="#/case" secondary>View all <ArrowRight className="h-5 w-5" /></Button>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DEALS.map((d) => (
              <a key={d.address} href={`#/case?id=${d.id}`} className="block rounded-3xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Slider area — fully interactive, no hover overlay */}
                {d.slider && (
                  <div onClick={(e) => e.preventDefault()}>
                    <BeforeAfterSlider before={d.slider.before} after={d.slider.after} />
                  </div>
                )}
                {!d.slider && d.photo && (
                  <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img src={d.photo} alt={d.address} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                )}
                {/* Info section — hover here shows "View case study" overlay */}
                <div className="group relative p-6">
                  <div className="text-xl font-bold text-gray-900">{d.address}</div>
                  <div className="mt-4 grid gap-2 text-lg text-gray-700">
                    {typeof d.buy === "number" && <div className="flex justify-between"><span className="text-gray-500">Purchase</span><span className="font-semibold">${d.buy.toLocaleString()}</span></div>}
                    {typeof d.rehab === "number" && <div className="flex justify-between"><span className="text-gray-500">Rehab</span><span className="font-semibold">${d.rehab.toLocaleString()}</span></div>}
                    {typeof d.arv === "number" && <div className="flex justify-between"><span className="text-gray-500">After value</span><span className="font-semibold">${d.arv.toLocaleString()}</span></div>}
                    {typeof d.sell === "number" && <div className="flex justify-between"><span className="text-gray-500">Sale</span><span className="font-semibold">${d.sell.toLocaleString()}</span></div>}
                  </div>
                  <div className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-lg font-semibold text-emerald-800">{d.result}</div>
                  {/* Hover overlay only on info section */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900/75 backdrop-blur-sm pointer-events-none rounded-b-3xl">
                    <div className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-gray-900 shadow-lg">
                      View full case study <ArrowRight className="h-4 w-4 text-emerald-600" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-8 relative overflow-hidden rounded-[36px] p-8 -mx-0">
          <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage:"url('/images/wood-kitchen-after.jpg')",backgroundSize:"cover",backgroundPosition:"center"}} />
          <div className="relative grid gap-6 lg:grid-cols-3">
            <Card>
              <div className="text-2xl font-bold">Sourcing</div>
              <p className="mt-3 text-lg text-gray-600">On-market and off-market opportunities. We look for mispriced assets and deals with a solvable problem.</p>
            </Card>
            <Card>
              <div className="text-2xl font-bold">Underwriting</div>
              <p className="mt-3 text-lg text-gray-600">Rent comps, capex plan, ARV, hold vs flip scenarios — and an honest look at what could go wrong.</p>
            </Card>
            <Card>
              <div className="text-2xl font-bold">Execution</div>
              <p className="mt-3 text-lg text-gray-600">Inspection strategy, rehab scope and bids, timeline management, and post-renovation rent or sale prep.</p>
            </Card>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold tracking-widest text-gray-500">HOW WE WORK TOGETHER</div>
            <ol className="mt-5 grid gap-4 text-lg text-gray-700">
              <li className="flex gap-3"><span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-bold shrink-0">1</span><span><span className="font-semibold">Call</span> — we talk goals, budget, timeline, and financing. We'll tell you honestly if the numbers make sense.</span></li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-bold shrink-0">2</span><span><span className="font-semibold">Deal flow</span> — We send you options that fit your buy box, with our underwriting attached.</span></li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-bold shrink-0">3</span><span><span className="font-semibold">Close</span> — inspections, negotiations, lender coordination. We stay in it until keys are in your hand.</span></li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-bold shrink-0">4</span><span><span className="font-semibold">Execute</span> — scope, budget, timelines, and oversight. You stay informed without having to manage the details.</span></li>
            </ol>
          </Card>
          <Card>
            <div className="text-sm font-semibold tracking-widest text-gray-500">HOW WE GET PAID</div>
            <p className="mt-4 text-lg text-gray-600">Depending on the engagement, compensation may include:</p>
            <ul className="mt-4 grid gap-3 text-lg text-gray-700">
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600 shrink-0" /><span>Buyer agent commission</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600 shrink-0" /><span>Sourcing fee</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600 shrink-0" /><span>Project management fee</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600 shrink-0" /><span>Construction margin</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600 shrink-0" /><span>Property management %</span></li>
            </ul>
            <p className="mt-5 text-base text-gray-500">We always disclose the full structure in writing before you commit to anything.</p>
          </Card>
        </div>

        {/* Video Strip — phone carousel */}
        <div className="mt-10">
          <div className="flex items-end justify-between gap-4 px-1 mb-2">
            <div className="text-sm font-semibold tracking-widest text-gray-500">PROJECT VIDEOS</div>
            <a href="#/videos" className="text-sm font-semibold text-emerald-700 hover:underline flex items-center gap-1">All videos <ArrowRight className="h-4 w-4" /></a>
          </div>
          <PhoneCarousel videos={VIDEOS.filter(v => !v.unpublished)} />
        </div>

        {/* Testimonials */}
        <div className="mt-14 relative overflow-hidden rounded-[36px] px-8 py-10">
          <div className="absolute inset-0 bg-gray-900" />
          <div className="absolute inset-0 opacity-20" style={{backgroundImage:"url('/images/rob-liv-b-after.jpg')",backgroundSize:"cover",backgroundPosition:"center"}} />
          <div className="relative">
            <div className="text-sm font-semibold tracking-widest text-emerald-400">WHAT CLIENTS SAY</div>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white">Don't take my word for it</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div key={t.name + t.city} className="rounded-3xl bg-white/10 border border-white/10 p-8">
                  <div className="text-lg text-white/90">"{t.text}"</div>
                  <div className="mt-5 text-base font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-white/60">{t.city}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insights */}
        <InsightsSection />

        {/* The Platform */}
        <PlatformSection />

        {/* Final CTA */}
        <div className="mt-14 rounded-[36px] relative overflow-hidden border bg-gray-900 px-8 py-10 text-white shadow-sm sm:px-10">
          <div className="absolute inset-0 opacity-25 rounded-[36px]" style={{backgroundImage:"url('/images/813-w9th/813_west_9th_street_6023536_007.jpg')",backgroundSize:"cover",backgroundPosition:"center"}} />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl font-bold">Ready to invest in DFW?</h3>
              <p className="mt-3 text-lg text-white/80">Flip, long-term rental, Airbnb, or house hack — start with a short call. We'll tell you honestly which strategy fits your goals and what the numbers look like.</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-lg font-semibold text-gray-900 hover:opacity-90" href={CONFIG.contact.bookingHref} target="_blank" rel="noreferrer">Book 15‑min call <ArrowRight className="h-5 w-5" /></a>
                <a className="inline-flex items-center gap-2 rounded-2xl border border-white/25 px-6 py-4 text-lg font-semibold text-white hover:bg-white/10" href="#/contact">Contact <ArrowRight className="h-5 w-5" /></a>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-6">
              <div className="text-sm font-semibold tracking-widest text-white/60">LICENSE</div>
              <div className="mt-4 grid gap-2 text-lg text-white">
                <div>Agent: <span className="font-semibold">{CONFIG.credentials.agentName}</span> (TX Lic# {CONFIG.credentials.licenseNumber})</div>
                <div>Brokerage: <span className="font-semibold">{CONFIG.credentials.brokerageName}</span> (Lic# {CONFIG.credentials.brokerageLicense})</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ---------------- CASE STUDIES PAGE ----------------
const TAG_LABEL = {
  brrrr: "BRRRR / Rental",
  flip: "Flip",
  multifamily: "Multifamily",
  str: "Short-Term Rental",
  homebuying: "Smart Homebuying",
  househack: "House Hack",
  newbuild: "New Build",
};
const TAG_COLOR = {
  brrrr: "bg-blue-100 text-blue-800",
  flip: "bg-amber-100 text-amber-800",
  multifamily: "bg-purple-100 text-purple-800",
  str: "bg-teal-100 text-teal-800",
  homebuying: "bg-emerald-100 text-emerald-800",
  househack: "bg-purple-100 text-purple-800",
  newbuild: "bg-orange-100 text-orange-800",
};

const CASE_STUDIES = [
  {
    id: "shipp",
    tag: "str",
    address: "Shipp Rd, Rowlett, TX",
    buy: 490000, rehab: 170000, arv: 1003000,
    result: "Infinite return",
    note: "Full renovation on a large Rowlett property — launched as a short-term rental (Airbnb). Refinanced and returned all capital. Generating $120,000/year.",
    relatedVideoIds: ['dKFfcl-e6K0', 'UgD6XLh-oRE'],
    photos: [
      { label: "Kitchen", before: "/Shipp/Shipp Kitchen- Before.jpg", after: "/Shipp/Shipp Kitchen- After.webp" },
      { label: "Living Room", before: "/Shipp/Shipp Living Bird - Before.jpg", after: "/Shipp/Shipp Living Bird- After.webp" },
      { label: "Master Bath", before: "/Shipp/Shipp MAster Bath- Before.jpg", after: "/Shipp/Shipp Master Bath - After 1.webp" },
      { label: "Pool", before: "/Shipp/Shipp Pool - Before.jpg", after: "/Shipp/Shipp Pool After.webp" },
    ]
  },
  {
    id: "woodard",
    tag: "flip",
    address: "W. Woodard, Denison, TX",
    buy: 97000, rehab: 159000, sell: 350000,
    result: "19% return",
    note: "Acquired at a deep discount, fully renovated, sold above ARV.",
    relatedVideoIds: ['IrlxaPO9m0s'],
    photos: [
      { label: "Kitchen", before: "/images/wood-kitchen-before.jpg", after: "/images/wood-kitchen-after.jpg" },
      { label: "Living Room", before: "/images/wood-living1-before.jpg", after: "/images/wood-living1-after.jpg" },
      { label: "Bathroom", before: "/images/wood-bath1-before.jpg", after: "/images/wood-bath1-after.jpg" },
      { label: "Bedroom", before: "/images/wood-bedroom-before.jpg", after: "/images/wood-bedroom-after.jpg" },
    ]
  },
  {
    id: "robinson",
    tag: "brrrr",
    address: "N. Robinson St, Cleburne, TX",
    buy: 191000, rehab: 68000, arv: 400000,
    result: "11.7% → Infinite return",
    note: "Efficient rehab, rented at strong yield, cash-out refinance returned all capital.",
    photos: [
      { label: "Living Room", before: "/images/rob-liv-b-before.jpg", after: "/images/rob-liv-b-after.jpg" },
      { label: "Bathroom", before: "/images/rob-bath-b-before.jpg", after: "/images/rob-bath-b-after.jpg" },
    ]
  },
  {
    id: "livingston",
    tag: "flip",
    address: "Livingston Ave, Fort Worth, TX",
    buy: 135000, rehab: 176000, sell: 500000,
    result: "52% return",
    note: "Major value-add flip in Fort Worth. Sold significantly above purchase + rehab cost.",
    relatedPosts: [{ id: "livingston-flip", title: "Flip vs. new construction — how we outsold every new build in the area" }],
    relatedVideoIds: ['wFK7g7TL6Sw'],
    photos: [
      { label: "Exterior", before: "/images/liv-ext-b-before.jpg", after: "/images/liv-ext-b-after.jpg" },
      { label: "Living Room", before: "/images/liv-liv-b-before.jpg", after: "/images/liv-liv-b-after.jpg" },
    ]
  },
  {
    id: "w9th",
    tag: "brrrr",
    address: "W. 9th St, Dallas, TX",
    buy: 232000, rehab: 129000, arv: 550000,
    result: "11% → Infinite return (BRRRR)",
    note: "Full gut renovation on a Dallas single-family — new siding, floors, kitchen, baths, and layout. Rented at strong yield, then cash-out refinanced to return all invested capital.",
    relatedPosts: [{ id: "w9th-gentrification", title: "How we achieved an infinite return in 18 months through gentrification" }],
    photos: [],
    afterPhotos: [
      { label: "Exterior", src: "/images/813-w9th/813_west_9th_street_6023536_001.jpg" },
      { label: "Kitchen / Living", src: "/images/813-w9th/813_west_9th_street_6023536_003.jpg" },
      { label: "Bedroom", src: "/images/813-w9th/813_west_9th_street_6023536_006.jpg" },
      { label: "Bathroom", src: "/images/813-w9th/813_west_9th_street_6023536_009.jpg" },
    ],
  },
  {
    id: "bessie",
    tag: "multifamily",
    address: "Bessie St, Fort Worth, TX",
    buy: 270000, rehab: 73453, arv: 700000,
    result: "Infinite return (BRRRR)",
    note: "Fourplex acquired and fully renovated despite COVID delays and zoning challenges. Leased to a commercial tenant at $6,400/month — 15% yield. After cash-out refinance, all invested capital was returned.",
    relatedPosts: [{ id: "bessie-brrrr", title: "How a COVID-era fourplex became a 15% yield BRRRR deal" }],
    photos: [],
    afterPhotos: [
      { label: "", src: "/images/901 s Bessie/After/312_8675.jpg" },
      { label: "", src: "/images/901 s Bessie/After/312_8679.jpg" },
      { label: "", src: "/images/901 s Bessie/After/312_8682.jpg" },
      { label: "", src: "/images/901 s Bessie/After/312_8685.jpg" },
    ],
  },
  {
    id: "armstrong",
    tag: "brrrr",
    address: "S. Armstrong, Denison, TX",
    buy: 237327, rehab: 131412, arv: 450000,
    result: "40% return (cash-out refi)",
    note: "Acquired and fully renovated, then rented at $3,000+/month. Purchased mortgage points to lower the rate to 6% — generating $740/month net profit after refinance. A textbook BRRRR execution.",
    relatedPosts: [{ id: "rate-buydown", title: "Should you pay upfront to buy down your interest rate?" }],
    photos: [],
    afterPhotos: [
      { label: "Exterior", src: "/images/731-hull/ARS05277_sm.jpg" },
      { label: "Kitchen", src: "/images/731-hull/ARS05162_sm.jpg" },
      { label: "Bedroom", src: "/images/731-hull/ARS05222_sm.jpg" },
      { label: "Bathroom", src: "/images/731-hull/ARS05128_sm.jpg" },
    ],
  },
  {
    id: "lakeshore",
    tag: "newbuild",
    address: "Lakeshore Blvd, Oak Point, TX",
    buy: 91368, rehab: 354004, sell: 680000,
    result: "46% total / 23% per year",
    note: "Purchased as a renovation project — pivoted to full ground-up new construction after permits were approved. Sold above market after a 2-year hold. A 46% total return.",
    relatedPosts: [{ id: "lakeshore-newbuild", title: "23% annually on a new build — the Oak Point story" }],
    relatedVideoIds: ['oSoh9uv16Eg'],
    photos: [],
    afterPhotos: [
      { label: "", src: "/images/1501 Lakeshore Blvd/1501 Lakeshore Blvd/301389063_10159507926737851_292481158858649682_n.jpg" },
      { label: "", src: "/images/1501 Lakeshore Blvd/1501 Lakeshore Blvd/301394093_10159507927077851_599078868710084083_n.jpg" },
      { label: "", src: "/images/1501 Lakeshore Blvd/1501 Lakeshore Blvd/301558741_10159507926502851_7575244454660437162_n.jpg" },
      { label: "", src: "/images/1501 Lakeshore Blvd/1501 Lakeshore Blvd/301892584_10159507926617851_1552609365216604599_n.jpg" },
    ],
  },
  {
    id: "samrayburn",
    tag: "brrrr",
    address: "W. Sam Rayburn Dr, Bonham, TX",
    buy: 127000, rehab: 167000, arv: 294000,
    result: "10.25% → 83% return",
    note: "Acquired and fully renovated in Bonham, TX. Cash-flowing at 10.25% initial yield; after cash-out refinance, annual return on remaining capital jumped to 83%. Generating $30,701/year.",
    relatedPosts: [{ id: "samrayburn-market", title: "Market is down, rates are sky-high — here's where to put your money anyway" }],
    photos: [
      { label: "Exterior", before: "/images/713 Sam Rayburn/Before/WhatsApp Image 2025-06-30 at 2.18.37 PM.jpeg",   after: "/images/713 Sam Rayburn/After/454436843_10160871076567851_3488921563391151056_n.jpg" },
      { label: "Kitchen",  before: "/images/713 Sam Rayburn/Before/WhatsApp Image 2025-06-30 at 2.18.36 PM.jpeg",   after: "/images/713 Sam Rayburn/After/454233416_10160871076342851_677602482558260063_n.jpg" },
      { label: "Bathroom", before: "/images/713 Sam Rayburn/Before/WhatsApp Image 2025-06-30 at 2.18.38 PM.jpeg",   after: "/images/713 Sam Rayburn/After/450967170_10160871076597851_2932459497096562751_n.jpg" },
      { label: "Bedroom",  before: "/images/713 Sam Rayburn/Before/WhatsApp Image 2025-06-30 at 2.18.39 PM.jpeg",   after: "/images/713 Sam Rayburn/After/454508577_10160871076352851_3918431082030474679_n.jpg" },
    ],
  },
  {
    id: "reseda",
    tag: "flip",
    address: "Chimnieas Ave, Reseda, CA",
    buy: 475000, rehab: 45000, sell: 620000,
    result: "14% → 46% return",
    note: "Los Angeles flip — targeted light rehab on a well-located property. Sold above purchase + rehab cost for a strong total return.",
    photos: [
      { label: "Exterior",    before: "/images/7732 Chimineas/Before/f6c48b48193c2db8a906758e2c6f3b7bl-m0xd-w1020_h770_q80.jpg", after: "/images/7732 Chimineas/Photos- After/DSC01888.jpg" },
      { label: "Exterior 2",  before: "/images/7732 Chimineas/Before/f6c48b48193c2db8a906758e2c6f3b7bl-m1xd-w1020_h770_q80.jpg", after: "/images/7732 Chimineas/Photos- After/DSC01891.jpg" },
      { label: "Living Room", before: "/images/7732 Chimineas/Before/f6c48b48193c2db8a906758e2c6f3b7bl-m2xd-w1020_h770_q80.jpg", after: "/images/7732 Chimineas/Photos- After/DSC01899.jpg" },
      { label: "Interior",    before: "/images/7732 Chimineas/Before/f6c48b48193c2db8a906758e2c6f3b7bl-m3xd-w1020_h770_q80.jpg", after: "/images/7732 Chimineas/Photos- After/DSC01902.jpg" },
    ],
  },
  {
    id: "canton",
    tag: "brrrr",
    address: "Wills Point St, Canton, TX",
    buy: 137600, rehab: 50000, arv: 250000,
    result: "14% yield",
    note: "Acquired and renovated in Canton for $50k. Cash-flowing at 14% annual yield as a long-term rental.",
    relatedPosts: [{ id: "canton-nonconf", title: "The non-conforming play — a creative approach in a small market" }],
    photos: [],
    afterPhotos: [
      { label: "", src: "/images/397 Willis Point/After/707_3696.jpg" },
      { label: "", src: "/images/397 Willis Point/After/707_3710.jpg" },
      { label: "", src: "/images/397 Willis Point/After/707_3715.jpg" },
      { label: "", src: "/images/397 Willis Point/After/707_3722.jpg" },
    ],
  },
  {
    id: "corsicana",
    tag: "brrrr",
    address: "N. 19th St, Corsicana, TX",
    buy: 230000, rehab: 181250, arv: 550000,
    result: "11% → 60% return",
    note: "Major value-add renovation in Corsicana. After rehab and refinance, annual yield grew from 11% to 60% on remaining capital. Generating $47,880/year.",
    relatedPosts: [{ id: "corsicana-suburbs", title: "How satellite towns are outperforming DFW core markets right now" }],
    relatedVideoIds: ['alFSEFyC2HI'],
    photos: [
      { label: "Exterior", before: "/images/212 N 19th St Corsicana/Before/WhatsApp Image 2025-06-30 at 1.43.32 PM.jpeg", after: "/images/212 N 19th St Corsicana/After/275542367_10159219985867851_7508397285433597479_n.jpg" },
      { label: "Kitchen",  before: "/images/212 N 19th St Corsicana/Before/WhatsApp Image 2025-06-30 at 1.43.30 PM (1).jpeg", after: "/images/212 N 19th St Corsicana/After/275303641_10159219986657851_4936512980931754983_n(1).jpg" },
      { label: "Bathroom", before: "/images/212 N 19th St Corsicana/Before/WhatsApp Image 2025-06-30 at 1.43.29 PM.jpeg", after: "/images/212 N 19th St Corsicana/After/275286610_10159219986762851_7479468480873130121_n(1).jpg" },
      { label: "Interior", before: "/images/212 N 19th St Corsicana/Before/WhatsApp Image 2025-06-30 at 1.43.30 PM.jpeg", after: "/images/212 N 19th St Corsicana/After/275301003_10159219986542851_2929711925251260454_n(1).jpg" },
    ],
  },
  {
    id: "whitesboro",
    tag: "brrrr",
    address: "Quillen St, Whitesboro, TX",
    buy: 45000, rehab: 35000, arv: 125000,
    result: "11% yield",
    note: "Low-basis small-town acquisition — bought, renovated, and rented at an 11% annual yield. A straightforward cash-flow play.",
    photos: [
      { label: "Living Room", before: "/images/107 Quilen/Before/Photo Jan 31, 12 46 24 PM.jpg", after: "/images/107 Quilen/After/93e55a7816a084ed17e70a34abbcd35a-uncropped_scaled_within_1536_1152.webp" },
      { label: "Bathroom",    before: "/images/107 Quilen/Before/Photo Jan 31, 12 47 31 PM.jpg", after: "/images/107 Quilen/After/3d191255da0e2b862d4dac560f77430d-uncropped_scaled_within_1536_1152.webp" },
      { label: "Kitchen",     before: "/images/107 Quilen/Before/Photo Jan 31, 12 48 32 PM.jpg", after: "/images/107 Quilen/After/9b8a0414345f0ea68cb2291a08ca0cd0-uncropped_scaled_within_1536_1152.webp" },
      { label: "Room",        before: "/images/107 Quilen/Before/Photo Jan 31, 12 47 20 PM.jpg", after: "/images/107 Quilen/After/97353b906c5f3e81b146542a29990169-uncropped_scaled_within_1536_1152.webp" },
    ],
  },
  {
    id: "retta",
    tag: "brrrr",
    address: "S. Retta St, Fort Worth, TX",
    buy: 132500, rehab: 93750, arv: 280000,
    result: "10.5% yield",
    note: "Fort Worth value-add rental. Renovated and leased at 10.5% yield — generating $23,758 annually.",
    photos: [],
    afterPhotos: [
      { label: "", src: "/images/621 S Retta/After/312_5928.jpg" },
      { label: "", src: "/images/621 S Retta/After/312_5931.jpg" },
      { label: "", src: "/images/621 S Retta/After/312_5934.jpg" },
      { label: "", src: "/images/621 S Retta/After/312_5937.jpg" },
    ],
  },
  {
    id: "sylvania",
    tag: "brrrr",
    address: "N. Sylvania Ave, Fort Worth, TX",
    buy: 293072, rehab: 177500, arv: 604000,
    result: "11% yield",
    note: "Larger Fort Worth acquisition fully renovated to $604k ARV. Producing 11% cash-on-cash yield — $51,816 annually.",
    relatedPosts: [{ id: "sylvania-patient", title: "8.5% now, 11% at stabilization — the patient play in Fort Worth" }],
    photos: [],
    afterPhotos: [
      { label: "Exterior",    src: "/images/1521 Sylvania/After/WhatsApp Image 2025-06-30 at 2.54.55 PM.jpeg" },
      { label: "Kitchen",     src: "/images/1521 Sylvania/After/WhatsApp Image 2025-06-30 at 2.54.59 PM (1).jpeg" },
      { label: "Living Room", src: "/images/1521 Sylvania/After/WhatsApp Image 2025-06-30 at 2.55.01 PM.jpeg" },
      { label: "Bathroom",    src: "/images/1521 Sylvania/After/WhatsApp Image 2025-06-30 at 2.55.03 PM (1).jpeg" },
    ],
  },
  {
    id: "crockett",
    tag: "brrrr",
    address: "S. Crockett St, Sherman, TX",
    buy: 217218, rehab: 125000, arv: 500000,
    result: "15% → 24% return",
    note: "Strong cash-flowing rental in Sherman. Yield improved from 15% to 24% after refinancing out invested capital. Generating $39,240/year.",
    photos: [],
    afterPhotos: [
      { label: "", src: "/images/827c_S_Crockett_St_PhotosForMLS/01__MLS1_mls.jpg" },
      { label: "", src: "/images/827c_S_Crockett_St_PhotosForMLS/02__MLS2_mls.jpg" },
      { label: "", src: "/images/827c_S_Crockett_St_PhotosForMLS/03__MLS3_mls.jpg" },
      { label: "", src: "/images/827c_S_Crockett_St_PhotosForMLS/04__MLS4_mls.jpg" },
    ],
  },
  {
    id: "vaden",
    tag: "brrrr",
    address: "Vaden St, Sherman, TX",
    buy: 86773, rehab: 125000, arv: 300000,
    result: "12.66% yield",
    note: "Low-basis Sherman acquisition fully renovated. Producing consistent 12.66% annual yield — $26,820/year.",
    photos: [],
    afterPhotos: [
      { label: "", src: "/images/410 Vaden Sherman/After/410 Vaden_DKC9047.jpg" },
      { label: "", src: "/images/410 Vaden Sherman/After/410 Vaden_DKC9050.jpg" },
      { label: "", src: "/images/410 Vaden Sherman/After/410 Vaden_DKC9059.jpg" },
      { label: "", src: "/images/410 Vaden Sherman/After/410 Vaden_DKC9062.jpg" },
    ],
  },
  {
    id: "oakknoll",
    tag: "brrrr",
    address: "Oak Knoll Dr, Haltom City, TX",
    buy: 550000, rehab: 132000, arv: 889000,
    result: "9.77% yield",
    note: "Large Haltom City property acquired and renovated to $889k ARV. Generating $69,900 annually at 9.77% yield.",
    photos: [],
    afterPhotos: [
      { label: "", src: "/images/1723 Oak Knoll/312_4806.jpg" },
      { label: "", src: "/images/1723 Oak Knoll/312_4814.jpg" },
      { label: "", src: "/images/1723 Oak Knoll/312_4826.jpg" },
      { label: "", src: "/images/1723 Oak Knoll/312_4838.jpg" },
    ],
  },
  {
    id: "fagan",
    tag: "househack",
    address: "Fagan Drive, Blue Mound, TX",
    buy: 75000, rehab: 68750, arv: 200000,
    result: "47.3% cash-on-cash",
    note: "Bought a single-family home for $75k and built a guest house (ADU) on the property for $68,750. We live in the main house and rent out the guest house — a house hack using a ground-up ADU build. Guest house generates $2,700/month (14.54% yield). After BRRRR refinance, only $32,500 left in the deal at 47.3% cash-on-cash ($15,384/year net).",
    relatedVideoIds: ['vS-jeqbv1wE', 'lEGoqdIQt0o'],
    stats: [
      { label: "Rent Income", value: "$2,700/mo" },
      { label: "NOI", value: "$1,821/mo" },
      { label: "Rent Yield", value: "14.54%" },
      { label: "Cash Left in Deal", value: "$32,500" },
      { label: "Yearly Profit", value: "$15,384" },
      { label: "Cash-on-Cash", value: "47.3%" },
    ],
    photos: [],
    constructionPhotos: [
      { label: "", src: "/images/Fagan/1712 Fagan/Before/20180820_144202.jpg" },
      { label: "", src: "/images/Fagan/1712 Fagan/Before/IMG-20180923-WA0008.jpg" },
      { label: "", src: "/images/Fagan/1712 Fagan/Before/20181101_180544.jpg" },
      { label: "", src: "/images/Fagan/1712 Fagan/Before/20190110_092319.jpg" },
    ],
    afterPhotos: [
      { label: "", src: "/images/Fagan/1712 Fagan/After/1.jpeg" },
      { label: "", src: "/images/Fagan/1712 Fagan/After/2.jpeg" },
      { label: "", src: "/images/Fagan/1712 Fagan/After/3.jpeg" },
      { label: "", src: "/images/Fagan/1712 Fagan/After/4.jpeg" },
    ],
  },
  {
    id: "blandin",
    tag: "househack",
    address: "Blandin St, Fort Worth, TX",
    buy: 180000, rehab: 50000, arv: 540000,
    result: "63.81% cash-on-cash",
    note: "Bought a duplex for $180k and converted it into a 4-plex — lived in 3 of the 4 units during the renovation while the work was happening around us. Renovated and furnished for $50k ($30k rehab + $20k furniture), then launched the units as short-term rentals (Airbnb). Generating $10,000/month gross — $2,989/month NOI after all STR expenses. 63.81% cash-on-cash return.",
    relatedVideoIds: ['cnVakKcSBEo', 'GQUb9ym0WOU', 'CN4_P1suAvg'],
    stats: [
      { label: "Gross Rent", value: "$10,000/mo" },
      { label: "NOI", value: "$2,989/mo" },
      { label: "Rent Yield", value: "15.59%" },
      { label: "Cash Left in Deal", value: "$39,680" },
      { label: "Net Cash Flow", value: "$2,110/mo" },
      { label: "Yearly Net Cash", value: "$25,321" },
      { label: "Cash-on-Cash", value: "63.81%" },
    ],
    photos: [],
    stagedPhotos: [
      { label: "Unit A", src: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1235696367969856010/original/b54e3174-74dd-41cb-83a1-a9ab9e3f50bd.jpeg" },
      { label: "", src: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1235696367969856010/original/bee3e795-9f95-489c-ae76-0f4c008a5eb8.jpeg" },
      { label: "Unit B", src: "https://a0.muscache.com/im/pictures/miso/Hosting-1260246624729598547/original/30ec8fa6-90a1-4868-96f2-8bbfacd365a5.jpeg" },
      { label: "Unit C", src: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1239967066810589568/original/fdfa00de-9f53-40b1-a458-cf4324166f92.jpeg" },
    ],
    airbnbLinks: [
      { label: "Unit A — Comfy Modern Loft", href: "https://www.airbnb.com/rooms/1235696367969856010" },
      { label: "Unit B — Comfy Loft", href: "https://www.airbnb.com/rooms/1260246624729598547" },
      { label: "Unit C — Cozy Flat", href: "https://www.airbnb.com/rooms/1239967066810589568" },
    ],
  },
];

function AfterPhotoGrid({ photos }) {
  return (
    <div className="mt-8 grid gap-3 grid-cols-2 sm:grid-cols-4">
      {photos.map((p) => (
        <div key={p.src}>
          <div className="text-xs font-semibold text-emerald-600 mb-1">{p.label}</div>
          <img src={p.src} alt={p.label} loading="lazy" className="w-full rounded-2xl object-cover aspect-[4/3]" />
        </div>
      ))}
    </div>
  );
}

function BeforeAfterPair({ label, before, after }) {
  return (
    <div>
      <div className="text-sm font-semibold text-gray-500 mb-3">{label}</div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="text-xs font-semibold text-red-500 mb-1">BEFORE</div>
          <img src={before} alt={`${label} before`} loading="lazy" className="w-full rounded-2xl object-cover aspect-[4/3]" />
        </div>
        <div>
          <div className="text-xs font-semibold text-emerald-600 mb-1">AFTER</div>
          <img src={after} alt={`${label} after`} loading="lazy" className="w-full rounded-2xl object-cover aspect-[4/3]" />
        </div>
      </div>
    </div>
  );
}

function CasePage() {
  useEffect(() => {
    const scrollToId = () => {
      const hash = window.location.hash;
      if (!hash.includes("?id=")) return;
      const id = hash.split("?id=")[1].split("&")[0];
      let tries = 0;
      const attempt = () => {
        const el = document.getElementById(`case-${id}`);
        if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
        if (tries++ < 10) setTimeout(attempt, 100);
      };
      setTimeout(attempt, 100);
    };
    scrollToId();
    window.addEventListener("hashchange", scrollToId);
    return () => window.removeEventListener("hashchange", scrollToId);
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white">
          <Building2 className="h-4 w-4" />
          Case Studies
        </div>
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">Deals We've Worked On</h1>
        <p className="mt-4 text-xl text-gray-600">Real properties, real numbers, real before & afters. This is what the work actually looks like.</p>

        <div className="mt-12 grid gap-16">
          {CASE_STUDIES.map((deal) => (
            <div key={deal.address} id={`case-${deal.id}`} className="rounded-3xl border bg-gray-50 p-8 scroll-mt-24">
              {/* Deal header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900">{deal.address}</div>
                  {deal.tag && (
                    <span className={cx("inline-block mt-1.5 rounded-full px-3 py-0.5 text-xs font-semibold", TAG_COLOR[deal.tag])}>
                      {TAG_LABEL[deal.tag]}
                    </span>
                  )}
                  <p className="mt-2 text-lg text-gray-600">{deal.note}</p>
                </div>
                <div className="rounded-2xl bg-emerald-100 px-5 py-3 text-lg font-bold text-emerald-800 shrink-0">{deal.result}</div>
              </div>

              {/* Numbers */}
              <div className="mt-5 flex flex-wrap gap-4 text-base">
                {typeof deal.buy === "number" && (
                  <div className="rounded-xl bg-white border px-4 py-2">
                    <span className="text-gray-500">Purchase </span>
                    <span className="font-semibold text-gray-900">${deal.buy.toLocaleString()}</span>
                  </div>
                )}
                {typeof deal.rehab === "number" && (
                  <div className="rounded-xl bg-white border px-4 py-2">
                    <span className="text-gray-500">Rehab </span>
                    <span className="font-semibold text-gray-900">${deal.rehab.toLocaleString()}</span>
                  </div>
                )}
                {typeof deal.arv === "number" && (
                  <div className="rounded-xl bg-white border px-4 py-2">
                    <span className="text-gray-500">After value </span>
                    <span className="font-semibold text-gray-900">${deal.arv.toLocaleString()}</span>
                  </div>
                )}
                {typeof deal.sell === "number" && (
                  <div className="rounded-xl bg-white border px-4 py-2">
                    <span className="text-gray-500">Sale </span>
                    <span className="font-semibold text-gray-900">${deal.sell.toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* Extra rental/BRRRR stats */}
              {deal.stats && deal.stats.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {deal.stats.map(s => (
                    <div key={s.label} className="rounded-xl bg-white border px-4 py-2 text-base">
                      <span className="text-gray-500">{s.label} </span>
                      <span className="font-semibold text-emerald-700">{s.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Before & After sliders */}
              {deal.photos?.length > 0 && (
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Before &amp; After</div>
                    <div className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-0.5">
                      <svg viewBox="0 0 20 20" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" style={{ width: 12, height: 12 }}>
                        <path d="M6 4l-4 6 4 6M14 4l4 6-4 6" />
                      </svg>
                      <span className="text-emerald-700 text-xs font-semibold">Drag to compare</span>
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {deal.photos.map((p) => (
                      <div key={p.before} style={{ touchAction: 'none' }}>
                        {p.label && <div className="text-sm font-bold text-gray-700 mb-2">{p.label}</div>}
                        <BeforeAfterSlider before={p.before} after={p.after} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* After-only photos */}
              {deal.afterPhotos?.length > 0 && (
                <div>
                  <div className="mt-8 text-sm font-semibold text-gray-500 uppercase tracking-wide">After Renovation</div>
                  <AfterPhotoGrid photos={deal.afterPhotos} />
                </div>
              )}
              {/* Construction process photos */}
              {deal.constructionPhotos?.length > 0 && (
                <div>
                  <div className="mt-8 text-sm font-semibold text-gray-500 uppercase tracking-wide">Construction Process</div>
                  <AfterPhotoGrid photos={deal.constructionPhotos} />
                </div>
              )}
              {/* Staged / furnished photos */}
              {deal.stagedPhotos?.length > 0 && (
                <div>
                  <div className="mt-8 text-sm font-semibold text-gray-500 uppercase tracking-wide">Staged & Furnished</div>
                  <AfterPhotoGrid photos={deal.stagedPhotos} />
                </div>
              )}
              {/* Airbnb listing links */}
              {deal.airbnbLinks?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {deal.airbnbLinks.map(l => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border bg-white px-4 py-2 text-sm font-semibold text-rose-500 hover:bg-rose-50 transition-colors">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                      {l.label} — View on Airbnb
                    </a>
                  ))}
                </div>
              )}
              {/* Related blog posts */}
              {deal.relatedPosts?.length > 0 && (
                <div className="mt-6">
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Blog Post</div>
                  <div className="flex flex-col gap-3">
                    {deal.relatedPosts.map(p => (
                      <a key={p.id} href={`#/blog?post=${p.id}`}
                        className="group flex items-start gap-4 rounded-2xl border bg-white px-5 py-4 hover:border-emerald-300 hover:bg-emerald-50 transition-all shadow-sm">
                        <div className="mt-0.5 shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                          <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                            <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-0.5">Read the full blog post</div>
                          <div className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-emerald-800 transition-colors">{p.title}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-emerald-600 shrink-0 mt-2 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
              {/* Related videos — hover to preview, click to play */}
              {(deal.relatedVideoIds || []).length > 0 && (() => {
                const vids = VIDEOS.filter(v => (deal.relatedVideoIds || []).includes(v.youtubeId));
                return vids.length > 0 ? (
                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Watch the Videos</div>
                      <span className="text-gray-400 text-xs">— hover to preview</span>
                    </div>
                    <div className={`grid gap-4 ${vids.length === 1 ? 'grid-cols-1 max-w-sm' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
                      {vids.map(v => <VideoHoverCard key={v.youtubeId} v={v} />)}
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[32px] border bg-emerald-50 p-8">
          <div className="text-2xl font-bold text-gray-900">Want results like these?</div>
          <p className="mt-3 text-lg text-gray-700">Start with a quick call — we'll define your buy box and show you what's realistic for your budget.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href={CONFIG.contact.bookingHref} target="_blank">Book call <ArrowRight className="h-5 w-5" /></Button>
            <Button href="#/contact" secondary>Contact us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------- ABOUT PAGE ----------------
function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white">
          <Sparkles className="h-4 w-4" />
          About Us
        </div>
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">We invest in DFW real estate and help our clients do the same.</h1>

        {/* Founders intro */}
        <div className="mt-10 rounded-[36px] border bg-gray-50 px-8 py-10">
          <div className="text-sm font-semibold tracking-widest text-gray-500 mb-2">THE FOUNDERS</div>
          <h2 className="text-3xl font-bold text-gray-900">Nir Sheinbein & Alexa Peer</h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Founder photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img src="/images/Nir - Portrait8_retouched.jpg" alt="Nir Sheinbein" loading="lazy" className="w-full aspect-[3/4] object-contain bg-gray-100" />
                <div className="bg-gray-900 px-3 py-2">
                  <div className="text-white font-semibold text-sm">Nir Sheinbein</div>
                  <div className="text-gray-400 text-xs">Co-Founder · Agent & Investor</div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img src="/images/alexa-portrait.jpg" alt="Alexa Sheinbein" loading="lazy" className="w-full aspect-[3/4] object-cover bg-gray-100" />
                <div className="bg-gray-900 px-3 py-2">
                  <div className="text-white font-semibold text-sm">Alexa Peer</div>
                  <div className="text-gray-400 text-xs">Co-Founder · Construction & Development</div>
                </div>
              </div>
            </div>

            {/* Founders text */}
            <div className="grid gap-5 text-lg text-gray-700">
              <p>
                Nir Sheinbein and Alexa Peer are Texas real estate investment specialists and co-founders of CAPLEX Equity — a husband-and-wife team providing comprehensive solutions for investors with an approach built on transparency, trust, and genuine personal connection.
              </p>
              <p>
                We're always looking for new clients — but for us, choosing the right people matters just as much as the deals themselves. Over years in real estate and in business, we've learned that mutual respect is central to success. Real estate has unexpected challenges and setbacks, and the way to handle them is through honest communication and respect — on both sides.
              </p>
              <p>
                Our peace of mind matters to us. Not every client is the right fit for this kind of partnership, even when the financial potential looks great. We make expectations clear from day one. <span className="font-semibold text-gray-900">An investment isn't just a financial transaction — it's a partnership.</span> We choose to work with people who understand that, and know that shared success depends on mutual respect and honest dialogue.
              </p>
            </div>
          </div>
        </div>

        {/* Photo + Bio */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="grid gap-4">
            <img
              src="/images/Nir - Portrait8_retouched.jpg"
              alt="Nir Sheinbein, DFW real estate agent and investor"
              className="w-full rounded-3xl object-contain shadow-xl"
            />
            <img
              src="/images/Alexa And Nir Work Mode.png"
              alt="Nir and Alexa Sheinbein on the job site"
              className="w-full rounded-3xl object-cover shadow-md"
            />
            <img
              src="/images/amp-crew-photo.jpeg"
              alt="Caplex Equity team"
              className="w-full rounded-3xl object-cover shadow-md"
            />
          </div>
          <div className="grid gap-6 text-lg text-gray-700">
            <p>
              We've been working in DFW real estate for close to a decade. Over that time we've closed 300+ transactions — as buyer's agents, investors, and partners on deals with clients across the US and internationally.
            </p>
            <p>
              We started CAPLEX because we kept seeing the same gap: people who wanted to buy smart in DFW but didn't have a local team that could actually execute — not just find the deal, but see it through to a rent, a flip, or an Airbnb launch.
            </p>
            <p>
              We built a ground team in DFW that manages rehab crews, tracks timelines, and keeps projects on budget. We handle deals, underwriting, and client relationships directly — and stay involved through execution so nothing falls through the cracks.
            </p>
            <p>
              We'll tell you when a deal doesn't make sense. We've walked clients away from purchases that would have hurt them — even when it cost us a commission. That's just how we work.
            </p>
          </div>
        </div>

        {/* Origin Story */}
        <div className="mt-10 rounded-[36px] relative overflow-hidden bg-gray-900 px-8 py-10 text-white shadow-sm sm:px-10">
          <div className="absolute inset-0 opacity-15" style={{backgroundImage:"url('/images/web_Nir-and-Alexa.jpg')",backgroundSize:"cover",backgroundPosition:"center"}} />
          <div className="relative">
            <div className="text-sm font-semibold tracking-widest text-emerald-400">HOW IT STARTED</div>
            <h2 className="mt-3 text-3xl font-bold">We got our start through house hacking.</h2>
            <div className="mt-5 grid gap-4 text-lg text-white/80 leading-relaxed">
              <p>
                We didn't start as investors. We started as renters watching money leave our accounts every month and thinking — there has to be a smarter way to do this.
              </p>
              <p>
                Our first move was a house hack. We found a duplex in DFW, ran the numbers, and bought it with an owner-occupied loan — lower down payment, better rate. We moved into one unit and rented out the other. The tenant covered most of the mortgage — essentially living for free while building equity.
              </p>
              <p>
                That experience changed how we see real estate entirely. The right property — bought right — can eliminate your biggest monthly expense. And we realized how few people were doing it, mostly because they didn't know how or didn't have someone to walk them through it.
              </p>
              <p>
                That's what led us to help others. First friends, then referrals, then clients from across the US and internationally who wanted access to the DFW market but needed a team on the ground they could trust.
              </p>
              <p className="text-white font-semibold">
                Close to a decade later, 300+ transactions in, the core strategy hasn't changed: find underpriced assets, execute the rehab, and help our clients build real wealth — starting with the place they live.
              </p>
            </div>
          </div>
        </div>

        {/* Alexa Section */}
        <div className="mt-10">
          <div className="rounded-[36px] border bg-gray-50 px-8 py-10">
            <div className="text-sm font-semibold tracking-widest text-gray-500 mb-2">THE TEAM</div>
            <h2 className="text-3xl font-bold text-gray-900">Alexa Peer — Co-Founder</h2>
            <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
              <div className="grid gap-4">
                <iframe
                  src="https://www.youtube.com/embed/IOggPcATATE"
                  title="Alexa Peer — project walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full rounded-3xl aspect-[9/16] bg-black shadow-md border-0"
                />
                <div className="grid grid-cols-2 gap-4">
                  <iframe
                    src="https://www.youtube.com/embed/buKRGJvySXA"
                    title="Alexa working on-site"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full rounded-2xl aspect-[9/16] bg-black shadow-md border-0"
                  />
                  <iframe
                    src="https://www.youtube.com/embed/ctOQQhHkSSE"
                    title="Alexa wins zoning case"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full rounded-2xl aspect-[9/16] bg-black shadow-md border-0"
                  />
                </div>
                <div className="rounded-2xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-sm text-emerald-800 font-medium">
                  📍 On-site every week — contractor meetings, inspections, and property walkthroughs across DFW.
                </div>
              </div>
              <div className="grid gap-5 text-lg text-gray-700">
                <p>
                  Alexa Peer is the Co-Founder and the driving force behind every project on the ground. She leads all construction management, design, renovation planning, and development — overseeing every build from first demo to final walkthrough.
                </p>
                <p>
                  While Nir handles deal analysis, underwriting, and client relationships, Alexa owns execution. She manages contractor crews, coordinates trades, tracks timelines, controls budgets, and makes sure nothing falls through the cracks.
                </p>
                <p>
                  One of her most important wins: when the city classified one of our Fort Worth properties as single-family despite its multifamily designation, Alexa fought the zoning battle — and won. That kind of determination is what keeps our projects on track and our investors protected.
                </p>
                <p>
                  She also leads interior design and Airbnb staging — furnishing, designing, and launching each short-term rental so it's guest-ready and revenue-generating from day one.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-2xl font-bold text-gray-900">Construction</div>
                    <p className="mt-1 text-base text-gray-600">Full project management — design, planning, contractor oversight, and delivery.</p>
                  </div>
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-2xl font-bold text-gray-900">Design</div>
                    <p className="mt-1 text-base text-gray-600">Renovation planning, interior design, and STR staging from concept to launch.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Gallery */}
        <div className="mt-10">
          <div className="text-sm font-semibold tracking-widest text-gray-500 mb-6">BEHIND THE SCENES</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {VIDEOS.filter(v => v.personal && v.thumb).map(v => (
              <div key={v.file} className="rounded-2xl overflow-hidden aspect-square bg-gray-100 shadow-sm">
                <img
                  src={v.thumb}
                  alt="Behind the scenes"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card>
            <div className="text-2xl font-bold">Transparency first</div>
            <p className="mt-3 text-lg text-gray-600">We share the upside and the risks. We'd rather lose a deal than set unrealistic expectations.</p>
          </Card>
          <Card>
            <div className="text-2xl font-bold">Execution matters</div>
            <p className="mt-3 text-lg text-gray-600">We understand rehab, timelines, and what it actually takes to deliver returns — not just underwriting on a spreadsheet.</p>
          </Card>
          <Card>
            <div className="text-2xl font-bold">Your eyes in DFW</div>
            <p className="mt-3 text-lg text-gray-600">Most of our clients are out of state or international. We're their local presence — inspections, job site visits, contractor meetings.</p>
          </Card>
        </div>

        {/* License */}
        <div className="mt-10 rounded-[32px] border bg-gray-50 p-8">
          <div className="text-sm font-semibold tracking-widest text-gray-500">LICENSE</div>
          <div className="mt-4 grid gap-2 text-lg text-gray-700">
            <div>Agent: <span className="font-semibold">{CONFIG.credentials.agentName}</span> (TX Lic# {CONFIG.credentials.licenseNumber})</div>
            <div>Brokerage: <span className="font-semibold">{CONFIG.credentials.brokerageName}</span> (Broker Lic# {CONFIG.credentials.brokerageLicense})</div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ---------------- VIDEOS PAGE ----------------
function VideosPage() {
  const featured = VIDEOS.filter(v => v.featured && !v.unpublished);
  const alexa    = VIDEOS.filter(v => v.alexa && !v.unpublished);
  const rest     = VIDEOS.filter(v => !v.featured && !v.alexa && !v.personal && !v.unpublished);

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white">
          <Sparkles className="h-4 w-4" />
          Video Gallery
        </div>
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">See the work in action.</h1>
        <p className="mt-4 text-xl text-gray-600">Walkthroughs, renovation process, Airbnb setups, and field updates from our DFW projects.</p>

        {/* Featured videos */}
        <div className="mt-12">
          <div className="text-sm font-semibold tracking-widest text-gray-500 mb-6">FEATURED</div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map(v => (
              <VideoCard key={v.youtubeId} v={v} />
            ))}
          </div>
        </div>

        {/* Alexa videos */}
        <div className="mt-14">
          <div className="rounded-[36px] bg-gray-50 border px-8 py-10">
            <div className="text-sm font-semibold tracking-widest text-gray-500 mb-2">THE TEAM ON THE GROUND</div>
            <h2 className="text-3xl font-bold text-gray-900">Alexa Peer — Co-Founder</h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl">
              Alexa leads all construction, design, and renovation planning at CAPLEX. These videos give you a real look at what that means day to day — from on-site walkthroughs to zoning battles to staging a finished unit.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {alexa.map(v => (
                <VideoCard key={v.youtubeId} v={v} />
              ))}
            </div>
          </div>
        </div>

        {/* More clips */}
        {rest.length > 0 && (
          <div className="mt-14">
            <div className="text-sm font-semibold tracking-widest text-gray-500 mb-6">MORE CLIPS</div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map(v => (
                <VideoCard key={v.youtubeId} v={v} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 rounded-[36px] bg-emerald-50 border border-emerald-100 px-8 py-10">
          <h3 className="text-2xl font-bold text-gray-900">Interested in what you saw?</h3>
          <p className="mt-3 text-lg text-gray-700">Book a call and let's talk about your next deal in DFW — flip, rental, Airbnb, or house hack.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href={CONFIG.contact.bookingHref} target="_blank">Book 15‑min call <ArrowRight className="h-5 w-5" /></Button>
            <Button href="#/contact" secondary>Contact us</Button>
          </div>
        </div>

      </div>
    </div>
  );
}

// ---------------- CONTACT PAGE ----------------
function ContactPage() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white">
          <Phone className="h-4 w-4" />
          Contact
        </div>
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">Let's talk</h1>
        <p className="mt-4 text-xl text-gray-600">Book a short call or message me directly — I reply fast.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="text-2xl font-bold">Reach me</div>
            <div className="mt-5 grid gap-4 text-lg">
              <a className="flex items-center gap-3 rounded-2xl border bg-white px-5 py-4 font-semibold hover:bg-gray-50 text-gray-900" href={CONFIG.contact.phoneHref}>
                <Phone className="h-5 w-5 text-emerald-600" /> Call
              </a>
              <a className="flex items-center gap-3 rounded-2xl border bg-white px-5 py-4 font-semibold hover:bg-gray-50 text-gray-900" href={CONFIG.contact.textHref}>
                <MessageCircle className="h-5 w-5 text-emerald-600" /> Text
              </a>
              <a className="flex items-center gap-3 rounded-2xl border bg-white px-5 py-4 font-semibold hover:bg-gray-50 text-gray-900" href={CONFIG.contact.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5 text-emerald-600" /> WhatsApp
              </a>
              <a className="flex items-center gap-3 rounded-2xl border bg-white px-5 py-4 font-semibold hover:bg-gray-50 text-gray-900" href={CONFIG.contact.emailHref}>
                <Mail className="h-5 w-5 text-emerald-600" /> {CONFIG.contact.emailDisplay}
              </a>
              <Button href={CONFIG.contact.bookingHref} target="_blank">Book 15‑min call <ArrowRight className="h-5 w-5" /></Button>
            </div>
          </Card>

          <Card>
            <div className="text-2xl font-bold">Office</div>
            <div className="mt-5 text-lg text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-emerald-700 shrink-0" />
                <div>
                  <div className="font-semibold">{CONFIG.brand.name}</div>
                  {CONFIG.contact.addressLines.map((l) => (<div key={l}>{l}</div>))}
                  <a className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-emerald-700 hover:underline" href={CONFIG.contact.mapsHref} target="_blank" rel="noreferrer">
                    Open in Google Maps <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <img
                src="/images/web_Nir-Portrait10.jpg"
                alt="Nir Sheinbein, DFW real estate agent"
                className="w-full rounded-2xl object-contain"
              />
              <p className="mt-3 text-sm text-gray-500">Nir Sheinbein — TX License #795672</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ---------------- FOOTER ----------------
// ---------------- ECOSYSTEM BAR ----------------
function EcosystemBar() {
  const others = ECOSYSTEM.filter(co => !co.current);
  return (
    <div style={{background:"#0d0d0d",borderBottom:"1px solid #1c1c1c"}}>
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-0" style={{height:"36px"}}>
        {/* Label */}
        <span style={{color:"#6b7280",fontSize:"11px",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",paddingRight:"16px",borderRight:"1px solid #2a2a2a",marginRight:"16px",whiteSpace:"nowrap"}}>
          The Platform
        </span>
        {/* Companies */}
        <div className="flex items-center gap-0 overflow-x-auto" style={{scrollbarWidth:"none"}}>
          {others.map((co, i) => (
            <React.Fragment key={co.name}>
              {i > 0 && <span style={{color:"#2a2a2a",fontSize:"13px",margin:"0 10px",userSelect:"none"}}>|</span>}
              {co.live ? (
                <a href={co.url} target="_blank" rel="noreferrer"
                  style={{color:"#e5e7eb",fontSize:"12px",fontWeight:500,textDecoration:"none",whiteSpace:"nowrap",transition:"color .15s"}}
                  onMouseOver={e=>e.target.style.color="#fff"}
                  onMouseOut={e=>e.target.style.color="#e5e7eb"}>
                  {co.name}
                </a>
              ) : (
                <span style={{color:"#3f3f3f",fontSize:"12px",fontWeight:400,whiteSpace:"nowrap"}}>
                  {co.name} <span style={{color:"#2d2d2d",fontSize:"10px"}}>· soon</span>
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------- PLATFORM SECTION ----------------
function PlatformSection() {
  return (
    <div className="mt-14 rounded-[36px] border bg-gray-50 px-8 py-12">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-500">
          THE PLATFORM
        </div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">One team. Every phase of real estate.</h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          We built a connected group of companies so your investment doesn't need six different vendors. One team handles it all — from sourcing to management.
        </p>
      </div>

      {/* Phase flow */}
      <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
        {["Acquire", "Improve", "Furnish", "Maintain", "Operate"].map((phase, i) => (
          <React.Fragment key={phase}>
            {i > 0 && <span className="text-gray-300 text-sm font-bold">→</span>}
            <span className={cx("px-3 py-1 rounded-full text-xs font-semibold", PHASE_STYLE[phase].badge)}>
              {phase}
            </span>
          </React.Fragment>
        ))}
      </div>

      {/* Company cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ECOSYSTEM.map((co) => {
          const style = PHASE_STYLE[co.phase];
          return (
            <div key={co.name}
              className={cx(
                "rounded-2xl border p-5 flex flex-col gap-3 transition-opacity",
                co.live ? style.card : "bg-white border-gray-100 opacity-55"
              )}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className={cx("inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2", style.badge)}>
                    {co.phase}
                  </span>
                  <div className="font-bold text-gray-900 leading-snug">{co.name}</div>
                  <div className="text-sm text-gray-600 font-medium mt-0.5">{co.role}</div>
                </div>
                {co.current && (
                  <span className="shrink-0 text-xs font-semibold bg-emerald-600 text-white px-2 py-0.5 rounded-full">You're here</span>
                )}
                {!co.live && (
                  <span className="shrink-0 text-xs font-semibold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Coming soon</span>
                )}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{co.description}</p>
              {co.live && !co.current && (
                <a href={co.url} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:underline mt-auto">
                  Visit {co.name.split(" ")[0]} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Ecosystem strip */}
        <div className="pb-8 mb-8 border-b">
          <div className="text-xs font-semibold tracking-widest text-gray-400 mb-4">THE PLATFORM</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {ECOSYSTEM.map((co) => (
              co.current ? (
                <span key={co.name} className="text-sm font-semibold text-emerald-600">{co.name}</span>
              ) : co.live ? (
                <a key={co.name} href={co.url} target="_blank" rel="noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline inline-flex items-center gap-1">
                  {co.name} <ArrowRight className="h-3 w-3" />
                </a>
              ) : (
                <span key={co.name} className="text-sm text-gray-400">
                  {co.name} <span className="text-xs text-gray-300">· Soon</span>
                </span>
              )
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <div className="font-bold text-xl">CAPLEX EQUITY LLC</div>
            <div className="mt-2 text-gray-600">Flips · Long-term rentals · Airbnb · House hacking in DFW.</div>
          </div>
          <div className="text-gray-700">
            <div className="font-semibold">Contact</div>
            <div className="mt-2 grid gap-1">
              <a className="hover:underline" href={CONFIG.contact.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
              <a className="hover:underline" href={CONFIG.contact.emailHref}>{CONFIG.contact.emailDisplay}</a>
              <a className="hover:underline" href={CONFIG.contact.bookingHref} target="_blank" rel="noreferrer">{CONFIG.contact.bookingLabel}</a>
            </div>
          </div>
          <div className="text-gray-700">
            <div className="font-semibold">License</div>
            <div className="mt-2 text-sm text-gray-600">
              Agent: {CONFIG.credentials.agentName} (TX Lic# {CONFIG.credentials.licenseNumber})<br />
              Brokerage: {CONFIG.credentials.brokerageName} (Broker Lic# {CONFIG.credentials.brokerageLicense})
            </div>
            <div className="mt-3 text-xs text-gray-500 space-y-1">
              <a className="hover:underline block" href="https://www.trec.texas.gov/forms/consumer-protection-notice" target="_blank" rel="noreferrer">TREC Consumer Protection Notice</a>
              <a className="hover:underline block" href="https://www.trec.texas.gov/sites/default/files/pdf-forms/IABS%201-0_1.pdf" target="_blank" rel="noreferrer">Information About Brokerage Services (IABS)</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} CAPLEX EQUITY LLC. All rights reserved.</div>
      </div>
    </footer>
  );
}

// ---------------- ROUTER ----------------
function useRoute() {
  const getHash = () => (typeof window !== "undefined" ? window.location.hash : "");
  const [r, setR] = useState(getHash());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onChange = () => setR(window.location.hash);
    window.addEventListener("hashchange", onChange);
    onChange();
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return (r || "#/").replace("#/", "").split("?")[0] || "/";
}

export default function App() {
  const route = useRoute();
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <EcosystemBar />
      <TopNav />
      {route === "/" && <HomePage />}
      {route === "case" && <CasePage />}
      {route === "blog" && <BlogPage />}
      {route === "videos" && <VideosPage />}
      {route === "gallery" && <GalleryPage />}
      {route === "about" && <AboutPage />}
      {route === "contact" && <ContactPage />}
      <Footer />
    </div>
  );
}
