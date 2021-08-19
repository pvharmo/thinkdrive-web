<script lang="ts">
  import { Dialog, Button } from 'minmat'
  import { upload } from 'src/api/File/File'
  import { location } from 'svelte-spa-router'
  import { createEventDispatcher } from 'svelte'
  import { fetchFilesAndFolders } from 'src/api/actions'

  const dispatch = createEventDispatcher()

  export let open = false

  let files: FileList

  const renameFolderInteraction = async () => {
    try {
      for (const file of files) {
        await upload($location + file.name, file)
      }
      fetchFilesAndFolders($location)
    } catch (e) {
      console.error(e)
    } finally {
      dispatch('close')
    }
  }
</script>

<Dialog {open} on:close>
  <input type="file" bind:files multiple />
  <Button on:click={renameFolderInteraction}>Confirm</Button>
</Dialog>
