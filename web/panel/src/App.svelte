<script lang="ts">
  import { _ } from "svelte-i18n";
  import Navbar from "./lib/Navbar.svelte";
</script>

<Navbar />
<main class="text-center m-12">
  <p class="mb-4">
    {$_("welcome.message")}
  </p>
  <button class="btn">{$_("welcome.button")}</button>
</main>
