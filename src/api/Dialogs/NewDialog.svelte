<script lang="ts">
  import Dialog from 'components/Material/Dialog.svelte'
  import Button from 'src/components/Material/Button.svelte'
  import { create as createFolder } from 'src/api/Folder/Folder'
  import { location } from 'svelte-spa-router'
  import { createEventDispatcher } from 'svelte'
  import { fetchFilesAndFolders } from 'src/api/actions'

  const dispatch = createEventDispatcher()

  export let open = false
  export let obj: { type: string }

  let name = ''

  const create = async () => {
    switch (obj.type) {
      case 'folder':
        await createFolder($location, name)
        break

      default:
        await createFolder($location, name)
        break
    }
    fetchFilesAndFolders($location)
    dispatch('close')
  }
</script>

<Dialog {open} on:close>
  <input bind:value={name} />
  <Button on:click={create}>Confirm</Button>
</Dialog>
