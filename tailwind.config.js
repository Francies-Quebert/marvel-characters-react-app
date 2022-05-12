module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "backdrop": "url('./assets/bg-image.jpg')",
        "radial":"radial-gradient(circle, rgba(254,153,0,1) 0%, rgba(255,0,0,1) 35%)",
        "fallback":"rgb(254,153,0)"
      },
    },
  },
  plugins: [],
};
