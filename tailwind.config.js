/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./src/assets/images/hero-bg.png')",
        "content-bg": "url('./src/assets/images/video-bg.jpg')",
      },
    },
  },
  plugins: [],
};
