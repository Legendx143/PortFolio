import React, { useRef, useEffect } from "react";

export const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const mouse = { x: -9999, y: -9999, radius: 180 };

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
    }

    let nodes: Node[] = [];
    let isMobile = false;

    const handleResize = () => {
      isMobile =
        window.innerWidth < 768 ||
        window.matchMedia("(pointer: coarse)").matches;

      // Viewport-bounded dimensions to prevent gigantic 10,000px canvas allocations
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Node count tuned for high FPS: 24 on mobile, up to 60 on desktop
      const count = isMobile
        ? 24
        : Math.min(60, Math.floor((width * height) / 24000));

      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.45),
          vy: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.45),
          radius: 1 + Math.random() * 1.7,
          baseAlpha: 0.2 + Math.random() * 0.45,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    let animId: number;

    const render = () => {
      // Pause drawing if tab is in the background
      if (document.hidden) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const maxDist = isMobile ? 95 : 130;

      // Update & draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Mouse repel / attract (desktop only)
        if (!isMobile) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.6;
            n.x -= (dx / dist) * force;
            n.y -= (dy / dist) * force;
          }
        }

        ctx.fillStyle = `rgba(225, 224, 204, ${n.baseAlpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes with neural synapses
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const distBetween = Math.hypot(n.x - n2.x, n.y - n2.y);

          if (distBetween < maxDist) {
            const alpha = (1 - distBetween / maxDist) * 0.18;
            ctx.strokeStyle = `rgba(225, 224, 204, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-35 z-0"
    />
  );
};
