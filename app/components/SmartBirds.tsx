"use client";

import React, { useEffect, useRef } from "react";

interface BirdConfig {
  id: number;
  color: string;
  belly: string;
  wing: string;
  size: number;
  offsetX: number;
  offsetY: number;
  speed: number;
  delay: number;
}

const BIRDS: BirdConfig[] = [
  {
    id: 1,
    color: "#F59E0B",
    belly: "#FBBF24",
    wing: "#F97316",
    size: 55,
    offsetX: 50,
    offsetY: 50,
    speed: 0.08,
    delay: 0,
  },
  {
    id: 2,
    color: "#3B82F6",
    belly: "#60A5FA",
    wing: "#2563EB",
    size: 45,
    offsetX: -40,
    offsetY: 60,
    speed: 0.07,
    delay: 0.2,
  },
  {
    id: 3,
    color: "#EC4899",
    belly: "#F472B6",
    wing: "#DB2777",
    size: 40,
    offsetX: 30,
    offsetY: -40,
    speed: 0.09,
    delay: 0.1,
  },
];

export default function SmartBirds() {
  const birdsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const posRef = useRef(
    BIRDS.map((b) => ({
      x: window.innerWidth / 2 + b.offsetX,
      y: window.innerHeight / 2 + b.offsetY,
      rotation: 0,
      vx: 0,
      vy: 0,
    }))
  );
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const mouse = mouseRef.current;

      BIRDS.forEach((bird, i) => {
        const current = posRef.current[i];

        // Target with individual offset
        const targetX = mouse.x + bird.offsetX;
        const targetY = mouse.y + bird.offsetY;

        // Smooth easing with individual speed
        current.x += (targetX - current.x) * bird.speed;
        current.y += (targetY - current.y) * bird.speed;

        // Calculate velocity for tilt
        const vx = targetX - current.x;
        const vy = targetY - current.y;
        const angle = Math.atan2(vy, vx) * (180 / Math.PI);

        // Smooth rotation
        let angleDiff = angle - current.rotation;
        while (angleDiff > 180) angleDiff -= 360;
        while (angleDiff < -180) angleDiff += 360;
        current.rotation += angleDiff * 0.12;

        // Apply transform
        const el = birdsRef.current[i];
        if (el) {
          const tilt = Math.min(Math.abs(vx) * 0.5, 15);
          el.style.transform = `translate(${current.x}px, ${current.y}px) translate(-50%, -50%) rotate(${current.rotation + 90}deg) rotateX(${tilt}deg)`;
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    posRef.current = BIRDS.map((b) => ({
      x: window.innerWidth / 2 + b.offsetX,
      y: window.innerHeight / 2 + b.offsetY,
      rotation: 0,
      vx: 0,
      vy: 0,
    }));
    mouseRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {BIRDS.map((bird, index) => (
        <div
          key={bird.id}
          ref={(el) => { birdsRef.current[index] = el; }}
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          style={{ willChange: "transform" }}
        >
          <svg
            width={bird.size}
            height={bird.size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-xl"
            style={{ animationDelay: `${bird.delay}s` }}
          >
            <defs>
              <style>{`
                @keyframes wingFlap${bird.id} {
                  0% { transform: scaleY(1) rotate(0deg); }
                  50% { transform: scaleY(0.45) rotate(-18deg); }
                  100% { transform: scaleY(1) rotate(0deg); }
                }
                @keyframes bodyBob${bird.id} {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-4px); }
                }
                @keyframes tailWag${bird.id} {
                  0%, 100% { transform: rotate(0deg); }
                  50% { transform: rotate(10deg); }
                }
                @keyframes blink${bird.id} {
                  0%, 92%, 100% { transform: scaleY(1); }
                  96% { transform: scaleY(0.1); }
                }
                @keyframes feather${bird.id} {
                  0%, 100% { transform: rotate(0deg); }
                  50% { transform: rotate(5deg); }
                }
                @keyframes float${bird.id} {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-6px); }
                }
                
                .wingL${bird.id} { 
                  transform-origin: 40px 45px; 
                  animation: wingFlap${bird.id} ${0.2 + bird.delay}s ease-in-out infinite;
                }
                .wingR${bird.id} { 
                  transform-origin: 60px 45px; 
                  animation: wingFlap${bird.id} ${0.2 + bird.delay}s ease-in-out infinite;
                  animation-delay: 0.06s;
                }
                .body${bird.id} {
                  animation: bodyBob${bird.id} ${0.5 + bird.delay}s ease-in-out infinite;
                  transform-origin: 50px 50px;
                }
                .tail${bird.id} {
                  transform-origin: 50px 70px;
                  animation: tailWag${bird.id} 0.35s ease-in-out infinite;
                }
                .eye${bird.id} {
                  transform-origin: 55px 26px;
                  animation: blink${bird.id} ${2.5 + bird.id}s ease-in-out infinite;
                }
                .headF${bird.id} {
                  transform-origin: 50px 16px;
                  animation: feather${bird.id} 0.6s ease-in-out infinite;
                }
                .birdFloat${bird.id} {
                  animation: float${bird.id} ${1.5 + bird.delay}s ease-in-out infinite;
                }
              `}</style>
            </defs>

            <g className={`birdFloat${bird.id}`}>
              {/* Shadow */}
              <ellipse cx="50" cy="95" rx="10" ry="2.5" fill="black" opacity="0.2" />

              <g className={`body${bird.id}`}>
                {/* Tail */}
                <path className={`tail${bird.id}`} d="M50 70 L36 92 L50 85 L64 92 Z" fill={bird.wing} />

                {/* Body */}
                <ellipse cx="50" cy="55" rx="15" ry="19" fill={bird.color} />
                <ellipse cx="50" cy="55" rx="12" ry="15" fill={bird.belly} />
                <ellipse cx="50" cy="58" rx="7" ry="9" fill="white" opacity="0.25" />

                {/* Left Wing */}
                <g className={`wingL${bird.id}`}>
                  <path
                    d="M38 48 Q16 30 6 36 Q22 48 38 55 Z"
                    fill={bird.wing}
                    stroke="black"
                    strokeWidth="0.5"
                    opacity="0.9"
                  />
                </g>

                {/* Right Wing */}
                <g className={`wingR${bird.id}`}>
                  <path
                    d="M62 48 Q84 30 94 36 Q78 48 62 55 Z"
                    fill={bird.wing}
                    stroke="black"
                    strokeWidth="0.5"
                    opacity="0.9"
                  />
                </g>

                {/* Head */}
                <circle cx="50" cy="30" r="12" fill={bird.color} />
                <circle cx="50" cy="30" r="10" fill={bird.belly} />

                {/* Head feather */}
                <path className={`headF${bird.id}`} d="M50 18 Q44 6 50 2 Q56 6 50 18" fill={bird.wing} />

                {/* Eye - Smart look */}
                <g className={`eye${bird.id}`}>
                  <circle cx="55" cy="28" r="3.5" fill="white" />
                  <circle cx="56" cy="28" r="2.2" fill="#111827" />
                  <circle cx="57" cy="27" r="0.9" fill="white" />
                </g>

                {/* Eyebrow - gives smart expression */}
                <path d="M52 23 Q56 21 60 23" stroke={bird.wing} strokeWidth="1.5" fill="none" strokeLinecap="round" />

                {/* Beak */}
                <path d="M62 29 L78 32 L62 36 Z" fill="#EF4444" />
                <path d="M62 32 L72 33 L62 34 Z" fill="#B91C1C" opacity="0.4" />

                {/* Legs */}
                <line x1="44" y1="72" x2="44" y2="84" stroke={bird.wing} strokeWidth="2" strokeLinecap="round" />
                <line x1="56" y1="72" x2="56" y2="84" stroke={bird.wing} strokeWidth="2" strokeLinecap="round" />
                <path d="M38 84 L50 84" stroke={bird.wing} strokeWidth="2" strokeLinecap="round" />
                <path d="M50 84 L62 84" stroke={bird.wing} strokeWidth="2" strokeLinecap="round" />
              </g>
            </g>
          </svg>
        </div>
      ))}
    </>
  );
}