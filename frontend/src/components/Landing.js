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
        {/* LEFT CONTENT */}
        <div className="hero-text">
          <div className="trusted-row">
            <div className="avatars">
              <img src="/avatars/a1.png" alt="avatar" />
              <img src="/avatars/a2.png" alt="avatar" />
              <img src="/avatars/a3.png" alt="avatar" />
            </div>
            <p>Trusted by <b>5,000+</b> influencers & brands</p>
          </div>

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

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img
            src="/hero/stoory-hero.png"
            alt="Stoory platform"
          />
        </div>
      </section>
    </div>
  );
}
