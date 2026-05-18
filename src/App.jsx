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

export default function App() {
  const layoutRef = useRef(null);
  usePointerGlow(layoutRef);

  return (
    <div className="layout" ref={layoutRef}>
      <SignalCanvas />
      <div className="glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <Hud />

      <aside className="countries" aria-label="Countries">
        <div className="countries-marquee">
          <ul>
            {[...countries, ...countries].map((country, i) => (
              <li key={`${country}-${i}`}>{country}</li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="main">
        <p className="cipher" aria-hidden="true">
          01010111 01000011 01000110 01000011
        </p>

        <h1 className="site-title">
          <span className="title-line">Will code 4</span>
          <span className="title-cash accent" data-text="cash">
            cash
          </span>
        </h1>

        <p className="transmission">
          <span className="blink">▮</span> transmission open — inquire within
        </p>
      </main>
    </div>
  );
}
