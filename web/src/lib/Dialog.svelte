<script lang="ts">
  import { DialogOverlay, DialogContent } from "svelte-accessible-dialog";
  import Icon from "@iconify/svelte";
  import { _ } from "svelte-i18n";

  export let title: string;
  export let isOpen: boolean;
  export let onDismiss: () => void;
</script>

<DialogOverlay {isOpen} {onDismiss}>
  <DialogContent
    aria-label={title}
    class="rounded-md text-sm w-72 md:w-96 mx-auto my-24 bg-white dark:bg-gray-500 drop-shadow-2xl p-6"
  >
    <button
      on:click={onDismiss}
      aria-label={$_("dialog.close")}
      class="p-1 action block"
    >
      <Icon icon="mdi:close" />
    </button>
    <div class="mt-3">
      <slot />
    </div>
  </DialogContent>
</DialogOverlay>
