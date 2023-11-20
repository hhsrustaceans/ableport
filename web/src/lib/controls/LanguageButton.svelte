<script lang="ts">
  import LanguageDialog from "$lib/dialogs/LanguageDialog.svelte";
  import Icon from "@iconify/svelte";

  import { _ } from "svelte-i18n";

  let showDialog = false;
</script>

<button
  class="setting"
  aria-label={$_("nav.controls.settings_lang")}
  on:click={() => (showDialog = true)}
>
  <Icon icon="tabler:language" width="32" />
</button>

<LanguageDialog isOpen={showDialog} onDismiss={() => (showDialog = false)} />
