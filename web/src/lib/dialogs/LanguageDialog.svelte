<script lang="ts">
  import { _, locale as i18nLocale } from "svelte-i18n";
  import { locales, navigatorLocale } from "$lib/modules/i18n";
  import Dialog from "$lib/Dialog.svelte";

  export let isOpen = false;
  export let onDismiss: () => void;

  $: selection = $i18nLocale!;

  function isAuto(localeCode: string) {
    return localeCode === $navigatorLocale;
  }

  function setLocale() {
    if (isAuto(selection)) {
      localStorage.removeItem("locale");
    } else {
      localStorage.setItem("locale", selection);
    }
    i18nLocale.set(selection);
  }
</script>

<Dialog title={$_("nav.controls.settings_lang")} {onDismiss} {isOpen}>
  <div role="radiogroup" class="flex flex-col gap-1" on:change={setLocale}>
    {#each Object.values(locales).sort( (_, b) => (b.code === $navigatorLocale ? 1 : 0) ) as locale}
      <div class="flex gap-2">
        <input
          type="radio"
          id={locale.code}
          value={locale.code}
          bind:group={selection}
        />
        <label
          class="action action-li block w-full cursor-pointer"
          for={locale.code}
        >
          <span aria-hidden="true">{locale.flag}</span>
          <!-- Locale is determined by browser -->
          {#if isAuto(locale.code)}
            <span
              >{$_("i18n.auto", {
                values: { locale: $_(`i18n.locales.${locale.code}`) },
              })}</span
            >
          {:else}
            <span>{$_(`i18n.locales.${locale.code}`)}</span>
          {/if}
        </label>
      </div>
    {/each}
  </div>
</Dialog>
