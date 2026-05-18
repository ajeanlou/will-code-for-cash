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
  return (
    <div className="layout">
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
        <h1 className="site-title">
          Will code for <span className="accent">cash</span>
        </h1>
      </main>
    </div>
  );
}
