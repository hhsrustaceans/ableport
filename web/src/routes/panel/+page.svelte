<script lang="ts">
  import { _ } from "svelte-i18n";
  import IconLabel from "$lib/IconLabel.svelte";
  import { base } from "$app/paths";
</script>

<h1 class="cta">
  {$_("panel.welcome.message", {
    values: { action: $_("panel.welcome.button") },
  })}
</h1>
<a href="{base}/panel/start" class="action action-primary inline-block">
  <IconLabel caption={$_("panel.welcome.button")} />
</a>
