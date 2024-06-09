import { nextui } from "@nextui-org/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },

  darkMode: "class",

  plugins: [
    nextui({
      addCommonColors: true,

      layout: {
        disabledOpacity: "0.3",
        radius: {
          small: "2px",
          medium: "4px",
          large: "6px",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "3px",
        },
      },

      themes: {
        light: {
          layout: {},
          colors: {
            background: "#fff",
            foreground: "#000 ",
            primary: {
              50: "#000",
              100: "#000",
              200: "#000",
              300: "#000",
              400: "#000",
              500: "#000",
              600: "#000",
              700: "#000",
              800: "#000",
              900: "#000",
              DEFAULT: "#000",
              foreground: "#000",
            },
            focus: "#000",
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#000",
            foreground: "#fff",
            primary: {
              50: "#fff",
              100: "#fff",
              200: "#fff",
              300: "#fff",
              400: "#fff",
              500: "#fff",
              600: "#fff",
              700: "#fff",
              800: "#fff",
              900: "#fff",
              DEFAULT: "#fff",
              foreground: "#fff",
            },
            focus: "#fff",
          },
        },
      },
    }),
  ],
}
