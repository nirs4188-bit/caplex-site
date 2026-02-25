import React from "react";

export default function Section({ title, subtitle, children }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">{title}</h2>
        {subtitle ? <p className="sub">{subtitle}</p> : null}
        {children}
      </div>
    </section>
  );
}
