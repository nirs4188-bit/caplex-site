import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";

const studies = [
  {
    title: "Small multifamily reposition",
    tag: "Multifamily",
    bullets: [
      "Entitlement / unit-count verification",
      "Budget + scope optimization",
      "Rehab execution + lease-up plan",
      "Stabilized operations with clean reporting"
    ],
    note:
      "Details coming soon — real project data will be added here including purchase price, rehab budget, timeline, and stabilized returns."
  },
  {
    title: "Single family value-add (BRRRR-style)",
    tag: "Single Family",
    bullets: [
      "Acquire below market",
      "Renovate with durability in mind",
      "Refinance / optimize leverage",
      "Long-term rental operations"
    ],
    note:
      "Details coming soon — real BRRRR case study with numbers will be shared here."
  },
  {
    title: "Operations turnaround",
    tag: "Operations",
    bullets: [
      "Tenant communication SOP",
      "Maintenance approval thresholds",
      "Vendor performance tracking",
      "Rent-ready and inspection systems"
    ],
    note:
      "Details coming soon — before/after KPIs from a property management turnaround."
  }
];

export default function CaseStudies() {
  return (
    <>
      <Section
        title="Case Studies"
        subtitle="Real projects, real numbers. Here's how we approach deals from acquisition through stabilization."
      >
        <div className="grid3">
          {studies.map((s) => (
            <div key={s.title} className="card pad">
              <div className="badge">{s.tag}</div>
              <h3 style={{ marginTop: 10 }}>{s.title}</h3>
              <ul className="small" style={{ marginTop: 10, color: "rgba(255,255,255,.78)", paddingLeft: 18 }}>
                {s.bullets.map((b) => (
                  <li key={b} style={{ marginBottom: 6 }}>{b}</li>
                ))}
              </ul>
              <div className="hr" />
              <p className="small" style={{ margin: 0, fontStyle: "italic" }}>{s.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Want to learn more?"
        subtitle="Reach out and we'll walk you through our process and past projects."
      >
        <div className="card pad" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div className="small" style={{ flex: 1, minWidth: 200 }}>
            We're happy to share detailed numbers, timelines, and lessons learned from our projects on a call.
          </div>
          <Link className="btn primary" to="/contact">Get in Touch</Link>
        </div>
      </Section>
    </>
  );
}
