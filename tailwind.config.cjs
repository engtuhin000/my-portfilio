module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0e1222',
        'accent-blue': '#14b8ff',
        'muted-cyan': '#2dd4bf'
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(180deg, rgba(10,14,30,0.9), rgba(12,16,28,0.85))"
      }
    },
  },
  plugins: [],
};
