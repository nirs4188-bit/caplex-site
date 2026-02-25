import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";

function Icon({ children }) {
  return (
    <span className="badge" aria-hidden="true">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="card pad">
            <div className="kicker">
              <span>DFW • Value-Add • Operations</span>
            </div>
            <h1 className="h1">
              Build wealth through Texas real estate — with a team that runs the entire machine.
            </h1>
            <p className="lead">
              Caplex Equity is a vertically integrated ecosystem: acquisitions, renovation execution,
              and property operations. We focus on deals where disciplined underwriting and strong
              management create real, durable returns.
            </p>

            <div className="hero-actions">
              <Link className="btn primary" to="/contact">Book a Call</Link>
              <Link className="btn" to="/case-studies">See Case Studies</Link>
              <Link className="btn" to="/services">What We Do</Link>
            </div>

            <div className="meta">
              <div className="pill">Target: buy below market</div>
              <div className="pill">Execution: rehab + stabilization</div>
              <div className="pill">Operations: long-term compounding</div>
            </div>
          </div>

          <div className="card pad">
            <div className="stack">
              <div className="stat">
                <div>
                  <b>Vertically integrated</b>
                  <div className="small">Acquisitions → Construction → Management</div>
                </div>
                <span>End-to-end</span>
              </div>
              <div className="stat">
                <div>
                  <b>Transparency-first</b>
                  <div className="small">Numbers, assumptions, risks — upfront</div>
                </div>
                <span>Clear</span>
              </div>
              <div className="stat">
                <div>
                  <b>DFW focus</b>
                  <div className="small">Demand, jobs, and long-term migration</div>
                </div>
                <span>Texas</span>
              </div>
              <div className="hr" />
              <div className="small">
                <Icon>⚡</Icon> Typical projects include value-add single family and small multifamily.
                <div style={{ height: 8 }} />
                <Icon>🧰</Icon> Rehab management is handled in-house through our construction partners.
                <div style={{ height: 8 }} />
                <Icon>🏠</Icon> Ongoing operations are handled through professional property management.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="What we do"
        subtitle="Caplex is built to remove friction: source the right deal, execute the rehab, then manage performance."
      >
        <div className="grid3">
          <div className="feature">
            <h3>Acquisitions & underwriting</h3>
            <p>
              Deal sourcing, underwriting, market review, and execution planning — with conservative assumptions.
            </p>
          </div>
          <div className="feature">
            <h3>Renovation execution</h3>
            <p>
              Scope, budget, timeline, and quality control — driven by real field experience.
            </p>
          </div>
          <div className="feature">
            <h3>Asset & property operations</h3>
            <p>
              Leasing, maintenance workflows, renewals, and owner reporting — built for scalability.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="How we’re different"
        subtitle="We treat operations as the strategy. Great investing is 20% buying, 80% running."
      >
        <div className="grid2">
          <div className="feature">
            <h3>We show the messy parts</h3>
            <p>
              Real estate is not a straight line. We communicate challenges early and manage expectations like adults.
            </p>
          </div>
          <div className="feature">
            <h3>We build systems, not heroics</h3>
            <p>
              Repeatable processes, tight vendor control, and clean reporting — so results don’t depend on luck.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Ready to talk?"
        subtitle="If you’re looking for a reliable operator in DFW, let’s see if we’re a fit."
      >
        <div className="card pad">
          <div className="grid2">
            <div className="small">
              <div className="badge">Typical investor fit</div>
              <div style={{ height: 10 }} />
              • Wants clear reporting and accountability<br/>
              • Understands risk and expects transparency<br/>
              • Prefers long-term compounding over hype
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "flex-start", flexWrap: "wrap" }}>
              <Link className="btn primary" to="/contact">Book a Call</Link>
              <Link className="btn" to="/about">Learn About Us</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
