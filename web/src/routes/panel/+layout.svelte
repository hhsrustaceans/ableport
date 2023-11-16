<script lang="ts">
  import { _ } from "svelte-i18n";
  import Navbar from "$lib/Navbar.svelte";
  import { productName } from "$lib/modules/config";
</script>

<svelte:head>
  <title>{$_("portal.panel", { values: { product: productName } })}</title>
</svelte:head>

<main class="m-2">
  <header class="mb-12">
    <a
      class="absolute -top-10 focus:top-0 text-sm py-1 px-2"
      tabindex={0}
      href="#main">{$_("a11y.skip_link")}</a
    >
    <Navbar />
  </header>
  <div class="text-center m-12" id="main">
    <slot />
  </div>
</main>
