import React, { useState } from "react";

export default function Landing({ onInfluencer, onBrand }) {
  const [active, setActive] = useState("brand");

  return (
    <div className="landing">
      {/* ================= HEADER ================= */}
      <header className="header">
        <img src="/logo.png" alt="stoory" className="logo" />
        <div className="menu">☰</div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            we don't tell stories,
            <br />
            we <span>STOORY</span> them.
          </h1>

          <p className="subtitle">
            Transparent. Direct. Empowered. Stoory eliminates middlemen,
            ensuring 100% transparency in every promotion.
          </p>

          <div className="buttons">
            <button className="primary" onClick={onInfluencer}>
              Join as Influencer →
            </button>
            <button className="secondary" onClick={onBrand}>
              Join as Brand →
            </button>
          </div>

          <div className="trusted-row">
            <div className="avatars">
              <img src="/avatars/a1.png" alt="" />
              <img src="/avatars/a2.png" alt="" />
              <img src="/avatars/a3.png" alt="" />
            </div>
            <p>Trusted by 5,000+ influencers & brands</p>
          </div>
        </div>

        <div className="hero-image">
          <img src="/hero/stoory-hero.png" alt="Stoory Hero" />
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features">
        <h2>
          Features Designed for <span>Growth</span>
        </h2>

        <p className="section-desc">
          Our platform provides all the tools and features needed to establish
          meaningful partnerships between brands and influencers.
        </p>

        <div className="feature-list">
          <div className="feature-card">
            <h4>100% Transparency</h4>
            <p>No middleman means complete visibility in every collaboration.</p>
          </div>

          <div className="feature-card">
            <h4>Direct Connection</h4>
            <p>Connect directly with brands or influencers that match you.</p>
          </div>

          <div className="feature-card">
            <h4>Secure Payments</h4>
            <p>Escrow-protected, reliable, and secure payment processing.</p>
          </div>

          <div className="feature-card">
            <h4>Real-Time Tracking</h4>
            <p>Monitor campaign performance with live analytics.</p>
          </div>

          <div className="feature-card">
            <h4>Analytics Dashboard</h4>
            <p>Optimize collaborations with detailed insights.</p>
          </div>

          <div className="feature-card">
            <h4>Easy Profile Setup</h4>
            <p>Create a compelling profile in minutes.</p>
          </div>
        </div>
      </section>

      {/* ================= HOW STOORY WORKS ================= */}
      <section className="how">
        <h2>
          How <span>Stoory</span> Works
        </h2>

        <p className="how-desc">
          Our streamlined process makes collaboration simple, transparent, and
          effective for both influencers and brands.
        </p>

        <div className="how-toggle">
          <button
            className={active === "influencer" ? "active" : ""}
            onClick={() => setActive("influencer")}
          >
            For Influencers
          </button>
          <button
            className={active === "brand" ? "active" : ""}
            onClick={() => setActive("brand")}
          >
            For Brands
          </button>
        </div>

        {active === "influencer" && (
          <div className="how-steps">
            <div className="how-card">
              <div className="step">1</div>
              <h4>Create Your Profile</h4>
              <p>Showcase content, engagement, and collaborations.</p>
            </div>

            <div className="how-card">
              <div className="step">2</div>
              <h4>Connect With Brands</h4>
              <p>Receive or apply to brand collaborations.</p>
            </div>

            <div className="how-card">
              <div className="step">3</div>
              <h4>Collaborate & Earn</h4>
              <p>Deliver content and get paid securely.</p>
            </div>
          </div>
        )}

        {active === "brand" && (
          <div className="how-steps">
            <div className="how-card">
              <div className="step">1</div>
              <h4>Set Up Your Brand</h4>
              <p>Create your brand profile and campaign goals.</p>
            </div>

            <div className="how-card">
              <div className="step">2</div>
              <h4>Find Perfect Influencers</h4>
              <p>Filter influencers by niche and engagement.</p>
            </div>

            <div className="how-card">
              <div className="step">3</div>
              <h4>Launch & Track</h4>
              <p>Track real-time campaign performance.</p>
            </div>
          </div>
        )}
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="mission">
        <h2>Mission</h2>

        <p className="mission-text">
          To build a transparent and empowering influencer ecosystem where
          creators and brands connect directly, foster authentic relationships,
          and grow together without middlemen or hidden fees.
        </p>

        <h3>Values</h3>

        <ul className="values-list">
          <li>
            <span className="dot" />
            <strong>Transparency:</strong> Complete visibility in all
            transactions.
          </li>
          <li>
            <span className="dot" />
            <strong>Empowerment:</strong> Tools and support to succeed.
          </li>
          <li>
            <span className="dot" />
            <strong>Community:</strong> Meaningful connections for growth.
          </li>
          <li>
            <span className="dot" />
            <strong>Innovation:</strong> Continuous improvement through
            feedback.
          </li>
        </ul>

        <div className="vision-card">
          <h3>Our Vision</h3>
          <p className="vision-text">
            “To become the most trusted space where brands and influencers grow
            together.”
          </p>

          <div className="founder">
            <img src="/avatars/a1.png" alt="Founder" />
            <div>
              <strong>Pragnatej Kondala</strong>
              <p>Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
