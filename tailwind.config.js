/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        white:'#ffffff',
        primary: '#0002A1',
        secondary: '#332FD0',
        danger:'#FF1F35',
        dangerHover:'#FB2576',
        light:'#FFFCF9',
        dark: '#151217',
      },
  },
  plugins: [],
}
