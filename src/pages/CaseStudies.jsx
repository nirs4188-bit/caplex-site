import React from "react";
import Section from "../components/Section.jsx";

const studies = [
  {
    title: "Small multifamily reposition",
    bullets: [
      "Entitlement / unit-count verification",
      "Budget + scope optimization",
      "Rehab execution + lease-up plan",
      "Stabilized operations with clean reporting"
    ],
    note:
      "Replace this placeholder with your real project (address optional). Include: purchase, rehab, ARV, rents, timeline."
  },
  {
    title: "Single family value-add (BRRRR-style)",
    bullets: [
      "Acquire below market",
      "Renovate with durability in mind",
      "Refinance / optimize leverage",
      "Long-term rental operations"
    ],
    note:
      "Replace this placeholder with your BRRRR-style case study and the numbers you like to share publicly."
  },
  {
    title: "Operations turnaround",
    bullets: [
      "Tenant communication SOP",
      "Maintenance approval thresholds",
      "Vendor performance tracking",
      "Rent-ready and inspection systems"
    ],
    note:
      "Replace this with a property-management operational turnaround story (before/after KPIs)."
  }
];

export default function CaseStudies() {
  return (
    <>
      <Section
        title="Case Studies"
        subtitle="Below are placeholders. Paste your real stories and I’ll format them into sharp, credible case studies with numbers."
      >
        <div className="grid3">
          {studies.map((s) => (
            <div key={s.title} className="card pad">
              <h3 style={{ marginTop: 0 }}>{s.title}</h3>
              <ul className="small" style={{ marginTop: 10, color: "rgba(255,255,255,.78)" }}>
                {s.bullets.map((b) => (
                  <li key={b} style={{ marginBottom: 6 }}>{b}</li>
                ))}
              </ul>
              <div className="hr" />
              <p className="small" style={{ margin: 0 }}>{s.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Want these filled in?"
        subtitle="Send me 1–3 projects (numbers + story) and I’ll convert them into investor-grade case studies."
      >
        <div className="card pad">
          <div className="small">
            Minimum inputs per case study:<br/>
            • Purchase price • Rehab budget • Timeline • Rent or sale outcome • Key risk + how you handled it
          </div>
        </div>
      </Section>
    </>
  );
}
