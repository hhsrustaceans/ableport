<script lang="ts">
  import Icon from "@iconify/svelte";

  export let caption: string;
  export let icon = "lucide:arrow-right-to-line";
</script>

<div class="flex items-center gap-1">
  <span>{caption}</span>
  <span aria-hidden="true"><Icon {icon} width="24" /></span>
</div>
