<script lang="ts">
  import { Dialog, Button, Card } from 'minmat'
  import { create as createFolder } from 'src/api/Folder/Folder'
  import { createEventDispatcher } from 'svelte'
  import { fetchFilesAndFolders } from 'src/api/actions'
  import { directory } from '../../stores/filesystem'

  const dispatch = createEventDispatcher()

  export let open = false
  export let obj: { type: string }

  let name = ''

  const create = async () => {
    switch (obj.type) {
      case 'folder':
        await createFolder($directory.format(), name)
        break

      default:
        await createFolder($directory.format(), name)
        break
    }
    fetchFilesAndFolders($directory.format())
    dispatch('close')
  }
</script>

<Dialog {open} on:close>
  <Card>
    <input bind:value={name} />
    <Button on:click={create}>Confirm</Button>
  </Card>
</Dialog>
