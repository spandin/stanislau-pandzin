"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import WaveEmoji from "@/shared/ui/wave-emoji"
import { LikeButton } from "@/features/like"
import { useStore } from "@/app/store"

export default function FirstScreen() {
  const name = useStore((state) => state.name)
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  })

  return (
    <div className="relative h-[calc(100dvh-64px)] flex flex-col justify-between bg-[url('/radial_lines.svg')] bg-cover bg-right">
      <div className="h-full m-auto p-6 inline-flex flex-col flex-shrink items-center justify-center z-30 ">
        <motion.h1
          ref={ref}
          className="text-[84px] md:text-8xl text-center text-wrap font-semibold leading-[0.8] "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-2">
            <WaveEmoji
              className="inline-block text-7xl md:text-7xl leading-[0.8]"
              emoji={"👋"}
            />
            <div>
              <span>Hi{` ${name}`}, </span>
              <span className="text-primary">I&apos;m Stanislau</span>
            </div>
          </div>
        </motion.h1>

        <motion.h4
          ref={ref}
          className="inline w-full px-1 text-3xl md:text-4xl text-right text-black dark:text-[#e4e4e4] font-medium leading-[1]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.4 }}
        >
          Frontend developer
        </motion.h4>
      </div>

      <div className="relative bottom-24 w-full">
        <LikeButton />
      </div>

      <div className="absolute inset-0 bg-bottom-fade-l dark:bg-bottom-fade-d pointer-events-none z-20" />
    </div>
  )
}
