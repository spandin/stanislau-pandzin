"use client"

import React from "react"
import { motion } from "framer-motion"

const waveVariants = {
  wave: {
    rotate: [0, 12, -15, 20, 0],
    transition: {
      repeat: Infinity,
      repeatDelay: 0.2,
      duration: 4,
    },
  },
}

export default function WaveEmoji({
  emoji,
  className,
}: {
  emoji: string
  className: string
}) {
  return (
    <motion.div
      className={className}
      whileInView="wave"
      variants={waveVariants}
    >
      {emoji}
    </motion.div>
  )
}
