import { Fira_Code as FontMono, Raleway as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
