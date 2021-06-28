<script lang="ts">
  import Ripple from 'components/utils/Ripple.svelte'
  export let elevation: number = 1
  export let interactive = false
</script>

<div class={`paper elevation${elevation}`} class:interactive class:ripple={interactive}>
  <slot />
  {#if interactive}
    <Ripple />
  {/if}
</div>
