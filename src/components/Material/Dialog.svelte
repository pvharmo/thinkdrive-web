<script lang="ts">
  import clickOutsideListener from 'src/components/utils/ClickOutsideListener'
  import { createEventDispatcher } from 'svelte'
  import { fade } from 'svelte/transition'

  const dispatch = createEventDispatcher()
  export let open = false

  let internalOpen = false

  const close = () => {
    dispatch('close')
  }

  const setOpen = (open: boolean) => {
    setTimeout(() => {
      internalOpen = open
    }, 20)
  }

  $: setOpen(open)
</script>

{#if open}
  <div class="background" transition:fade={{ duration: 80 }}>
    <div class="dialog" use:clickOutsideListener={{ enabled: internalOpen, cb: close }}>
      <slot />
    </div>
  </div>
{/if}

<style>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    display: flex;
    z-index: 100;
  }
</style>
