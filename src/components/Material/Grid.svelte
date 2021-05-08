<script lang="ts">
  export let container = false
  export let row = false
</script>

<div class:container class:row>
  <slot />
</div>

<style>
  .container {
    display: flex;
  }
  .row {
    flex-direction: row;
  }
</style>
