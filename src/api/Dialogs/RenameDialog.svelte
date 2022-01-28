<script lang="ts">
  import { Dialog, Button, Card } from 'minmat'
  import { move as moveFolder } from 'src/api/Folder/Folder'
  import { move as moveFile } from 'src/api/File/File'
  import { directory } from '../../stores/filesystem'
  import { createEventDispatcher } from 'svelte'
  import { fetchFilesAndFolders } from 'src/api/actions'

  const dispatch = createEventDispatcher()

  export let open = false
  export let currentName = ''
  export let isFile = false

  $: newName = currentName

  const renameFolderInteraction = async () => {
    try {
      if (isFile) {
        await moveFile($directory.format() + currentName, $directory.format() + newName)
        fetchFilesAndFolders($directory.format())
      } else {
        await moveFolder($directory.format() + currentName + '/', $directory.format() + newName + '/')
        fetchFilesAndFolders($directory.format())
      }
    } catch (e) {
      console.error(e)
    } finally {
      dispatch('close')
    }
  }
</script>

<Dialog {open} on:close>
  <Card>
    <input bind:value={newName} />
    <Button on:click={renameFolderInteraction}>Confirm</Button>
  </Card>
</Dialog>
