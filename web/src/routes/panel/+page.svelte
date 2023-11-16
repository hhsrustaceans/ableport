<script lang="ts">
  import { _ } from "svelte-i18n";
  import HelpButton from "$lib/controls/HelpButton.svelte";
  import IconLabel from "$lib/IconLabel.svelte";
</script>

<p class="mb-4">
  {$_("welcome.message", { values: { action: $_("welcome.button") } })}
</p>
<div class="space-x-2">
  <a href="/panel/start" class="action action-primary">
    <IconLabel caption={$_("welcome.button")} />
  </a>
  <HelpButton />
</div>
