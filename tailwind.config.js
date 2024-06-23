import { nextui } from "@nextui-org/theme"
import { error } from "console"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        primary: "0 10px 20px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "bottom-fade-d": "linear-gradient(to top, #020202, transparent 50%)",
        "bottom-fade-l": "linear-gradient(to top, #f4f4f4, transparent 90%)",
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
          colors: {
            background: "#f4f4f4",
            foreground: "black",
            primary: {
              DEFAULT: "#327445",
              foreground: "black",
            },
            focus: "#3BF973",
            divider: "black",
          },
        },
        dark: {
          colors: {
            background: "#020202",
            foreground: "white",
            primary: {
              DEFAULT: "#3BF973",
              foreground: "black",
            },
            focus: "#3BF973",
            divider: "black",
          },
        },
      },
    }),
  ],
}
