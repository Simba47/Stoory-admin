import React, { useState } from "react";

export default function Landing({ onInfluencer, onBrand }) {
  const [active, setActive] = useState("brand");

  return (
    <div className="landing">
      {/* HEADER */}
      <header className="header">
        <img
          src="/logo.png"
          alt="stoory"
          className="logo-img"
        />
        <div className="menu">☰</div>
      </header>

      {/* HERO SECTION */}
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

        {/* HERO IMAGE */}
        <div className="hero-image">
          <img src="/hero/stoory-hero.png" alt="Stoory Hero" />
        </div>
      </section>
      {/* FEATURES */}
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
      <div className="feature-icon">🛡️</div>
      <h4>100% Transparency</h4>
      <p>
        No middleman means complete visibility in every stage of your
        promotion and collaboration.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">🤝</div>
      <h4>Direct Connection</h4>
      <p>
        Connect directly with brands or influencers that align with your
        values and audience.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">💳</div>
      <h4>Secure Payments</h4>
      <p>
        Reliable payment processing with escrow protection for both
        parties.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">📈</div>
      <h4>Real-Time Tracking</h4>
      <p>
        Monitor your campaigns' performance with real-time analytics and
        insights.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">📊</div>
      <h4>Analytics Dashboard</h4>
      <p>
        Comprehensive analytics to help you optimize your collaborations
        and ROI.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">👤</div>
      <h4>Easy Profile Setup</h4>
      <p>
        Create a compelling profile and portfolio to showcase your brand
        or influence.
      </p>
    </div>
  </div>
</section>


      {/* HOW STOORY WORKS */}
      <section className="how">
        <h2>
          How <span>Stoory</span> Works
        </h2>

        <p className="how-desc">
          Our streamlined process makes collaboration simple, transparent,
          and effective for both influencers and brands.
        </p>
 


        {/* TOGGLE */}
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

        {/* INFLUENCER FLOW */}
        {active === "influencer" && (
          <div className="how-steps">
            <div className="how-card">
              <div className="step">1</div>
              <h4>Create Your Profile</h4>
              <p>
                Showcase your content, audience demographics, engagement
                rates, and previous collaborations.
              </p>
            </div>

            <div className="how-card">
              <div className="step">2</div>
              <h4>Connect With Brands</h4>
              <p>
                Browse brand opportunities or receive direct collaboration
                requests that match your niche.
              </p>
            </div>

            <div className="how-card">
              <div className="step">3</div>
              <h4>Collaborate & Earn</h4>
              <p>
                Accept offers, deliver content, and receive secure payments
                without any middleman fees.
              </p>
            </div>
          </div>
        )}

        {/* BRAND FLOW */}
        {active === "brand" && (
          <div className="how-steps">
            <div className="how-card">
              <div className="step">1</div>
              <h4>Set Up Your Brand</h4>
              <p>
                Create your brand profile, showcase products, and define
                campaign goals.
              </p>
            </div>

            <div className="how-card">
              <div className="step">2</div>
              <h4>Find Perfect Influencers</h4>
              <p>
                Search and filter influencers by niche, audience demographics,
                and engagement rates.
              </p>
            </div>

            <div className="how-card">
              <div className="step">3</div>
              <h4>Launch & Track Campaigns</h4>
              <p>
                Create campaigns, set deliverables, and monitor real-time
                performance metrics.
              </p>
    
            </div>
          </div>
          
        )}
      </section>
      {/* MISSION & VISION */}
<section className="mission">
  <h2 className="mission-title">
    Our <span>Mission & Vision</span>
  </h2>

  {/* Mission */}
  <h3 className="mission-sub">Mission</h3>

  <p className="mission-text">
    To build a transparent and empowering influencer ecosystem where creators
    and brands connect directly, foster authentic relationships, and grow
    together without the complications of middlemen or hidden fees.
  </p>

  {/* Values */}
  <h3 className="mission-sub">Values</h3>

  <ul className="values-list">
    <li>
      <span className="dot" />
      <strong>Transparency:</strong> We believe in complete visibility in all
      transactions and relationships.
    </li>

    <li>
      <span className="dot" />
      <strong>Empowerment:</strong> We give both creators and brands the tools
      and support to succeed.
    </li>

    <li>
      <span className="dot" />
      <strong>Community:</strong> We foster meaningful connections that drive
      mutual growth.
    </li>

    <li>
      <span className="dot" />
      <strong>Innovation:</strong> We continuously improve our platform based
      on user feedback.
    </li>
  </ul>

  {/* Vision */}
  <div className="vision-card">
    <div className="vision-icon" />

    <h3 className="vision-title">Our Vision</h3>

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
{/* MEET OUR TEAM */}
<section className="team">
  <h2 className="team-title">
    Meet Our <span>Team</span>
  </h2>

  <p className="team-sub">
    The passionate experts behind Stoory, dedicated to building a better
    influencer ecosystem.
  </p>

  <div className="team-grid">
    {/* Founder */}
    <div className="team-card">
      <img src="/avatars/a1.png" alt="Pragnatej Kondala" />
      <h3>Pragnatej Kondala</h3>
      <p className="role">Founder & CEO</p>
      <p className="desc">
        A serial entrepreneur with experience in building startups such as
        Urbantask, Nikospade and more.
      </p>

      <div className="socials">
        <span>in</span>
        <span>𝕏</span>
        <span>📷</span>
      </div>
    </div>

    {/* Co-Founder */}
    <div className="team-card">
      <img src="/avatars/a2.png" alt="Sarath Meduri" />
      <h3>Sarath Meduri</h3>
      <p className="role">Co-Founder & CTO</p>
      <p className="desc">
        An alumnus of NIT Raipur with technical expertise in product
        development and building scalable web systems.
      </p>

      <div className="socials">
        <span>in</span>
        <span>𝕏</span>
        <span>📷</span>
      </div>
    </div>

    {/* Co-Founder */}
    <div className="team-card">
      <img src="/avatars/a3.png" alt="Kalyan Midatha" />
      <h3>Kalyan Midatha</h3>
      <p className="role">Co-Founder & MD</p>
      <p className="desc">
        An alumnus of NIT Bhopal with experience leading growth initiatives
        across multiple startups and organizations.
      </p>

      <div className="socials">
        <span>in</span>
        <span>𝕏</span>
        <span>📷</span>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}

