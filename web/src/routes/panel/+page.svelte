<script lang="ts">
  import { _ } from "svelte-i18n";
  import ConfirmButton from "$lib/controls/ConfirmButton.svelte";
  import HelpButton from "$lib/controls/HelpButton.svelte";
</script>

<p class="mb-4">
  {$_("welcome.message")}
</p>
<div class="space-x-2">
  <ConfirmButton caption={$_("welcome.button")} />
  <HelpButton />
</div>
