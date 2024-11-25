/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {

    extend: {
      colors: {
        primary: "#0057B7",         // Vibrant blue for primary UI elements
        "primary-dark": "#004080", // Darker shade for hover or focus states
        secondary: "#F5F5F5",
        accent: "#FFD700",            // Gold accent for highlights
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        bounceOnce: 'bounceOnce 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
