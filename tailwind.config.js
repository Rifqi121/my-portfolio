/** @type {import('tailwindcss/vite').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {colors: {
        lightBlue: "#E0F2FE", // Warna biru muda untuk light mode
        darkBlue: "#1E3A8A",  // Warna biru gelap untuk dark mode
        primary: "#60A5FA",   // Warna utama
        secondary: "#93C5FD", // Warna sekunder
        darkBg: "#0F172A",    // Background dark mode
        lightBg: "#F8FAFC",   // Background light mode
      },
    },
    },
    plugins: [],
  };