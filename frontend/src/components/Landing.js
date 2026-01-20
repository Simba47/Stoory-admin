export default function Landing({ onInfluencer, onBrand }) {
  return (
    <div className="landing">
      <header className="header">
        <h2 className="logo">stoory</h2>
        <div className="menu">☰</div>
      </header>

      <div className="hero">
        <h1>
          we don't tell stories,
          <br />
          we <span>STOORY</span> them.
        </h1>

        <p>
          Transparent. Direct. Empowered. Stoory eliminates middlemen,
          ensuring 100% transparency in every promotion.
        </p>

        <button className="primary" onClick={onInfluencer}>
          Join as Influencer →
        </button>

        <button className="secondary" onClick={onBrand}>
          Join as Brand →
        </button>

        <p className="trusted">Trusted by 5,000+ influencers & brands</p>
      </div>
    </div>
  );
}
