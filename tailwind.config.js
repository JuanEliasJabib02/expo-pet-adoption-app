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
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        card: "#f0f0f0",
        cardForeground: "#333333",
        popover: "#e0e0e0",
        popoverForeground: "#444444",
        primary: "#007bff",
        primaryForeground: "#ffffff",
        secondary: "#6c757d",
        secondaryForeground: "#ffffff",
        muted: "#f8f9fa",
        mutedForeground: "#212529",
        accent: "#17a2b8",
        accentForeground: "#ffffff",
        destructive: "#dc3545",
        destructiveForeground: "#ffffff",
        border: "#dee2e6",
        input: "#ffffff",
        ring: "#007bff",
      },
    },
  },
  plugins: [],
};
