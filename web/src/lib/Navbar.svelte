<script lang="ts">
  import { base } from "$app/paths";
  import A11yButton from "$lib/controls/A11yButton.svelte";
  import LanguageButton from "$lib/controls/LanguageButton.svelte";
  import { _ } from "svelte-i18n";
  import Logo from "$lib/Logo.svelte";
</script>

<nav class="p-5 flex items-center justify-between">
  <ul class="flex items-center">
    <li>
      <a href="{base}/" aria-label={$_("nav.home")} class="p-1 block">
        <Logo />
      </a>
    </li>
  </ul>
  <ul class="flex items-center gap-2">
    <li><A11yButton /></li>
    <li><LanguageButton /></li>
  </ul>
</nav>
