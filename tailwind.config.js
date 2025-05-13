export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceIn: {
          '0%': { opacity: 0, transform: 'scale(0.8) translateY(-10px)' },
          '60%': { opacity: 1, transform: 'scale(1.05) translateY(5px)' },
          '100%': { transform: 'scale(1) translateY(0)' },
        },
      },
      animation: {
        bounceIn: 'bounceIn 0.8s ease-out both',
      },
    },
  },

  plugins: [],
};
