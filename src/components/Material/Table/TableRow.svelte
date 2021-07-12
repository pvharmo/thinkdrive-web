<script>
  import Ripple from 'src/components/utils/Ripple.svelte'

  export let highlight = false
  export let interactive = false
</script>

<tr class:highlight class:interactive on:click>
  <slot />
  {#if interactive}
    <Ripple />
  {/if}
</tr>

<style>
  .highlight {
    background-color: var(--primary-very-light-color);
  }
</style>
