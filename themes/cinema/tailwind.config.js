module.exports = {
  content: [
    'src/js/*.js',
    'layouts/**/*.{htm,js}',
    'layouts/*.{htm,js}',
    'partials/**/*.{htm,js}',
    'partials/*.{htm,js}',
    'pages/**/*.{htm,js}',
    'pages/*.{htm,js}',
    'content/**/*.{htm,js}',
    'content/*.{htm,js}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    gridTemplateAreas: {
      'layout': [
        'header',
        'main',
        'footer',
      ],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'selago' : '#F0EEFD'
      },
      gridTemplateColumns: {
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        'a1a': 'auto 1fr auto',
        full: '100%'
      },
      gridTemplateRows: {
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        'a1a': 'auto 1fr auto',
        full: '100%',
        'layout': 'auto auto 1fr auto',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
