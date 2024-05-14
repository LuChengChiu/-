/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9775FA",
        title1: "#1D1E20",
        text1: "#8F959E",
        backBtn: "#F5F6FA",
        backBtn2: "#F5F5F5",
        line: "#E7E8EA",
        check: "#34C358",
        ErrorRed: "#EA4335",
        bg: "#FEFEFE",
        lgoutRed: "#FF5757",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        md10: "10px",
        lg15: "15px",
      },
    },
  },
  plugins: [],
};
