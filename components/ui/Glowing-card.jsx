"use client";

import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

export function GlowingCard({ width = 400, height = 200, children }) {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      const pxPerMs = length / 4000;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

  return (
    <div
      className="relative flex items-center justify-center bg-white/10 backdrop-blur-md rounded-[15px] overflow-hidden border border-white/20 shadow-xl"
      style={{ width, height }}
    >
      {/* Moving Glow Effect */}
      <motion.div
        className="absolute w-[80px] h-[80px] bg-purple-500/60 blur-[50px]"
        style={{ x, y }}
      />

      {/* Card Content */}
      <div className="relative z-10  text-white text-center">{children}</div>

      {/* Invisible Path for Motion Tracking */}
      <svg className="absolute inset-0 w-full h-full">
        <rect ref={pathRef} width="100%" height="100%" fill="none" rx="15" ry="15" />
      </svg>
    </div>
  );
}
