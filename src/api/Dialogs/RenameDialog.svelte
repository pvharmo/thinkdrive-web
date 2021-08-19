<script lang="ts">
  import { Dialog, Button } from 'minmat'
  import { move as moveFolder } from 'src/api/Folder/Folder'
  import { location } from 'svelte-spa-router'
  import { createEventDispatcher } from 'svelte'
  import { fetchFilesAndFolders } from 'src/api/actions'

  const dispatch = createEventDispatcher()

  export let open = false
  export let currentName = ''

  $: newName = currentName

  const renameFolderInteraction = async () => {
    try {
      await moveFolder($location + currentName + '/', $location + newName + '/')
      fetchFilesAndFolders($location)
    } catch (e) {
      console.error(e)
    } finally {
      dispatch('close')
    }
  }
</script>

<Dialog {open} on:close>
  <input bind:value={newName} />
  <Button on:click={renameFolderInteraction}>Confirm</Button>
</Dialog>
