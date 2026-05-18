import { useEffect, useRef } from "react";

export default function SignalCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let raf = 0;
    let width = 0;
    let height = 0;
    let pointer = { x: -9999, y: -9999 };
    const gap = 52;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const onMove = (e) => {
      pointer = { x: e.clientX, y: e.clientY };
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      const pulse = prefersReduced ? 0 : Math.sin(t * 0.001) * 0.15 + 0.85;

      for (let x = gap / 2; x < width; x += gap) {
        for (let y = gap / 2; y < height; y += gap) {
          const dx = pointer.x - x;
          const dy = pointer.y - y;
          const dist = Math.hypot(dx, dy);
          const pull = Math.max(0, 1 - dist / 220);
          const ox = prefersReduced ? 0 : (dx / dist || 0) * pull * 10;
          const oy = prefersReduced ? 0 : (dy / dist || 0) * pull * 10;
          const alpha = (0.08 + pull * 0.35) * pulse;

          ctx.fillStyle = `rgba(74, 222, 128, ${alpha})`;
          ctx.fillRect(x + ox - 1, y + oy - 1, 2, 2);
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="signal-canvas" aria-hidden="true" />;
}
