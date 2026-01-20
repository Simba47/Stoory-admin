export default function Landing({ onInfluencer, onBrand }) {
  return (
    <div className="landing">

      {/* HEADER */}
      <header className="header">
        <img src="/logo.png" alt="Stoory" className="logo" />
        <div className="menu">☰</div>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>
          we don't tell stories,
          <br />
          we <span>STOORY</span> them.
        </h1>

        <p className="subtitle">
          Transparent. Direct. Empowered. Stoory eliminates middlemen,
          ensuring 100% transparency in every promotion.
        </p>

        <button className="primary" onClick={onInfluencer}>
          Join as Influencer →
        </button>

        <button className="secondary" onClick={onBrand}>
          Join as Brand →
        </button>

        <div className="trusted-row">
          <div className="avatars">
            <img src="/avatars/a1.png" alt="" />
            <img src="/avatars/a2.png" alt="" />
            <img src="/avatars/a3.png" alt="" />
          </div>
          <p>Trusted by <b>5,000+</b> influencers & brands</p>
        </div>

        <div className="hero-image">
          <img src="/hero/stoory-hero.png" alt="Stoory Hero" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>
          Features Designed <br />
          for <span>Growth</span>
        </h2>

        <p className="section-desc">
          Our platform provides all the tools and features needed to establish
          meaningful partnerships between brands and influencers.
        </p>

        <div className="feature-list">
          <div className="feature-card">
            <h4>100% Transparency</h4>
            <p>Clear pricing and direct communication.</p>
          </div>

          <div className="feature-card">
            <h4>Direct Collaboration</h4>
            <p>No agencies. No middlemen.</p>
          </div>

          <div className="feature-card">
            <h4>Secure Payments</h4>
            <p>Safe and timely payouts.</p>
          </div>

          <div className="feature-card">
            <h4>Real-Time Tracking</h4>
            <p>Track performance instantly.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <h2>How Stoory Works</h2>

        <div className="how-step">
          <span>1</span>
          <p>Create your profile</p>
        </div>

        <div className="how-step">
          <span>2</span>
          <p>Connect with brands or influencers</p>
        </div>

        <div className="how-step">
          <span>3</span>
          <p>Launch campaigns & grow</p>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission">
        <h2>Our Mission & Vision</h2>

        <div className="mission-box">
          <h4>Mission</h4>
          <p>
            To create a transparent ecosystem where creators and brands grow
            together without intermediaries.
          </p>
        </div>

        <div className="mission-box">
          <h4>Vision</h4>
          <p>
            To become the most trusted influencer-brand collaboration platform.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="team">
        <h2>Meet Our Team</h2>

        <div className="team-card">
          <img src="/avatars/a1.png" alt="" />
          <h4>Praneeth Konda</h4>
          <p>Founder</p>
        </div>

        <div className="team-card">
          <img src="/avatars/a2.png" alt="" />
          <h4>Shreya Mishra</h4>
          <p>Marketing Lead</p>
        </div>

        <div className="team-card">
          <img src="/avatars/a3.png" alt="" />
          <h4>Rohit Kumar</h4>
          <p>Tech Lead</p>
        </div>
      </section>

    </div>
  );
}
