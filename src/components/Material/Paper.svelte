<script lang="ts">
  export let elevation: number = 1
  export let interactive = false
</script>

<div class={`paper elevation${elevation}`} class:interactive>
  <slot />
</div>
