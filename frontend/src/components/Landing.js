import React from "react";
import "../styles.css";
import heroImage from "../assets/hero.png";

export default function Landing({ onInfluencer, onBrand }) {
  return (
    <div className="landing">
      {/* HEADER */}
      <header className="header">
        <h2 className="logo">stoory</h2>
        <div className="menu">☰</div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <p className="trusted">
            Trusted by <b>5,000+</b> influencers & brands
          </p>

          <h1>
            Features Designed <br />
            for <span>Growth</span>
          </h1>

          <p className="subtitle">
            Our platform provides all the tools and features needed to establish
            meaningful partnerships between brands and influencers.
          </p>

          <div className="buttons">
            <button className="primary" onClick={onInfluencer}>
              Join as Influencer →
            </button>

            <button className="secondary" onClick={onBrand}>
              Join as Brand →
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="hero-image">
          <img src={heroImage} alt="Stoory platform" />
        </div>
      </section>
    </div>
  );
}
