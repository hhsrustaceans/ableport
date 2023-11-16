<script lang="ts">
  import type { Study } from "$lib/types/models/study";
  import Icon from "@iconify/svelte";

  export let study: Study;
</script>

<div>
  <p class="font-semibold">{study.name}</p>
  <p>{study.description}</p>
  <a href={study.websiteUrl} target="_blank" class="inline-block mt-1">
    <div class="flex items-center gap-1 py-0.5 detail">
      <Icon icon="mdi:web" />
      <span>{new URL(study.websiteUrl).host}</span>
      <Icon icon="mdi:external-link" />
    </div>
  </a>
</div>
