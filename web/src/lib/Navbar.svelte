<script lang="ts">
  import logo from "$lib/assets/logo.png";
  import A11yButton from "$lib/controls/A11yButton.svelte";
  import { _ } from "svelte-i18n";
  import { productName } from "./modules/config";
</script>

<nav class="p-5 flex items-center justify-between">
  <ul class="flex items-center">
    <li>
      <a href="/" aria-label={$_("nav.home")}
        ><img
          src={logo}
          alt={$_("nav.logo", { values: { product: productName } })}
          width="48"
        /></a
      >
    </li>
  </ul>
  <ul class="flex items-center gap-2">
    <li><A11yButton /></li>
  </ul>
</nav>
