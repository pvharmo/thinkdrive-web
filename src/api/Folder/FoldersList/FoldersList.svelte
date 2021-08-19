<script lang="ts">
  import FolderComponent from 'src/api/Folder/FoldersList/FolderComponent.svelte'
  import { Grid } from 'minmat'
  import type { Folder } from 'src/api/Folder/Folder'
  import { createEventDispatcher } from 'svelte'

  export let folders: Folder[] = []
  export let selected: Folder[] = []

  const dispatch = createEventDispatcher()
</script>

{#if folders.length > 0}
  <Grid container>
    {#each folders as folder}
      <Grid>
        <FolderComponent
          selected={selected.includes(folder)}
          on:click={() => dispatch('select', { value: folder })}
          on:dblclick={() => dispatch('goto', { value: folder.location + folder.name + '/' })}
        >
          {folder.name}
        </FolderComponent>
      </Grid>
    {/each}
  </Grid>
{:else}
  <div class="empty-list">
    <h2 class="empty-list">No folders</h2>
  </div>
{/if}

<style>
  div.empty-list {
    margin-left: 10px;
  }

  h2.empty-list {
    color: rgba(2, 1, 1, 0.2);
  }
</style>
