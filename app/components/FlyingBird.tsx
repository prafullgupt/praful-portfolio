"use client";

import React, { useEffect, useRef, useState } from "react";

export default function FlyingBird() {
  const birdRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0, rotation: 0 });
  const rafRef = useRef<number>(0);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const OFFSET_X = 40;
  const OFFSET_Y = 40;
  const HIDE_DELAY = 2000; // 2 seconds

  // Detect touch device on mount
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  // Mouse tracking + visibility logic
  useEffect(() => {
    if (isTouchDevice) return; // Don't run on touch devices

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Show bird immediately on mouse move
      setIsVisible(true);

      // Clear existing timer
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }

      // Set new timer to hide after delay
      hideTimerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, HIDE_DELAY);
    };

    // Also show on mouse enter (first time)
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    // Initial position
    posRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      rotation: 0,
    };
    mouseRef.current = { ...posRef.current };

    // Animation loop
    const animate = () => {
      const mouse = mouseRef.current;
      const current = posRef.current;

      const targetX = mouse.x + OFFSET_X;
      const targetY = mouse.y + OFFSET_Y;

      const ease = 0.08;
      current.x += (targetX - current.x) * ease;
      current.y += (targetY - current.y) * ease;

      const dx = targetX - current.x;
      const dy = targetY - current.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      let angleDiff = angle - current.rotation;
      while (angleDiff > 180) angleDiff -= 360;
      while (angleDiff < -180) angleDiff += 360;
      current.rotation += angleDiff * 0.1;

      if (birdRef.current) {
        birdRef.current.style.transform = `translate(${current.x}px, ${current.y}px) translate(-50%, -50%) rotate(${current.rotation + 90}deg)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [isTouchDevice]);

  // Don't render anything on touch devices
  if (isTouchDevice) return null;

  return (
    <div
      ref={birdRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ willChange: "transform" }}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xl"
      >
        <defs>
          <style>{`
            @keyframes wingFlap {
              0% { transform: scaleY(1) rotate(0deg); }
              50% { transform: scaleY(0.5) rotate(-15deg); }
              100% { transform: scaleY(1) rotate(0deg); }
            }
            @keyframes bodyBob {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-3px); }
            }
            @keyframes tailWag {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(8deg); }
            }
            @keyframes blink {
              0%, 90%, 100% { transform: scaleY(1); }
              95% { transform: scaleY(0.1); }
            }
            @keyframes beakChirp {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.1); }
            }
            @keyframes shadowPulse {
              0%, 100% { opacity: 0.3; transform: scale(1); }
              50% { opacity: 0.15; transform: scale(0.8); }
            }
            @keyframes featherRuffle {
              0%, 100% { transform: rotate(0deg); }
              25% { transform: rotate(2deg); }
              75% { transform: rotate(-2deg); }
            }
            
            .wing-left { 
              transform-origin: 40px 45px; 
              animation: wingFlap 0.25s ease-in-out infinite;
            }
            .wing-right { 
              transform-origin: 60px 45px; 
              animation: wingFlap 0.25s ease-in-out infinite;
              animation-delay: 0.05s;
            }
            .bird-body {
              animation: bodyBob 0.6s ease-in-out infinite;
              transform-origin: 50px 50px;
            }
            .tail {
              transform-origin: 50px 70px;
              animation: tailWag 0.4s ease-in-out infinite;
            }
            .eye {
              transform-origin: 55px 26px;
              animation: blink 3s ease-in-out infinite;
            }
            .beak {
              transform-origin: 60px 30px;
              animation: beakChirp 0.6s ease-in-out infinite;
            }
            .shadow {
              animation: shadowPulse 0.6s ease-in-out infinite;
              transform-origin: 50px 95px;
            }
            .head-feather {
              transform-origin: 50px 16px;
              animation: featherRuffle 0.8s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* Shadow */}
        <ellipse className="shadow" cx="50" cy="95" rx="12" ry="3" fill="black" opacity="0.3" />

        <g className="bird-body">
          {/* Tail */}
          <path className="tail" d="M50 70 L38 90 L50 84 L62 90 Z" fill="#EA580C" />

          {/* Body */}
          <ellipse cx="50" cy="55" rx="16" ry="20" fill="#F59E0B" />
          <ellipse cx="50" cy="55" rx="13" ry="16" fill="#FBBF24" />
          
          {/* Belly patch */}
          <ellipse cx="50" cy="58" rx="8" ry="10" fill="#FDE68A" opacity="0.6" />

          {/* Left Wing */}
          <g className="wing-left">
            <path
              d="M38 48 Q18 32 8 38 Q24 48 38 54 Z"
              fill="#F97316"
              stroke="#C2410C"
              strokeWidth="1"
            />
            <path d="M38 48 Q22 36 14 40" stroke="#FDE68A" strokeWidth="1.5" fill="none" opacity="0.6"/>
          </g>

          {/* Right Wing */}
          <g className="wing-right">
            <path
              d="M62 48 Q82 32 92 38 Q76 48 62 54 Z"
              fill="#F97316"
              stroke="#C2410C"
              strokeWidth="1"
            />
            <path d="M62 48 Q78 36 86 40" stroke="#FDE68A" strokeWidth="1.5" fill="none" opacity="0.6"/>
          </g>

          {/* Head */}
          <circle cx="50" cy="30" r="13" fill="#F59E0B" />
          <circle cx="50" cy="30" r="11" fill="#FBBF24" />

          {/* Head feather */}
          <path className="head-feather" d="M50 18 Q45 8 50 4 Q55 8 50 18" fill="#F97316" />

          {/* Eye */}
          <g className="eye">
            <circle cx="55" cy="28" r="3.5" fill="white" />
            <circle cx="56" cy="28" r="2" fill="#1F2937" />
            <circle cx="57" cy="27" r="0.8" fill="white" />
          </g>

          {/* Beak */}
          <g className="beak">
            <path d="M62 29 L76 32 L62 35 Z" fill="#EF4444" />
            <path d="M62 32 L70 33 L62 34 Z" fill="#DC2626" opacity="0.5" />
          </g>

          {/* Legs */}
          <line x1="45" y1="72" x2="45" y2="82" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
          <line x1="55" y1="72" x2="55" y2="82" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
          <line x1="40" y1="82" x2="50" y2="82" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="82" x2="60" y2="82" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}