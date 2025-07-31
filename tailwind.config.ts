import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      animation: {
        "ping-large":"ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
        "scrollY": 'scrollY 2s ease-in-out infinite',
        "scroll-up": "scroll-up 40s linear infinite",
        "slowping": 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        "ping-border": "ping-border 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(10%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-30%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        "scrollY": {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(100%)' },
        },
        "scroll-up": {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "ping-border": {
          "0%": {
            opacity: "2",
            transform: "scale(1)",
          },
          "75%, 100%": {
            opacity: "0",
            transform: "scale(1.75)",
          },
        },
      }
    },
  },
  plugins: [],
};
export default config;
