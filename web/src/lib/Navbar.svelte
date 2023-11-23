<script lang="ts">
  import Logo from "$lib/assets/logo.svg?component";
  import A11yButton from "$lib/controls/A11yButton.svelte";
  import LanguageButton from "$lib/controls/LanguageButton.svelte";
  import { _ } from "svelte-i18n";
  import { productName } from "./modules/config";
</script>

<nav class="p-5 flex items-center justify-between">
  <ul class="flex items-center">
    <li>
      <a href="/" aria-label={$_("nav.home")} class="p-1 block">
        <Logo
          width="150"
          height="auto"
          viewBox="0 0 1107 288"
          alt={$_("nav.logo", { values: { product: productName } })}
        />
      </a>
    </li>
  </ul>
  <ul class="flex items-center gap-2">
    <li><A11yButton /></li>
    <li><LanguageButton /></li>
  </ul>
</nav>
