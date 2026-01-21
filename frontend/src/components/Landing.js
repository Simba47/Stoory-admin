import { useEffect, useState } from "react";

export default function Landing({ onInfluencer, onBrand }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("influencer");
  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing">
      {/* NAVBAR */}
      <header className="header">
        <img src="/hero/stoory-logo.png" className="logo" alt="Stoory" />

        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {menuOpen && (
          <nav className="mobile-menu">
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#how" onClick={() => setMenuOpen(false)}>How it Works</a>
            <a href="#mission" onClick={() => setMenuOpen(false)}>Mission</a>
            <a href="#team" onClick={() => setMenuOpen(false)}>Team</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </header>


 <section className="hero fade-up">
  <div className="hero-text">
    <h1>
      we don't tell stories,<br />
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
        <img src="/avatars/a1.png" />
        <img src="/avatars/a2.png" />
        <img src="/avatars/a3.png" />
      </div>
      <p>Trusted by 5,000+ influencers & brands</p>
    </div>
  </div>

  <div className="hero-image">
    <img src="/hero/stoory-hero.png" alt="Stoory hero" />
  </div>
</section>

     <section id="features" className="features fade-up">
  <h2>
    Features Designed for <span>Growth</span>
  </h2>
  <p className="section-desc">
    Our platform provides all the tools and features needed to establish
    meaningful partnerships between brands and influencers.
  </p>

  <div className="feature-list">
    <div className="feature-card">100% Transparency</div>
    <div className="feature-card">Direct Connection</div>
    <div className="feature-card">Secure Payments</div>
    <div className="feature-card">Real-Time Tracking</div>
    <div className="feature-card">Analytics Dashboard</div>
    <div className="feature-card">Easy Profile Setup</div>
  </div>
</section>



      {/* HOW STOORY WORKS */}
     <section id="how" className="how fade-up">
  <h2>
    How <span>Stoory</span> Works
  </h2>

  <p className="section-desc">
    Our streamlined process makes collaboration simple, transparent,
    and effective for both influencers and brands.
  </p>

  <div className="toggle">
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
    <>
      <div className="how-step"><span>1</span>Create Your Profile</div>
      <div className="how-step"><span>2</span>Connect With Brands</div>
      <div className="how-step"><span>3</span>Collaborate & Earn</div>
    </>
  )}

  {active === "brand" && (
    <>
      <div className="how-step"><span>1</span>Set Up Your Brand</div>
      <div className="how-step"><span>2</span>Find Perfect Influencers</div>
      <div className="how-step"><span>3</span>Launch & Track Campaigns</div>
    </>
  )}
</section>

    <section id="mission" className="mission fade-up">
  <h2>
    Our <span>Mission & Vision</span>
  </h2>

  <h3>Mission</h3>
  <p>
    To build a transparent and empowering influencer ecosystem where
    creators and brands connect directly and grow together.
  </p>

  <h3>Values</h3>
  <ul className="values">
    <li>Transparency</li>
    <li>Empowerment</li>
    <li>Community</li>
    <li>Innovation</li>
  </ul>

  <div className="vision-box">
    <h3>Our Vision</h3>
    <p>
      “To become the most trusted space where brands and influencers grow together.”
    </p>

    <div className="founder">
      <img src="/avatars/a1.png" />
      <div>
        <strong>Pragnatej Kondala</strong>
        <span>Founder & CEO</span>
      </div>
    </div>
  </div>
</section>

<section id="team" className="team fade-up">
  <h2>Meet Our <span>Team</span></h2>
  <p>The passionate experts behind Stoory.</p>

  <div className="team-grid">
    <div className="team-card">Pragnatej Kondala</div>
    <div className="team-card">Sarath Meduri</div>
    <div className="team-card">Kalyan Midatha</div>
  </div>
</section>



    </div>
  );
}

