module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notosans: ['Noto Sans', 'sans-serif'],
        arizonia: ['Arizonia', 'cursive'],
      },
      colors: {
        "t-color": "#4b4b5a",
        "muted-t-color": "#6c757d",
        "hov-t-color": "#5cdb95",
        "hov-b-color": "#376089",
        "card-icon-color": "#43d39e",
        "card-icon-color2": "#ff5c75",
        "acc-color": "#3977de",
        "acc-bg-color": "#ccc",
        "tab-color": "#f3f4f7",
        "overlay": "rgba(0, 0, 0, 0.4)",
        "loader-color": "rgba(0, 0, 0, 0.1)",
        "sidebar": "#05386b",
      },
      fontSize: {
        "tiny": "0.6rem",
        "sml": "15px",
      },
      spacing: {
        18: "4.5rem",
        'login-img': "530px"
      },
      flex: {
        'half': '0 1 50%',
      },
      maxWidth: {
        '64': '256px',
      },
      minHeight: {
        '64': '256px',
      },
    },
  },
  plugins: [],
}
