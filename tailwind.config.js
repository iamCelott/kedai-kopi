/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Text", "sans-serif"],
        kodemono: ["Kode Mono", "monospace"],
      },
      animation: {
        slideIn: "slideIn 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
