const { AbleportTheme } = require("@ableport/web-common");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["lib/**/*.{svelte,ts}"],
  theme: {
    extend: AbleportTheme,
  },
  plugins: [],
  prefix: "ableport-",
  corePlugins: {
    preflight: false,
  },
};
