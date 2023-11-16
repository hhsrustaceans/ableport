<script lang="ts">
  import Icon from "@iconify/svelte";

  import { _ } from "svelte-i18n";
</script>

<button
  class="p-2 focus:outline-gray-300 dark:focus:outline-gray-400 focus:outline rounded-md"
  aria-label={$_("nav.controls.settings_a11y")}
>
  <Icon icon="radix-icons:accessibility" width="32" />
</button>
