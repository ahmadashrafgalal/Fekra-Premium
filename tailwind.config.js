/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors sampled from public/art/logo.jpg (Fekra Premium Logo)
        logo: {
          blue: "#141287",       // Exact royal indigo background of the logo
          deep: "#0b0a4d",       // Deep royal night shade for depth
          vivid: "#1f1cb8",      // Vibrant electric indigo highlight
          ice: "#eef0ff",        // Exact soft lavender-white inside the logo badge
          periwinkle: "#dde1ff", // Secondary soft lavender surface
          sky: "#5ce1e6",        // Creative electric cyan accent
          sun: "#ffd23f",        // Warm creative yellow-gold contrast
        },
        obsidian: {
          DEFAULT: "#07080d",
          card: "#0e101a",
          border: "#1c2033",
        },
        fekra: {
          DEFAULT: "#141287",
          deep: "#0b0a4d",
          electric: "#3b4bff",
          sky: "#60a5fa",
          ice: "#eef0ff",
        },
        amber: {
          cinema: "#f59e0b",
          glow: "#fbbf24",
        },
        atelier: {
          paper: "#eef0ff",
          cream: "#dfe3ff",
          ink: "#0b0a4d",
        },
      },
      fontFamily: {
        alexandria: ["var(--font-alexandria)", "sans-serif"],
        plex: ["var(--font-plex-arabic)", "sans-serif"],
        kufi: ["var(--font-reem-kufi)", "sans-serif"],
        bricolage: ["var(--font-bricolage)", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        // Inspired by the 3D offset sticker shadow in the Fekra Premium logo
        "logo-ice": "8px 8px 0px 0px #eef0ff",
        "logo-ice-sm": "4px 4px 0px 0px #eef0ff",
        "logo-blue": "8px 8px 0px 0px #141287",
        "logo-blue-sm": "4px 4px 0px 0px #141287",
        "logo-sun": "6px 6px 0px 0px #ffd23f",
      },
    },
  },
  plugins: [],
};
