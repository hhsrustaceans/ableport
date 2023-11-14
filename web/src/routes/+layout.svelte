<script lang="ts">
  import "../app.postcss";
  import { initI18n } from "$lib/modules/i18n";

  initI18n();
</script>

<svelte:head>
  <title>Ableport</title>
</svelte:head>

<slot />
