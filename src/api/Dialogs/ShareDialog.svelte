<script lang="ts">
  import Dialog from 'components/Material/Dialog.svelte'
  import Button from 'src/components/Material/Button.svelte'
  import { updateStatus, getStatus } from 'src/api/Share'
  import { createEventDispatcher } from 'svelte'
  import type { GenericObject } from '../object'
  import Paper from 'src/components/Material/Paper.svelte'

  const dispatch = createEventDispatcher()

  export let open = false
  export let object: GenericObject

  let globalScopes: string = ''

  const getSharingStatus = async (_: boolean) => {
    if (object && open) {
      const status = await getStatus(object.location + object.name + (object.type ? '/' : ''))
      globalScopes = status.globalScopes?.join(',') || ''
    }
  }

  const shareFolderInteraction = async () => {
    const status = { globalScopes: globalScopes.split(',') }
    try {
      await updateStatus(object.location + object.name + (object.type ? '/' : ''), status)
    } catch (e) {
      console.error(e)
    } finally {
      dispatch('close')
    }
  }

  $: getSharingStatus(open)
</script>

<Dialog {open} on:close>
  <Paper>
    <select bind:value={globalScopes}>
      <option value={''}>Not shared</option>
      <option value={'read'}>Read</option>
      <option value={'read,write'}>Read and edit</option>
    </select>
    <Button on:click={shareFolderInteraction}>Confirm</Button>
  </Paper>
</Dialog>
