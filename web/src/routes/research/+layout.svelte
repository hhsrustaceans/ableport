<script lang="ts">
  import { productName } from "$lib/modules/config";
  import { _ } from "svelte-i18n";
</script>

<svelte:head>
  <title>{$_("portal.research", { values: { product: productName } })}</title>
</svelte:head>

<slot />
