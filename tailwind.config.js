/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bold: ["Poppins-Bold"],
        semiBold: ["Poppins-SemiBold"],
        medium: ["Poppins-Medium"],
        extraBold: ["Poppins-ExtraBold"],
        regular: ["Poppins-Regular"],
      },
    },
  },
  plugins: [],
};
