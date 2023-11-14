<script lang="ts">
  import Icon from "@iconify/svelte";

  export let caption: string;
</script>

<button class="btn">
  <span>{caption}</span>
  <span><Icon icon="lucide:arrow-right-to-line" /></span>
</button>
