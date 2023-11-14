<script lang="ts">
  import "../app.postcss";
  import { initI18n } from "$lib/modules/i18n";
  import { productName } from "$lib/modules/config";

  initI18n();
</script>

<svelte:head>
  <title>{productName}</title>
</svelte:head>

<slot />
