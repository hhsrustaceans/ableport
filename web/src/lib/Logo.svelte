<script lang="ts">
  import Logo from "$lib/assets/logo.svg?component";
  import { _ } from "svelte-i18n";
  import { productName } from "./modules/config";

  export let width = 150;
</script>

<Logo
  {width}
  height="auto"
  viewBox="0 0 1107 288"
  alt={$_("nav.logo", { values: { product: productName } })}
  {...$$restProps}
/>
