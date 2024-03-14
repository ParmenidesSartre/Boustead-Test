/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        card: "400px",
      },
      height: {
        card: "200px",
      },
      colors: {
        "custom-magenta": "#FF00FF",
        "custom-yellow": "#FFEB3B",
      },
      borderRadius: {
        leaf: "50%",
      },
      borderColor: {
        "leaf-green": "green",
      },
    },
  },
  plugins: [],
};
