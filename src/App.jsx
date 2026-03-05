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
    headline: "I help you buy a home that's a great investment in DFW.",
    tagline: "I'm Nir Sheinbein — a Dallas-based agent and investor with close to a decade of experience and 300+ transactions. I handle sourcing, underwriting, renovation, and management so you don't have to figure it out alone."
  },
  contact: {
    phoneDisplay: "(469) 331‑6295",
    phoneHref: "tel:+14693316295",
    textHref: "sms:+14693316295",
    whatsappHref: "https://wa.me/14693316295",
    emailDisplay: "nir@amplivegroupllc.com",
    emailHref: "mailto:nir@amplivegroupllc.com",
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
          <a href="#/about" className="hover:text-gray-900">About</a>
          <a href="#/contact" className="hover:text-gray-900">Contact</a>
          <Button href={CONFIG.contact.bookingHref} target="_blank">Book Call</Button>
        </div>
      </div>
      {open && (
        <div className="p-6 border-t lg:hidden grid gap-3 text-gray-700 font-medium">
          <a href="#/" onClick={() => setOpen(false)}>Home</a>
          <a href="#/case" onClick={() => setOpen(false)}>Case Studies</a>
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
    text: "I worked with Nir & Alexa across three different real estate investments. I followed their work for two years before investing, and what stood out was their professionalism and transparency. They're always available for questions — even on topics outside the exact scope — and the peace of mind of having a trusted team on the ground in DFW is huge."
  },
  {
    name: "Matt O.",
    city: "Seattle",
    text: "We started in 2019 and to date they've helped us buy and renovate multiple properties. Across states, I can honestly say Nir & Alexa are the kind of people you want on your side — present at every stage, positive, professional, and dependable. Even when things didn't go to plan (it happens), they made sure we felt protected and informed."
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
  { address: "813 W 9th St, Dallas, TX", buy: 232000, rehab: 129000, arv: 550000, result: "11% → Infinite return" },
  { address: "212 N 19th St, Corsicana, TX", buy: 230000, rehab: 181250, arv: 550000, result: "11% → 60%" },
  { address: "7006 Shipp Rd, Rowlett, TX", buy: 490000, rehab: 170000, arv: 1003000, result: "Infinite return" },
  { address: "305 N Robinson St, Cleburne, TX", buy: 191000, rehab: 68000, arv: 400000, result: "11.7% → Infinite" },
  { address: "1221 W Woodard, Denison, TX", buy: 97000, rehab: 159000, sell: 350000, result: "19%" },
  { address: "2728 Livingston Ave, Fort Worth, TX", buy: 135000, rehab: 176000, sell: 500000, result: "52%" }
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

// ---------------- HOME PAGE ----------------
function HomePage() {
  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

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
              <Button href="#/contact" secondary>Contact me</Button>
            </div>
            <div className="mt-8 rounded-3xl border bg-white p-6 text-gray-600">
              <div className="text-sm font-semibold tracking-widest text-gray-500">BUY BOX</div>
              <div className="mt-3 grid gap-2 text-lg">
                <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" /><span>Homes up to ~$600k + small multifamily.</span></div>
                <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" /><span>Within ~1.5–2 hours of Dallas.</span></div>
                <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" /><span>Value‑add, unique deals, and yield strategies.</span></div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {/* Nir photo */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/images/nir-jobsite.jpg"
                alt="Nir Sheinbein on job site"
                className="w-full object-cover max-h-72 object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent px-6 py-4">
                <div className="text-white font-bold text-lg">Nir Sheinbein</div>
                <div className="text-white/70 text-sm">TX License #795672 · DFW</div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Stat label="Transactions" value="300+" icon={BarChart3} />
              <Stat label="Experience" value="~10 years" icon={Compass} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Stat label="Strategy" value="Value‑add + yield" icon={LineChart} />
              <Stat label="Service" value="End‑to‑end" icon={Building2} />
            </div>
          </div>
        </div>

        {/* What I do */}
        <div className="mt-14">
          <Card>
            <div className="text-sm font-semibold tracking-widest text-gray-500">WHAT I DO</div>
            <div className="mt-4 grid gap-3 text-lg text-gray-700">
              <div className="flex gap-3"><Home className="mt-1 h-5 w-5 text-emerald-700" /><span><span className="font-semibold">Smart homebuying</span> — I help you find a primary home that's also a long-term investment, not just a place to live.</span></div>
              <div className="flex gap-3"><Wallet className="mt-1 h-5 w-5 text-emerald-700" /><span><span className="font-semibold">Investor acquisitions</span> — rentals, small multifamily, value‑add plays. I source, underwrite, and execute with you.</span></div>
              <div className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-700" /><span><span className="font-semibold">Execution support</span> — I don't disappear after closing. Rehab scope, timelines, contractor management, and operations.</span></div>
            </div>
          </Card>
        </div>

        {/* Services */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card>
            <div className="text-2xl font-bold">Sourcing</div>
            <p className="mt-3 text-lg text-gray-600">On-market and off-market opportunities. I look for mispriced assets and deals with a solvable problem.</p>
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

        {/* How it works */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold tracking-widest text-gray-500">HOW WE WORK TOGETHER</div>
            <ol className="mt-5 grid gap-4 text-lg text-gray-700">
              <li className="flex gap-3"><span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-bold shrink-0">1</span><span><span className="font-semibold">Call</span> — we talk goals, budget, timeline, and financing. I'll tell you honestly if the numbers make sense.</span></li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-bold shrink-0">2</span><span><span className="font-semibold">Deal flow</span> — I send you options that fit your buy box, with my underwriting attached.</span></li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-bold shrink-0">3</span><span><span className="font-semibold">Close</span> — inspections, negotiations, lender coordination. I stay in it until keys are in your hand.</span></li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-bold shrink-0">4</span><span><span className="font-semibold">Execute</span> — scope, budget, timelines, and oversight. You stay informed without having to manage the details.</span></li>
            </ol>
          </Card>
          <Card>
            <div className="text-sm font-semibold tracking-widest text-gray-500">HOW I GET PAID</div>
            <p className="mt-4 text-lg text-gray-600">Depending on the engagement, compensation may include:</p>
            <ul className="mt-4 grid gap-3 text-lg text-gray-700">
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600 shrink-0" /><span>Buyer agent commission</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600 shrink-0" /><span>Sourcing fee</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600 shrink-0" /><span>Project management fee</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600 shrink-0" /><span>Construction margin</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600 shrink-0" /><span>Property management %</span></li>
            </ul>
            <p className="mt-5 text-base text-gray-500">I always disclose the full structure in writing before you commit to anything.</p>
          </Card>
        </div>

        {/* Case studies preview */}
        <div className="mt-14">
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
              <Card key={d.address}>
                <div className="text-xl font-bold text-gray-900">{d.address}</div>
                <div className="mt-4 grid gap-2 text-lg text-gray-700">
                  {typeof d.buy === "number" && <div className="flex justify-between"><span className="text-gray-500">Purchase</span><span className="font-semibold">${d.buy.toLocaleString()}</span></div>}
                  {typeof d.rehab === "number" && <div className="flex justify-between"><span className="text-gray-500">Rehab</span><span className="font-semibold">${d.rehab.toLocaleString()}</span></div>}
                  {typeof d.arv === "number" && <div className="flex justify-between"><span className="text-gray-500">After value</span><span className="font-semibold">${d.arv.toLocaleString()}</span></div>}
                  {typeof d.sell === "number" && <div className="flex justify-between"><span className="text-gray-500">Sale</span><span className="font-semibold">${d.sell.toLocaleString()}</span></div>}
                </div>
                <div className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-lg font-semibold text-emerald-800">{d.result}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-14">
          <div className="text-sm font-semibold tracking-widest text-gray-500">WHAT CLIENTS SAY</div>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">Don't take my word for it</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name + t.city}>
                <div className="text-lg text-gray-700">"{t.text}"</div>
                <div className="mt-5 text-base font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.city}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-14 rounded-[36px] border bg-gray-900 px-8 py-10 text-white shadow-sm sm:px-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl font-bold">Ready to buy in DFW?</h3>
              <p className="mt-3 text-lg text-white/80">Start with a short call. I'll tell you honestly whether it makes sense and what the path looks like.</p>
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
const CASE_STUDIES = [
  {
    address: "7006 Shipp Rd, Rowlett, TX",
    buy: 490000, rehab: 170000, arv: 1003000,
    result: "Infinite return",
    note: "Full renovation on a large Rowlett property. Refinanced and returned all capital.",
    photos: [
      { label: "Living Room", before: "/images/ship-living-before.jpg", after: "/images/ship-living-after.jpg" },
      { label: "Kitchen", before: "/images/ship-kitchen2-before.jpg", after: "/images/ship-kitchen2-after.jpg" },
      { label: "Master Bath", before: "/images/ship-masterbath-before.jpg", after: "/images/ship-masterbath-after.jpg" },
      { label: "Pool", before: "/images/ship-pool-before.jpg", after: "/images/ship-pool-after.jpg" },
    ]
  },
  {
    address: "1221 W Woodard, Denison, TX",
    buy: 97000, rehab: 159000, sell: 350000,
    result: "19% return",
    note: "Acquired at a deep discount, fully renovated, sold above ARV.",
    photos: [
      { label: "Kitchen", before: "/images/wood-kitchen-before.jpg", after: "/images/wood-kitchen-after.jpg" },
      { label: "Living Room", before: "/images/wood-living1-before.jpg", after: "/images/wood-living1-after.jpg" },
      { label: "Bathroom", before: "/images/wood-bath1-before.jpg", after: "/images/wood-bath1-after.jpg" },
      { label: "Bedroom", before: "/images/wood-bedroom-before.jpg", after: "/images/wood-bedroom-after.jpg" },
    ]
  },
  {
    address: "305 N Robinson St, Cleburne, TX",
    buy: 191000, rehab: 68000, arv: 400000,
    result: "11.7% → Infinite return",
    note: "Efficient rehab, rented at strong yield, cash-out refinance returned all capital.",
    photos: [
      { label: "Living Room", before: "/images/rob-liv-b-before.jpg", after: "/images/rob-liv-b-after.jpg" },
      { label: "Bathroom", before: "/images/rob-bath-b-before.jpg", after: "/images/rob-bath-b-after.jpg" },
    ]
  },
  {
    address: "2728 Livingston Ave, Fort Worth, TX",
    buy: 135000, rehab: 176000, sell: 500000,
    result: "52% return",
    note: "Major value-add flip in Fort Worth. Sold significantly above purchase + rehab cost.",
    photos: [
      { label: "Exterior", before: "/images/liv-ext-b-before.jpg", after: "/images/liv-ext-b-after.jpg" },
      { label: "Living Room", before: "/images/liv-liv-b-before.jpg", after: "/images/liv-liv-b-after.jpg" },
    ]
  },
];

function BeforeAfterPair({ label, before, after }) {
  return (
    <div>
      <div className="text-sm font-semibold text-gray-500 mb-3">{label}</div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="text-xs font-semibold text-red-500 mb-1">BEFORE</div>
          <img src={before} alt={`${label} before`} className="w-full rounded-2xl object-cover aspect-[4/3]" />
        </div>
        <div>
          <div className="text-xs font-semibold text-emerald-600 mb-1">AFTER</div>
          <img src={after} alt={`${label} after`} className="w-full rounded-2xl object-cover aspect-[4/3]" />
        </div>
      </div>
    </div>
  );
}

function CasePage() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white">
          <Building2 className="h-4 w-4" />
          Case Studies
        </div>
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">Deals I've worked on</h1>
        <p className="mt-4 text-xl text-gray-600">Real properties, real numbers, real before & afters. This is what the work actually looks like.</p>

        <div className="mt-12 grid gap-16">
          {CASE_STUDIES.map((deal) => (
            <div key={deal.address} className="rounded-3xl border bg-gray-50 p-8">
              {/* Deal header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900">{deal.address}</div>
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

              {/* Before & After photos */}
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {deal.photos.map((p) => (
                  <BeforeAfterPair key={p.label} label={p.label} before={p.before} after={p.after} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Missing deals note */}
        <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-6 text-gray-500">
          <div className="font-semibold text-gray-700">📸 Photos still needed for:</div>
          <ul className="mt-2 grid gap-1 text-sm">
            <li>• 813 W 9th St, Dallas, TX (buy $232k / rehab $129k / ARV $550k)</li>
            <li>• 212 N 19th St, Corsicana, TX (buy $230k / rehab $181k / ARV $550k)</li>
          </ul>
        </div>

        <div className="mt-10 rounded-[32px] border bg-emerald-50 p-8">
          <div className="text-2xl font-bold text-gray-900">Want results like these?</div>
          <p className="mt-3 text-lg text-gray-700">Start with a quick call — I'll define your buy box and show you what's realistic for your budget.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href={CONFIG.contact.bookingHref} target="_blank">Book call <ArrowRight className="h-5 w-5" /></Button>
            <Button href="#/contact" secondary>Contact me</Button>
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
          About Nir
        </div>
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">I'm Nir — I invest in DFW real estate and help others do the same.</h1>

        {/* Photo + Bio */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <img
              src="/images/nir-jobsite.jpg"
              alt="Nir Sheinbein on job site"
              className="w-full rounded-3xl object-cover"
            />
          </div>
          <div className="grid gap-6 text-lg text-gray-700">
            <p>
              I've been working in DFW real estate for close to a decade. Over that time I've closed 300+ transactions — as a buyer's agent, an investor, and as a partner on deals with clients across the US and internationally.
            </p>
            <p>
              I started CAPLEX because I kept seeing the same gap: people who wanted to buy smart in DFW but didn't have a local team that could actually execute — not just find the deal, but see it through to a rent or a sale.
            </p>
            <p>
              I work closely with Alexa, my operations partner on the ground. She manages rehab crews, tracks timelines, and keeps projects running while I handle deals, underwriting, and client relationships. Together we've built a system that actually delivers.
            </p>
            <p>
              I'll tell you when a deal doesn't make sense. I've walked clients away from purchases that would have hurt them — even when it cost me a commission. That's just how I work.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card>
            <div className="text-2xl font-bold">Transparency first</div>
            <p className="mt-3 text-lg text-gray-600">I share the upside and the risks. I'd rather lose a deal than set unrealistic expectations.</p>
          </Card>
          <Card>
            <div className="text-2xl font-bold">Execution matters</div>
            <p className="mt-3 text-lg text-gray-600">I understand rehab, timelines, and what it actually takes to deliver returns — not just underwriting on a spreadsheet.</p>
          </Card>
          <Card>
            <div className="text-2xl font-bold">Your eyes in DFW</div>
            <p className="mt-3 text-lg text-gray-600">Most of my clients are out of state or international. I'm their local presence — inspections, job site visits, contractor meetings.</p>
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
                <Phone className="h-5 w-5 text-emerald-600" /> Call {CONFIG.contact.phoneDisplay}
              </a>
              <a className="flex items-center gap-3 rounded-2xl border bg-white px-5 py-4 font-semibold hover:bg-gray-50 text-gray-900" href={CONFIG.contact.textHref}>
                <MessageCircle className="h-5 w-5 text-emerald-600" /> Text {CONFIG.contact.phoneDisplay}
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
                src="/images/alexa-portrait.jpg"
                alt="Alexa on job site"
                className="w-full rounded-2xl object-cover max-h-48 object-top"
              />
              <p className="mt-3 text-sm text-gray-500">Alexa — operations partner, DFW</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ---------------- FOOTER ----------------
function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <div className="font-bold text-xl">CAPLEX EQUITY LLC</div>
            <div className="mt-2 text-gray-600">Real estate investing & smart homebuying in DFW.</div>
          </div>
          <div className="text-gray-700">
            <div className="font-semibold">Contact</div>
            <div className="mt-2 grid gap-1">
              <a className="hover:underline" href={CONFIG.contact.phoneHref}>{CONFIG.contact.phoneDisplay}</a>
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
            <div className="mt-3 text-xs text-gray-500">
              TREC Consumer Protection Notice + IABS will be linked here on the live site.
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

  return (r || "#/").replace("#/", "") || "/";
}

export default function App() {
  const route = useRoute();
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <TopNav />
      {route === "/" && <HomePage />}
      {route === "case" && <CasePage />}
      {route === "about" && <AboutPage />}
      {route === "contact" && <ContactPage />}
      <Footer />
    </div>
  );
}
