<script lang="ts">
  import IconLabel from "$lib/IconLabel.svelte";
  import { _ } from "svelte-i18n";
</script>

<button class="action">
  <IconLabel caption={$_("a11y.help")} icon="lucide:help-circle" />
</button>
