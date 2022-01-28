<script lang="ts">
  import { Dialog, Button, Card } from 'minmat'
  import { upload } from 'src/api/File/File'
  import { directory } from '../../stores/filesystem'
  import { createEventDispatcher } from 'svelte'
  import { fetchFilesAndFolders } from 'src/api/actions'

  const dispatch = createEventDispatcher()

  export let open = false

  let files: FileList

  const renameFolderInteraction = async () => {
    try {
      for (const file of files) {
        await upload($directory.format() + file.name, file)
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
    <input type="file" bind:files multiple />
    <Button on:click={renameFolderInteraction}>Confirm</Button>
  </Card>
</Dialog>
