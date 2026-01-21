import { useState } from "react";
import Navbar from "./Navbar";

export default function Landing({ onInfluencer, onBrand }) {
  const [active, setActive] = useState("brand");

  return (
    <>
      <Navbar />

      <div className="landing">
        {/* HERO */}
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

            <div className="trusted">
              <div className="avatars">
                <img src="/avatars/a1.png" alt="" />
                <img src="/avatars/a2.png" alt="" />
                <img src="/avatars/a3.png" alt="" />
              </div>
              <span>Trusted by 5,000+ influencers & brands</span>
            </div>
          </div>

          <div className="hero-image">
            <img src="/hero/stoory-hero.png" alt="Stoory Hero" />
          </div>
        </section>

        {/* FEATURES */}
        <section className="features" id="features">
          <h2>
            Features Designed for <span>Growth</span>
          </h2>

          <div className="feature-list">
            <div className="feature-card">100% Transparency</div>
            <div className="feature-card">Direct Connections</div>
            <div className="feature-card">Secure Payments</div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how" id="how">
          <h2>
            How <span>Stoory</span> Works
          </h2>

          <div className="how-toggle">
            <button
              className={active === "influencer" ? "active" : ""}
              onClick={() => setActive("influencer")}
            >
              Influencer
            </button>
            <button
              className={active === "brand" ? "active" : ""}
              onClick={() => setActive("brand")}
            >
              Brand
            </button>
          </div>
        </section>

        {/* MISSION */}
        <section className="mission" id="mission">
          <h2 className="mission-title">
            Our <span>Mission & Vision</span>
          </h2>

          <p className="mission-text">
            To build a transparent and empowering influencer ecosystem.
          </p>
        </section>

        {/* TEAM */}
        <section className="team" id="team">
          <h2 className="team-title">
            Meet Our <span>Team</span>
          </h2>
        </section>
      </div>
    </>
  );
}
