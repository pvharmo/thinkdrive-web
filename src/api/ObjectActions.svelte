<script>
  import { createEvent } from '@testing-library/dom'

  import { Button } from 'minmat'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  const deleteEvent = () => {
    dispatch('delete')
  }

  const renameEvent = () => {
    dispatch('rename')
  }

  const moveEvent = () => {
    dispatch('move')
  }

  const shareEvent = () => {
    dispatch('share')
  }

  const downloadEvent = () => {
    dispatch('download')
  }
</script>

<div>
  <Button on:click={shareEvent}>Share</Button>
  <Button on:click={deleteEvent}>Delete</Button>
  <Button on:click={renameEvent}>Rename</Button>
  <Button on:click={moveEvent}>Move</Button>
  <Button on:click={downloadEvent}>Download</Button>
</div>
