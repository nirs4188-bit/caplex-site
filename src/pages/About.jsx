import React from "react";
import Section from "../components/Section.jsx";

export default function About() {
  return (
    <>
      <Section
        title="About Caplex"
        subtitle="Caplex Equity is the umbrella for a real estate operating ecosystem in the Dallas–Fort Worth Metroplex."
      >
        <div className="grid2">
          <div className="card pad">
            <div className="badge">Our philosophy</div>
            <p className="sub" style={{ marginTop: 10 }}>
              We buy with a plan, execute with discipline, and operate for durability. We believe transparency beats
              hype — so we share assumptions, risks, and decision logic upfront.
            </p>
            <div className="hr" />
            <div className="small">
              <b style={{ color: "rgba(255,255,255,.9)" }}>Core focus:</b><br/>
              • DFW value-add opportunities<br/>
              • Renovation and repositioning<br/>
              • Professional property operations
            </div>
          </div>

          <div className="card pad">
            <div className="badge">The ecosystem</div>
            <div style={{ marginTop: 10 }} className="small">
              Caplex is supported by sister entities that cover execution and operations:
              <div style={{ height: 10 }} />
              <b style={{ color: "rgba(255,255,255,.9)" }}>Construction / renovations</b><br/>
              • In-house execution capabilities for rehabs and remodels
              <div style={{ height: 10 }} />
              <b style={{ color: "rgba(255,255,255,.9)" }}>Property management</b><br/>
              • Leasing, maintenance coordination, renewals, and reporting
              <div style={{ height: 10 }} />
              The result is tighter control on cost, timeline, and resident experience.
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="A note on risk"
        subtitle="We don’t sell guarantees. We sell competence, transparency, and alignment."
      >
        <div className="card pad">
          <p className="sub" style={{ margin: 0 }}>
            Real estate renovations and operations can surprise you — permit delays, hidden conditions, market shifts,
            and tenant issues are part of the game. Our job is to reduce surprises through underwriting, contingency
            planning, and relentless execution. Some deals will outperform. Some won’t. We don’t hide that.
          </p>
        </div>
      </Section>
    </>
  );
}
