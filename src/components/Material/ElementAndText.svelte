<script lang="ts">
  export let spacing: number = 7
</script>

<div>
  <slot name="element" />
  <span style="padding-left:{spacing}px">
    <slot name="text" />
  </span>
</div>

<style>
  div {
    display: flex;
    align-items: center;
  }
</style>
