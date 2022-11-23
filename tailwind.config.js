/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        prim1: 'hsl(0, 36%, 70%)',
        prim11: 'hsl(0, 36%, 70%, 0.4)',
        prim2: 'hsl(0, 93%, 68%)',
        neut1: 'hsl(0, 6%, 24%)',
      },
    },
  },
  
  plugins: [],
}
