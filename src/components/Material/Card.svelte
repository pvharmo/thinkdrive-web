<script>
  import Paper from './Paper.svelte'

  export let interactive = false
  export let selected = false
</script>

<div class="card-container" on:message on:click on:dblclick>
  <Paper {interactive}>
    <div class="content-container" class:selected>
      <slot />
    </div>
  </Paper>
</div>

<style>
  .content-container {
    padding: 10px 20px;
  }
  .card-container {
    margin: 10px;
  }

  .selected {
    background-color: var(--primary-very-light-color);
  }
</style>
