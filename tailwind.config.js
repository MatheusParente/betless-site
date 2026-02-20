/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-slide': 'fadeSlide 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'pulse-slow': 'breathe 4s ease-in-out infinite',
        'scroll-up': 'scrollUp 40s linear infinite',
      },
    },
  },
  plugins: [],
}