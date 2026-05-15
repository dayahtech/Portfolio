/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        space: {
          950: "#050712",
          900: "#090d1c",
          800: "#101629",
        },
        cyanPulse: "#38d5ff",
        violetPulse: "#a78bfa",
        magentaPulse: "#f472b6",
      },
      boxShadow: {
        glow: "0 0 34px rgba(56, 213, 255, 0.22)",
        violet: "0 0 34px rgba(167, 139, 250, 0.2)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 20%, rgba(56, 213, 255, 0.17), transparent 28%), radial-gradient(circle at 80% 0%, rgba(167, 139, 250, 0.18), transparent 32%), radial-gradient(circle at 50% 85%, rgba(244, 114, 182, 0.12), transparent 32%)",
      },
      opacity: {
        6: "0.06",
        8: "0.08",
        12: "0.12",
        14: "0.14",
        16: "0.16",
        18: "0.18",
        24: "0.24",
        62: "0.62",
      },
    },
  },
  plugins: [],
};
