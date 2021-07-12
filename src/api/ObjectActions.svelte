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
</script>

<div>
  <Button on:click={deleteEvent}>Delete</Button>
  <Button on:click={renameEvent}>Rename</Button>
</div>
