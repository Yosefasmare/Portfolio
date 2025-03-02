"use client";  

import { motion } from "framer-motion";
import React from 'react'

const BannerRevel = ({children}) => {
  return (
    <motion.div
    initial={{ "--clip": "polygon(0% 0%, 100% 0%, 0% 0%, 0% 100%)" }}
    whileInView={{ "--clip": "polygon(0% 0%, 100% 0%, 55% 100%, 0% 100%)" }}
    transition={{ duration: 0.9, ease: "easeInOut" ,delay: 0.8}}
    viewport={{ once: true }}
    className="w-[55%] h-full object-contain overflow-hidden hidden md:block"
    style={{ clipPath: "var(--clip)" }}
  >
    {children}
  </motion.div>
  )
}

export default BannerRevel
