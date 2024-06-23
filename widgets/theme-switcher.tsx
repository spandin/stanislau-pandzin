"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const isLightTheme = theme === "light"

  const toggleTheme = () => {
    setTheme(isLightTheme ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isLightTheme ? "dark" : "light"} theme`}
      style={{ cursor: "pointer", background: "none", border: "none" }}
      className="relative"
    >
      <AnimatePresence mode="wait">
        {isLightTheme ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.4 }}
            className="rounded-full bg-primary p-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/60"
          >
            <Sun size={24} color="white" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.4 }}
            className="rounded-full bg-primary p-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/60"
          >
            <Moon size={24} color="black" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
