<script lang="ts">
  import Icon from "@iconify/svelte";

  import { _ } from "svelte-i18n";
</script>

<button class="setting" aria-label={$_("nav.controls.settings_lang")}>
  <Icon icon="tabler:language" width="32" />
</button>
