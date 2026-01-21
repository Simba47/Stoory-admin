import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="logo">stoory</div>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#features">Features</a>
          <a href="#how">How it Works</a>
          <a href="#mission">Mission</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
}
