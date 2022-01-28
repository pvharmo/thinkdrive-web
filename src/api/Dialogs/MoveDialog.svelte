<script lang="ts">
  import { Dialog, Button, Card } from 'minmat'
  import { move as moveFolder, Folder } from 'src/api/Folder/Folder'
  import { move as moveFile } from 'src/api/File/File'
  import { createEventDispatcher } from 'svelte'
  import { fetchFilesAndFolders } from 'src/api/actions'
  import TreeView from '../../components/TreeView.svelte'
  import { directory } from '../../stores/filesystem'

  const dispatch = createEventDispatcher()

  export let open = false
  export let currentName = ''
  export let isFile = false

  let selectedFolder: Folder | undefined

  let onSelected = (folder: Folder) => (selectedFolder = folder)

  const moveFolderInteraction = async () => {
    try {
      if (isFile) {
        await moveFile(
          $directory.format() + currentName,
          selectedFolder?.contentUrl + currentName
        )
      } else {
        await moveFolder(
          $directory.format() + currentName + '/',
          selectedFolder?.contentUrl + currentName + '/'
        )
      }
      fetchFilesAndFolders($directory.format())
    } catch (e) {
      console.error(e)
    } finally {
      dispatch('close')
    }
  }
</script>

<Dialog {open} on:close>
  <Card>
    <TreeView on:select={(event) => onSelected(event.detail)} />
    <Button on:click={moveFolderInteraction}>Confirm</Button>
  </Card>
</Dialog>
