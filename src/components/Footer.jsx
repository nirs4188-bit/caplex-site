import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand" style={{ marginBottom: 8 }}>
            <span className="brand-mark">C</span>
            <span className="brand-name">Caplex Equity</span>
          </div>
          <div className="small">
            Dallas–Fort Worth real estate investment platform focused on value-add,
            operations, and long-term compounding.
          </div>
          <div className="small" style={{ marginTop: 10 }}>
            © {year} Caplex Equity LLC. All rights reserved.
          </div>
        </div>

        <div className="small">
          <div style={{ fontWeight: 700, color: "rgba(255,255,255,.9)", marginBottom: 8 }}>Explore</div>
          <div style={{ display: "grid", gap: 8 }}>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="small">
          <div style={{ fontWeight: 700, color: "rgba(255,255,255,.9)", marginBottom: 8 }}>Contact</div>
          <div style={{ display: "grid", gap: 8 }}>
            <div>DFW Metroplex • Texas</div>
            <div>
              WhatsApp / Call: <span style={{ opacity: .9 }}>Add your number</span>
            </div>
            <div>
              Email: <span style={{ opacity: .9 }}>add@yourdomain.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
