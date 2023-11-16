<script lang="ts">
  import type { Study } from "$lib/types/models/study";
  import Icon from "@iconify/svelte";

  export let study: Study;
</script>

<div class="p-3 rounded-md text-left text-sm bg-gray-200 dark:bg-gray-700">
  <p class="font-semibold">{study.name}</p>
  <p>{study.description}</p>
  <a
    href={study.websiteUrl}
    target="_blank"
    class="flex items-center gap-1 mt-1 detail"
  >
    <Icon icon="mdi:web" />
    <span>{new URL(study.websiteUrl).host}</span>
    <Icon icon="mdi:external-link" />
  </a>
</div>
