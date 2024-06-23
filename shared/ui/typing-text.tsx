"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface TypingTextProps {
  words: {
    word: string
    style?: string
  }[]
  className?: string
  containerAnimation?: {
    hidden?: {
      y?: number
      x?: number
    }
    visible?: {
      y?: { inView: number; defaultValue: number }
      x?: { inView: number; defaultValue: number }
    }
  }
}

export default function TypingText({
  words,
  className,
  containerAnimation,
}: TypingTextProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  })

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: any) => ({
      opacity: 1,
      transition: {
        delay: i * 0.06,
      },
    }),
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: containerAnimation?.hidden?.y ?? 0,
      x: containerAnimation?.hidden?.x ?? 0,
    },
    visible: {
      opacity: inView ? 1 : 0,
      y: inView
        ? containerAnimation?.visible?.y?.inView
        : containerAnimation?.visible?.y?.defaultValue,
      x: inView
        ? containerAnimation?.visible?.x?.inView
        : containerAnimation?.visible?.x?.defaultValue,
      transition: {
        delay: 0.4,
      },
    },
  }

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {words.map(({ word, style }, wordIndex) => (
        <span key={wordIndex}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              custom={wordIndex * 10 + charIndex}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
              className={style}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="flex flex-row flex-wrap h-0">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.h1>
  )
}
