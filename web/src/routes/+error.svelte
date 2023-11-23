<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import IconLabel from "$lib/IconLabel.svelte";
  import Logo from "$lib/Logo.svelte";
  import { _ } from "svelte-i18n";

  $: errorText =
    {
      404: $_("error.not_found"),
    }[$page.status] ?? $_("error.unknown");
</script>

<div class="text-center m-24 xl:m-52">
  <Logo class="m-auto mb-5" width={300} />
  <p>{errorText}</p>
  <p class="text-sm text-gray-500">{$_("error.subtext")}</p>
  <a class="action action-primary inline-block mt-5" href="{base}/"
    ><IconLabel
      caption={$_("error.return")}
      icon="lucide:arrow-left-to-line"
    /></a
  >
</div>
