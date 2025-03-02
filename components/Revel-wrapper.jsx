"use client"; // Needed for animations in Next.js

import { motion } from "framer-motion";
import React from "react";

export function RevealWrapper({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Start hidden and slightly lower
      whileInView={{ opacity: 1, y: 0 }} // Move up and fade in
      transition={{ duration: 0.8, ease: "easeOut" ,delay}} 
      viewport={{once: true}}
    >
      {children}
    </motion.div>
  );
}
