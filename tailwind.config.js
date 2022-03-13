module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      brightBlue: 'hsl(220, 98%, 61%)',
      from: 'hsl(192, 100%, 67%)',
      to: 'hsl(280, 87%, 65%)',
      veryLightGray: 'hsl(0, 0%, 98%)',
      veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
      lightGrayishBlue: 'hsl(233, 11%, 84%)',
      darkGrayishBlue: 'hsl(236, 9%, 61%)',
      veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
      veryDarkBlue: 'hsl(235, 21%, 11%)',
      veryDarkDesBlue: 'hsl(235, 24%, 19%)',
      lightGrayishBlue: 'hsl(234, 39%, 85%)',
      lightGrayishHover: 'hsl(236, 33%, 92%)',
      darkGrayishBlue: 'hsl(234, 11%, 52%)',
      veryDarkGrayishBlue1: 'hsl(233, 14%, 35%)',
      veryDarkGrayishBlue2: 'hsl(237, 14%, 26%)'
    },
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-pattern-light': "url('./src/assets/images/bg-desktop-light.jpg')",
        'hero-pattern-dark': "url('./src/assets/images/bg-desktop-dark.jpg')",
        'check-gradient':
          'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));'
      }
    }
  },
  plugins: []
};
