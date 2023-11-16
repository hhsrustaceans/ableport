<script lang="ts">
  import { _ } from "svelte-i18n";
  import { DialogOverlay, DialogContent } from "svelte-accessible-dialog";
  import { helpText } from "./modules/help";
  import Icon from "@iconify/svelte";

  function clearHelp() {
    helpText.set(null);
  }
</script>

<DialogOverlay isOpen={!!$helpText} onDismiss={clearHelp}>
  <DialogContent aria-label={$_("a11y.help")} class="rounded-md text-sm">
    <button on:click={clearHelp} aria-label="Close" class="p-1 action block">
      <Icon icon="mdi:close" />
    </button>
    <div class="mt-3">
      <p>{$helpText}</p>
    </div>
  </DialogContent>
</DialogOverlay>
