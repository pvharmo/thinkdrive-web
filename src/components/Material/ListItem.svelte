<script lang="ts">
  import Ripple from '../utils/Ripple.svelte'
</script>

<li on:click>
  <slot />
  <Ripple />
</li>
