<script lang="ts">
  import { _ } from "svelte-i18n";
  import Navbar from "$lib/Navbar.svelte";
  import ConfirmButton from "$lib/controls/ConfirmButton.svelte";
</script>

<Navbar />
<main class="text-center m-12">
  <p class="mb-4">
    {$_("welcome.message")}
  </p>
  <ConfirmButton caption={$_("welcome.button")} />
</main>
