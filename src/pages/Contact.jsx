import React from "react";
import Section from "../components/Section.jsx";

export default function Contact() {
  return (
    <>
      <Section
        title="Contact"
        subtitle="Tell us what you’re trying to accomplish. We’ll respond with next steps and whether we’re a fit."
      >
        <div className="grid2">
          <div className="card pad">
            <div className="badge">Fastest response</div>
            <h3 style={{ marginTop: 10 }}>WhatsApp</h3>
            <p className="sub">
              Your clients like WhatsApp — so do we. Put your WhatsApp number here and the button will work.
            </p>

            {/* Replace 15551234567 with your WhatsApp number in international format */}
            <a
              className="btn primary"
              href="https://wa.me/15551234567?text=Hi%20Caplex%2C%20I%20want%20to%20talk%20about%20investing%20in%20DFW."
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </a>

            <div className="hr" />
            <div className="small">
              Email: add@yourdomain.com<br/>
              Location: Dallas–Fort Worth, TX
            </div>
          </div>

          <div className="card pad">
            <div className="badge">Contact form</div>
            <p className="sub" style={{ marginTop: 10 }}>
              This is a simple front-end form (no backend). If you want form submissions emailed to you,
              I’ll add Netlify Forms in 2 minutes.
            </p>
            <form className="form">
              <input className="input" placeholder="Name" />
              <input className="input" placeholder="Email" />
              <input className="input" placeholder="Phone / WhatsApp" />
              <textarea className="input" placeholder="What are you looking to do?" />
              <button type="button" className="btn primary">Send</button>
            </form>
          </div>
        </div>
      </Section>

      <Section
        title="Netlify Forms (optional)"
        subtitle="If you want leads captured automatically, we’ll enable Netlify’s built-in form handling."
      >
        <div className="card pad">
          <div className="small">
            Reply “enable Netlify Forms” and I’ll update the Contact page so submissions show up in your Netlify dashboard
            (and can email you notifications).
          </div>
        </div>
      </Section>
    </>
  );
}
