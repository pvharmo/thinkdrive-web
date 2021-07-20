<script>
  import { createEvent } from '@testing-library/dom'

  import Button from 'src/components/Material/Button.svelte'
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
</script>

<div>
  <Button on:click={shareEvent}>Share</Button>
  <Button on:click={deleteEvent}>Delete</Button>
  <Button on:click={renameEvent}>Rename</Button>
  <Button on:click={moveEvent}>Move</Button>
</div>
