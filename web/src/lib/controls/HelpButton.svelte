<script lang="ts">
  import IconLabel from "$lib/IconLabel.svelte";
  import { helpText } from "$lib/modules/help";
  import { _ } from "svelte-i18n";

  export let text: string;

  function showHelp() {
    helpText.set(text);
  }
</script>

<button class="action" on:click={showHelp}>
  <IconLabel caption={$_("a11y.help")} icon="lucide:help-circle" />
</button>
