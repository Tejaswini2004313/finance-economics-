/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f5f5f5",
        bgcolor: "#001C30",
        blue: "#88E1FF",
        gray: "#D9D9D9",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
