<script lang="ts">
  import Ripple from '../utils/Ripple.svelte'
  export let ripple = true
  export let raised = false
</script>

<button class:ripple class:raised on:message>
  <slot />
  {#if ripple}
    <Ripple />
  {/if}
</button>
