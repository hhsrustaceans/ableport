import App from "./App.svelte";
import "./main.css";

import { init, addMessages, getLocaleFromNavigator } from "svelte-i18n";
import nl from "../i18n/nl.json";

addMessages("nl", nl);
init({ fallbackLocale: "nl", initialLocale: getLocaleFromNavigator() });

const app = new App({
  target: document.getElementById("app")!,
});

export default app;
