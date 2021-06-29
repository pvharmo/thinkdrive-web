<script lang="ts">
  import Dialog from 'components/Material/Dialog.svelte'
  import Button from 'src/components/Material/Button.svelte'
  import { create as createFolder } from 'src/api/Folder/Folder'
  import { location } from 'svelte-spa-router'
  import { createEventDispatcher } from 'svelte'
  import { fetchFilesAndFolders } from '../actions'

  const dispatch = createEventDispatcher()

  export let open = false

  let name = ''

  const createFolderInteraction = async () => {
    await createFolder($location, name)
    fetchFilesAndFolders($location)
    dispatch('close')
  }
</script>

<Dialog {open} on:close>
  <input bind:value={name} />
  <Button on:click={createFolderInteraction}>Confirm</Button>
</Dialog>
