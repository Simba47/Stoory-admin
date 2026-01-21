import { useState } from "react";

 function Navbar() {
  const [open, setOpen] = useState(false);

  return (
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
  );
}
