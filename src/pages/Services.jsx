import React from "react";
import Section from "../components/Section.jsx";

export default function Services() {
  return (
    <>
      <Section
        title="Services"
        subtitle="Pick a lane, or engage us end-to-end. Most partners prefer the full-stack approach."
      >
        <div className="grid3">
          <div className="card pad">
            <h3 style={{ marginTop: 0 }}>Deal sourcing</h3>
            <p className="sub">
              Off-market + MLS identification, broker relationships, and direct-to-seller channels.
            </p>
            <div className="small">
              Deliverables:<br/>
              • Deal brief + photos<br/>
              • Underwriting summary<br/>
              • Execution plan (high level)
            </div>
          </div>

          <div className="card pad">
            <h3 style={{ marginTop: 0 }}>Underwriting & strategy</h3>
            <p className="sub">
              Conservative assumptions, renovation budgets, rent comps, and scenario planning.
            </p>
            <div className="small">
              Deliverables:<br/>
              • Pro-forma + sensitivities<br/>
              • Budget + timeline range<br/>
              • Risk register
            </div>
          </div>

          <div className="card pad">
            <h3 style={{ marginTop: 0 }}>Operations & reporting</h3>
            <p className="sub">
              Leasing, maintenance workflows, vendor control, renewals, and owner communication.
            </p>
            <div className="small">
              Deliverables:<br/>
              • Monthly reporting cadence<br/>
              • Maintenance approval rules<br/>
              • KPI tracking
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Typical engagement"
        subtitle="Most partners want a simple path: find the deal, execute the plan, then manage performance."
      >
        <div className="card pad">
          <div className="grid2">
            <div className="small">
              <div className="badge">Phase 1</div>
              <div style={{ height: 10 }} />
              <b style={{ color: "rgba(255,255,255,.9)" }}>Acquire</b><br/>
              • Deal selection + underwriting<br/>
              • Rehab strategy + budget<br/>
              • Closing support
            </div>
            <div className="small">
              <div className="badge">Phase 2</div>
              <div style={{ height: 10 }} />
              <b style={{ color: "rgba(255,255,255,.9)" }}>Execute + operate</b><br/>
              • Renovation execution<br/>
              • Leasing and stabilization<br/>
              • Ongoing operations + reporting
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
