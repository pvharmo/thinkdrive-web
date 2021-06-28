<script lang="ts">
  import { onMount } from 'svelte'
  import * as folder from './Folder'

  import FoldersList from 'src/components/FoldersList/FoldersList.svelte'

  export let location: string
  let folders: folder.Folder[] = []

  onMount(async () => {
    folders = await folder.list(location)
  })
</script>

<FoldersList {folders} />
