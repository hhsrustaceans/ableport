<script lang="ts">
  import Icon from "@iconify/svelte";

  export let caption: string;
</script>

<button class="btn">
  <div class="flex items-center gap-1">
    <span>{caption}</span>
    <span><Icon icon="lucide:arrow-right-to-line" width="24" /></span>
  </div>
</button>
