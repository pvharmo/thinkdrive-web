<script lang="ts">
  import FolderComponent from 'src/api/Folder/FolderComponent.svelte'
  import Grid from 'components/Material/Grid.svelte'
  import type { Folder } from 'src/api/Folder/Folder'
  import { createEventDispatcher } from 'svelte'

  export let folders: Folder[] = []
  export let selected: Folder[] = []

  const dispatch = createEventDispatcher()
</script>

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
