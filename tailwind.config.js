/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {screens:{
      smm: '320px',
      sf: '400px',
      apple: '450px',
      sm: '550px',
      s: '600px',
      fh: '700px',
      md: '768px',
      hs: '900px',
      conf: '990px',
      lg: '1028px',
      l: '1000px',
      xlfooter: '1100px',
      xl: '1200px',
      footer: '1270px',
      fs: '1350px',
      lt: '1400px',
      xxl: '1440px',
      xxxl: '1500px',
      xxxxl: '1550px',
    }},
  },
  plugins: [],
}