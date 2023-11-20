<script lang="ts">
  import { _ } from "svelte-i18n";
  import { helpText } from "$lib/modules/help";
  import Dialog from "$lib/Dialog.svelte";

  function clearHelp() {
    helpText.set(null);
  }
</script>

<Dialog title={$_("a11y.help")} onDismiss={clearHelp} isOpen={!!$helpText}>
  <p>{$helpText}</p>
</Dialog>
