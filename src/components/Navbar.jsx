import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
       <div className="logo">NeuroNova AI</div>
      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact" className="nav-cta">
          Contact
        </a>
      </nav>
    </header>
  );
}


     