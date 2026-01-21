import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);


  return (
    <div className="landing">
      {/* NAVBAR */}
 <header className="navbar">
      {/* LOGO */}
      <div className="nav-logo">
        <img src="/logo.png" alt="Stoory" />
      </div>

      {/* DESKTOP MENU */}
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#how">How it Works</a>
        <a href="#mission">Mission</a>
        <a href="#team">Team</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* MOBILE HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a onClick={() => setOpen(false)} href="#features">Features</a>
        <a onClick={() => setOpen(false)} href="#how">How it Works</a>
        <a onClick={() => setOpen(false)} href="#mission">Mission</a>
        <a onClick={() => setOpen(false)} href="#team">Team</a>
        <a onClick={() => setOpen(false)} href="#faq">FAQ</a>
        <a onClick={() => setOpen(false)} href="#contact">Contact</a>
      </div>
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

        <div className="hero-image">
          <img src="/hero/stoory-hero.png" alt="Stoory Hero" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
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
            <p>No middleman means complete visibility.</p>
          </div>

          <div className="feature-card">
            <h4>Direct Connection</h4>
            <p>Connect directly with brands or influencers.</p>
          </div>

          <div className="feature-card">
            <h4>Secure Payments</h4>
            <p>Escrow-protected reliable payments.</p>
          </div>

          <div className="feature-card">
            <h4>Real-Time Tracking</h4>
            <p>Monitor campaign performance.</p>
          </div>

          <div className="feature-card">
            <h4>Analytics Dashboard</h4>
            <p>Optimize collaborations and ROI.</p>
          </div>

          <div className="feature-card">
            <h4>Easy Profile Setup</h4>
            <p>Create compelling profiles easily.</p>
          </div>
        </div>
      </section>

      {/* HOW STOORY WORKS */}
      <section className="how" id="how">
        <h2>
          How <span>Stoory</span> Works
        </h2>

        <p className="how-desc">
          Our streamlined process makes collaboration simple and transparent.
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
              <p>Showcase content and engagement.</p>
            </div>

            <div className="how-card">
              <div className="step">2</div>
              <h4>Connect With Brands</h4>
              <p>Receive collaboration requests.</p>
            </div>

            <div className="how-card">
              <div className="step">3</div>
              <h4>Collaborate & Earn</h4>
              <p>Deliver content and get paid.</p>
            </div>
          </div>
        )}

        {active === "brand" && (
          <div className="how-steps">
            <div className="how-card">
              <div className="step">1</div>
              <h4>Set Up Your Brand</h4>
              <p>Create brand profile and goals.</p>
            </div>

            <div className="how-card">
              <div className="step">2</div>
              <h4>Find Influencers</h4>
              <p>Filter by niche and engagement.</p>
            </div>

            <div className="how-card">
              <div className="step">3</div>
              <h4>Launch Campaigns</h4>
              <p>Track performance in real time.</p>
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
      <img src="/avatars/pragnatej.png" alt="Founder" />
      <div>
        <strong>Pragnatej Kondala</strong>
        <p>Founder & CEO</p>
      </div>
    </div>
  </div>
</section>


      {/* TEAM */}
<section className="team" id="team">
  <h2 className="team-title">
    Meet Our <span>Team</span>
  </h2>

  <p className="team-sub">
    The passionate experts behind Stoory, dedicated to building a better
    influencer ecosystem.
  </p>

  <div className="team-grid">
    {/* Pragnatej */}
    <div className="team-card">
      <img src="/avatars/pragnatej.png" alt="Pragnatej Kondala" />

      <h3>Pragnatej Kondala</h3>
      <p className="role">Founder & CEO</p>

      <p className="desc">
        A serial entrepreneur with experience in building startups such as
        Nikospace and Urbantask.
      </p>

      <div className="socials">
        <span>in</span>
        <span>𝕏</span>
        <span>ig</span>
      </div>
    </div>

    {/* Sarath */}
    <div className="team-card">
      <img src="/avatars/sarath.png" alt="Sarath Meduri" />

      <h3>Sarath Meduri</h3>
      <p className="role">Co-Founder & CTO</p>

      <p className="desc">
        An alumnus of NIT Raipur with technical expertise and experience in
        building multiple websites.
      </p>

      <div className="socials">
        <span>in</span>
        <span>𝕏</span>
        <span>ig</span>
      </div>
    </div>

    {/* Kalyan */}
    <div className="team-card">
      <img src="/avatars/kalyan.png" alt="Kalyan Midatha" />

      <h3>Kalyan Midatha</h3>
      <p className="role">Co-Founder & MD</p>

      <p className="desc">
        An alumnus of NIT Bhopal with experience in leading multiple projects
        such as UrbanTask and OG.
      </p>

      <div className="socials">
        <span>in</span>
        <span>𝕏</span>
        <span>ig</span>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
