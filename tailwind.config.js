/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        foreground: "#E1E0CC",
        primary: {
          DEFAULT: "#E1E0CC",
          foreground: "#080808",
        },
        card: {
          DEFAULT: "#121212",
          foreground: "#E1E0CC",
        },
        muted: {
          DEFAULT: "#1C1C1A",
          foreground: "rgba(225, 224, 204, 0.6)",
        },
        accent: {
          DEFAULT: "#2A2A26",
          foreground: "#E1E0CC",
        },
        border: "rgba(225, 224, 204, 0.12)",
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

