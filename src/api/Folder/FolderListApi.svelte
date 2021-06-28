<script lang="ts">
  // import { onMount } from 'svelte'
  import * as folder from './Folder'

  import FoldersList from 'src/components/FoldersList/FoldersList.svelte'

  export let location: string

  let folders: folder.Folder[] = []

  const setFoldersList = async (location: string) => {
    const list = await folder.list(location)
    folders = list.filter((x: folder.Folder) => x.type === 'container')
  }

  $: setFoldersList(location)

  // onMount(async () => {
  //   setFoldersList()
  // })
</script>

<FoldersList {folders} />
