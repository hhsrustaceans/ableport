<script lang="ts">
  import { base } from "$app/paths";
  import HelpButton from "$lib/controls/HelpButton.svelte";
  import StudyPreview from "$lib/panel/StudyPreview.svelte";
  import type { Study } from "$lib/types/models/study";
  import { _ } from "svelte-i18n";

  const studies: Study[] = [
    {
      id: "test",
      name: "Test",
      description: "This is a test study.",
      websiteUrl: "https://example.com",
    },
  ];
</script>

<h1 class="cta">{$_("panel.studies_avail")}</h1>
<ul class="max-w-md m-auto space-y-2">
  {#each studies as study}
    <li>
      <a href="{base}/panel/study/{study.id}" class="block action action-li">
        <StudyPreview {study} />
      </a>
    </li>
  {/each}
</ul>
<div class="mt-4">
  <HelpButton text={$_("panel.help.select_study")} />
</div>
