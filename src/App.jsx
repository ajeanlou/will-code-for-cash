import { useRef } from "react";
import Hud from "./components/Hud.jsx";
import SignalCanvas from "./components/SignalCanvas.jsx";
import { usePointerGlow } from "./hooks/usePointerGlow.js";

const countries = [
  "Bahamas",
  "Belize",
  "Colombia",
  "Dominican Republic",
  "Panama",
  "Mexico",
  "Brazil",
  "Argentina",
];

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Will Code 4 Cash", href: "#" },
  { label: "World Tour", href: "#tour" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const layoutRef = useRef(null);
  usePointerGlow(layoutRef);

  return (
    <div className="layout" ref={layoutRef}>
      <SignalCanvas />
      <div className="earth-bg" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <header className="site-header">
        <a className="logo" href="/">
          wcfc
        </a>
        <nav className="site-nav" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <Hud />

      <aside id="tour" className="countries" aria-label="World tour">
        <div className="countries-marquee">
          <ul>
            {[...countries, ...countries].map((country, i) => (
              <li key={`${country}-${i}`}>{country}</li>
            ))}
          </ul>
        </div>
      </aside>

      <section className="hero">
        <h1 className="hero-title">
          Will code 4 <span className="hero-cash" data-text="cash">cash</span>
        </h1>

        <div className="hero-ctas">
          <a className="cta" href="#contact">
            Hire me
          </a>
          <a className="cta" href="#work">
            View work
          </a>
        </div>

        <p className="transmission">
          <span className="blink">▮</span> signal open
        </p>
      </section>
    </div>
  );
}
