"use client"

import React from "react"
import { motion } from "framer-motion"

export default function FirstScreen() {
  return (
    <div className="relative h-[calc(100vh-64px)] flex flex-col bg-[url('/radial_lines.svg')] bg-cover bg-right  ">
      <div className="h-full m-auto inline-flex flex-col flex-shrink items-center justify-center ">
        <motion.h1
          className="text-[96px] text-wrap font-semibold leading-[0.8]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Hi, I&apos;m <span className="text-primary">Stanislau</span>
        </motion.h1>

        <motion.h4
          className="w-full text-right text-[48px] text-[#e4e4e4] font-regular leading-[0.8]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Frontend developer
        </motion.h4>
      </div>
    </div>
  )
}
