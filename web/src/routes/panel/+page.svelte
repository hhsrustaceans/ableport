<script lang="ts">
  import { _ } from "svelte-i18n";
  import ConfirmButton from "$lib/controls/ConfirmButton.svelte";
</script>

<p class="mb-4">
  {$_("welcome.message")}
</p>
<ConfirmButton caption={$_("welcome.button")} />
