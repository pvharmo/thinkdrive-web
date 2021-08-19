<script lang="ts">
  import { Dialog, Button } from 'minmat'
  import { listContent, move as moveFolder } from 'src/api/Folder/Folder'
  import type { Folder } from 'src/api/Folder/Folder'
  import { location } from 'svelte-spa-router'
  import { createEventDispatcher, onMount } from 'svelte'
  import { fetchFilesAndFolders } from 'src/api/actions'
  import FoldersList from 'src/api/Folder/FoldersList/FoldersList.svelte'
  import { ObjectType } from 'src/api/object'
  import type { GenericObject } from 'src/api/object'

  const dispatch = createEventDispatcher()

  export let open = false
  export let currentName = ''

  let currentLocation = '/'
  let folders: Folder[] = []
  let selectedFolder: Folder | undefined

  const moveFolderInteraction = async () => {
    try {
      await moveFolder(
        $location + currentName + '/',
        currentLocation + (selectedFolder ? selectedFolder.name + '/' : '') + currentName + '/'
      )
      fetchFilesAndFolders($location)
    } catch (e) {
      console.error(e)
    } finally {
      dispatch('close')
    }
  }

  const goto = async (path: string) => {
    currentLocation = path
    folders = (await listContent(currentLocation)).filter(
      (x: GenericObject) => x.type === ObjectType.container
    )
    selectedFolder = undefined
  }

  onMount(() => {
    goto('/')
  })
</script>

<Dialog {open} on:close>
  <FoldersList
    {folders}
    selected={selectedFolder ? [selectedFolder] : []}
    on:select={(event) => (selectedFolder = event.detail.value)}
    on:goto={(event) => goto(event.detail.value)}
  />
  <Button on:click={moveFolderInteraction}>Confirm</Button>
</Dialog>
