import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import svg from "vite-plugin-svelte-svg";

export default defineConfig({
  plugins: [sveltekit(), svg()],
});
