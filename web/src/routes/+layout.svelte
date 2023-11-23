<script lang="ts">
  import "../app.postcss";
  import { hydrateLocale, initI18n } from "$lib/modules/i18n";
  import { productName } from "$lib/modules/config";
  import HelpDialog from "$lib/dialogs/HelpDialog.svelte";
  import { onMount } from "svelte";

  initI18n();

  onMount(() => {
    hydrateLocale();
  });
</script>

<svelte:head>
  <title>{productName}</title>
</svelte:head>

<slot />
<HelpDialog />
