import React from "react";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

function TopNav() {
  const linkClass = ({ isActive }) =>
    "navlink" + (isActive ? " active" : "");

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Caplex Equity home">
          <span className="brand-mark">C</span>
          <span className="brand-name">Caplex Equity</span>
        </Link>

        <nav className="nav">
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/case-studies" className={linkClass}>Case Studies</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        <a className="cta" href="/contact">Book a Call</a>
      </div>
    </header>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <TopNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
