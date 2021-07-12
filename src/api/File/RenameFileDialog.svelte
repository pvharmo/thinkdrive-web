<script lang="ts">
  import Dialog from 'components/Material/Dialog.svelte'
  import Button from 'src/components/Material/Button.svelte'
  import { move as moveFile } from 'src/api/File/File'
  import { location } from 'svelte-spa-router'
  import { createEventDispatcher } from 'svelte'
  import { fetchFilesAndFolders } from '../actions'

  const dispatch = createEventDispatcher()

  export let open = false
  export let currentName = ''

  let newName = currentName

  const createFolderInteraction = async () => {
    await moveFile($location + currentName, $location + newName)
    fetchFilesAndFolders($location)
    dispatch('close')
  }
</script>

<Dialog {open} on:close>
  <input bind:value={newName} />
  <Button on:click={createFolderInteraction}>Confirm</Button>
</Dialog>
