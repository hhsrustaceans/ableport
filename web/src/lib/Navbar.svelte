<script lang="ts">
  import logo from "$lib/assets/logo.png";
  import Icon from "@iconify/svelte";
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
    <li>
      <button class="p-2" aria-label={$_("nav.controls.settings_a11y")}>
        <Icon icon="radix-icons:accessibility" width="32" />
      </button>
    </li>
    <li>
      <button class="p-2" aria-label={$_("nav.controls.adjust_font_size")}>
        <Icon icon="fluent:text-font-size-20-filled" width="32" />
      </button>
    </li>
  </ul>
</nav>
