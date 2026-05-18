import { useEffect, useState } from "react";

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Hud() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

  return (
    <>
      <div className="hud hud-tl">
        <span className="hud-label">wcfc.sys</span>
        <span className="hud-value">online</span>
      </div>
      <div className="hud hud-tr">
        <span className="hud-label">signal</span>
        <span className="hud-bar" aria-hidden="true">
          <span className="hud-bar-fill" />
        </span>
      </div>
      <div className="hud hud-bl">
        <span className="hud-label">mode</span>
        <span className="hud-value">accepting_work</span>
      </div>
      <div className="hud hud-br">
        <span className="hud-mono">{time}</span>
        <span className="hud-mono hud-dim">utc±local</span>
      </div>
    </>
  );
}
