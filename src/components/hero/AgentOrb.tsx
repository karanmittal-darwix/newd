"use client";

import { useEffect, useRef } from "react";

export default function AgentOrb() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let t = 0;
    let animationId = 0;

    const W = 300;
    const H = 240;

    const CX = W / 2 + 10;
    const CY = 110;

    function draw(time: number) {
      ctx.clearRect(0, 0, W, H);

      const r = 105 + Math.sin(time) * 7;

      /* floating shadow */
      const shadow = ctx.createRadialGradient(
        CX,
        CY + r + 22,
        12,
        CX,
        CY + r + 22,
        78
      );

      shadow.addColorStop(
        0,
        "rgba(70,60,140,.22)"
      );

      shadow.addColorStop(
        .65,
        "rgba(70,60,140,.08)"
      );

      shadow.addColorStop(
        1,
        "rgba(70,60,140,0)"
      );

      ctx.beginPath();

      ctx.ellipse(
        CX,
        CY + r + 22,
        78,
        22,
        0,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = shadow;

      ctx.shadowBlur = 35;
      ctx.shadowColor =
        "rgba(130,110,255,.18)";

      ctx.fill();

      ctx.shadowBlur = 0;


      /* orb gradient */
      const orb = ctx.createRadialGradient(
        CX - 28,
        CY - 32,
        10,
        CX,
        CY,
        r
      );

      orb.addColorStop(
        0,
        "rgba(255,255,255,1)"
      );

      orb.addColorStop(
        .3,
        "rgba(235,233,255,.96)"
      );

      orb.addColorStop(
        .65,
        "rgba(188,182,250,.95)"
      );

      orb.addColorStop(
        1,
        "rgba(142,136,235,.88)"
      );

      ctx.beginPath();

      ctx.arc(
        CX,
        CY,
        r,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = orb;
      ctx.fill();


      /* animated internal blobs */
      for (let i = 0; i < 5; i++) {

        const bx =
          CX +
          Math.sin(
            time * .75 + i
          ) * 28;

        const by =
          CY +
          Math.cos(
            time * .65 + i
          ) * 20;

        const glow =
          ctx.createRadialGradient(
            bx,
            by,
            0,
            bx,
            by,
            54
          );

        glow.addColorStop(
          0,
          "rgba(165,155,255,.45)"
        );

        glow.addColorStop(
          1,
          "rgba(255,255,255,0)"
        );

        ctx.beginPath();

        ctx.arc(
          bx,
          by,
          54,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = glow;
        ctx.fill();
      }


      /* glass rim */
      ctx.beginPath();

      ctx.arc(
        CX,
        CY,
        r,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle =
        "rgba(255,255,255,.65)";

      ctx.lineWidth = 2;

      ctx.stroke();


      /* big highlight */
      ctx.beginPath();

      ctx.arc(
        CX - 34,
        CY - 40,
        22,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        "rgba(255,255,255,.55)";

      ctx.fill();


      /* small glint */
      ctx.beginPath();

      ctx.arc(
        CX + 35,
        CY - 35,
        10,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        "rgba(255,255,255,.35)";

      ctx.fill();
    }

    function animate() {
      t += 0.016;

      draw(t);

      animationId =
        requestAnimationFrame(
          animate
        );
    }

    animate();

    return () =>
      cancelAnimationFrame(
        animationId
      );
  }, []);

  return (
    <div className="flex justify-center">
      <canvas
        ref={canvasRef}
        width={300}
        height={240}
        className="w-full max-w-[300px]"
      />
    </div>
  );
}