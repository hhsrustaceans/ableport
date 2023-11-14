<script lang="ts">
  import Icon from "@iconify/svelte";
  import { _ } from "svelte-i18n";
</script>

<button class="action">
  <div class="flex items-center gap-1">
    <span>{$_("a11y.help")}</span>
    <span aria-hidden="true"><Icon icon="lucide:help-circle" width="24" /></span
    >
  </div>
</button>
