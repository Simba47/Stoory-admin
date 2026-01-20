export default function Landing({ onInfluencer, onBrand }) {
  return (
    <div className="landing">
      {/* HEADER */}
      <header className="header">
        <h2 className="logo">stoory</h2>
        <div className="menu">☰</div>
      </header>

      {/* HERO */}
      <section className="hero">
        {/* LEFT CONTENT */}
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
              <img src="/avatars/a1.png" alt="avatar" />
              <img src="/avatars/a2.png" alt="avatar" />
              <img src="/avatars/a3.png" alt="avatar" />
            </div>
            <p>Trusted by <b>5,000+</b> influencers & brands</p>
          </div>
        </div>

        {/* RIGHT IMAGE + ANIMATION */}
        <div className="hero-image">
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>

          <img
            src="/hero/stoory-hero.png"
            alt="Stoory Hero"
            className="hero-main"
          />
        </div>
      </section>
    </div>
  );
}
