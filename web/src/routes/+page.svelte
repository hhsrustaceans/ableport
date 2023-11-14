<script lang="ts">
  import { _ } from "svelte-i18n";
  import Navbar from "$lib/Navbar.svelte";
  import ConfirmButton from "$lib/controls/ConfirmButton.svelte";
</script>

<main class="m-2">
  <header class="mb-12">
    <a class="absolute -top-10 focus:top-0" tabindex={0} href="#main"
      >{$_("a11y.skip_link")}</a
    >
    <Navbar />
  </header>
  <div class="text-center m-12" id="main">
    <p class="mb-4">
      {$_("welcome.message")}
    </p>
    <ConfirmButton caption={$_("welcome.button")} />
  </div>
</main>
