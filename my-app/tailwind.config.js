/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue|gray)-(100|200|300|400|500|600|700|800)/,
      variants: ["hover"]
    }
  ],
  theme: {
    extend: {
      colors: {
        "main": "#0E6A37",
        "light": "#EAF4EF",
        "secondary": "#0A093D",
        "ash": "#656464",
        "grayish": "#242424",
        "all": "#000000",
        "unassigned": "#ff333f",
        "pending": "#ea8b42",
        "assigned": "#2984d9",
        "ongoing": "#c9c214",
        "completed": "#24c18f",
        "closed": "#0E6A37",
        "declined": "#D21034",
        "waiting_for_acceptance": "#04AAC8",
        "delayed" : "#FF4B57",
        "accepted" : "#12833B",
        "inprogress" : "#C9C214",
        "compliant" : "#FF333F",
        "fixing" : "#DE2010",
        "inreview" : "#24C18F",
        "waiting_for_payment" : "#39DE54",
        "problem" : "#DE2010",
        "paid": "#0E6A37",
      },
      fontFamily: {
        "title": ['Inter', "sans-serif"],
        "body": ['Poppins', "sans-serif"],
      },
      screens: {
        "bf-small": "450px",
        "1.5xl": "1325px",
      }
    },
  },
  plugins: [],
}
