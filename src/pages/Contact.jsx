import React, { useState } from "react";
import Section from "../components/Section.jsx";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new URLSearchParams(new FormData(form));
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => alert("Something went wrong. Please try again."));
  }

  return (
    <>
      <Section
        title="Contact"
        subtitle="Tell us what you're trying to accomplish. We'll respond with next steps and whether we're a fit."
      >
        <div className="grid2">
          <div className="card pad">
            <div className="badge">Fastest response</div>
            <h3 style={{ marginTop: 10 }}>WhatsApp</h3>
            <p className="sub">
              Reach us directly on WhatsApp for the fastest response.
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
              Location: Dallas–Fort Worth, TX
            </div>
          </div>

          <div className="card pad">
            <div className="badge">Contact form</div>
            {submitted ? (
              <div style={{ marginTop: 10 }}>
                <h3 style={{ color: "var(--accent2)" }}>Message received</h3>
                <p className="sub">We'll get back to you shortly.</p>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <p className="sub" style={{ marginTop: 10 }}>
                  Fill out the form and we'll be in touch within one business day.
                </p>
                <form
                  className="form"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <input className="input" name="name" placeholder="Name" required />
                  <input className="input" name="email" type="email" placeholder="Email" required />
                  <input className="input" name="phone" placeholder="Phone / WhatsApp" />
                  <textarea className="input" name="message" placeholder="What are you looking to do?" required />
                  <button type="submit" className="btn primary">Send</button>
                </form>
              </>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
