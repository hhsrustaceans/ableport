const { AbleportTheme } = require("@ableport/web-common");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*.{svelte,ts}"],
  theme: {
    extend: AbleportTheme,
  },
  plugins: [],
}

