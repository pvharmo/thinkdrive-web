<script>
  import Paper from './Paper.svelte'

  export let interactive = false
</script>

<div class="card-container" on:message on:click>
  <Paper {interactive}>
    <div class="content-container">
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
</style>
