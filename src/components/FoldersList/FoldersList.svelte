<script lang="ts">
  import FolderComponent from 'components/Folder.svelte'
  import Grid from 'components/Material/Grid.svelte'
  import type { Folder } from 'src/api/Folder/Folder'

  export let folders: Folder[] = []
</script>

<Grid container>
  {#each folders as folder}
    <Grid>
      <FolderComponent>{folder.name}</FolderComponent>
    </Grid>
  {/each}
</Grid>
