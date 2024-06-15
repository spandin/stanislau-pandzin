"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function SecondScreen() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Запускать только один раз при появлении в зоне видимости
    threshold: 0, // Порог видимости: 0 - при появлении полностью в зоне видимости
  })

  return (
    <div className="relative h-screen flex flex-col">
      <div className="h-full m-auto inline-flex flex-col flex-shrink items-center justify-center ">
        <motion.h1
          ref={ref}
          className="text-[96px] text-wrap font-semibold leading-[0.8]"
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: inView ? 0 : -300 }}
          transition={{ duration: 0.4 }}
        >
          Second <span className="text-primary">Screen</span>
        </motion.h1>
      </div>
    </div>
  )
}
