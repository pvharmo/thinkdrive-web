<script lang="ts">
  import clickOutsideListener from './ClickOutsideListener'

  let isClosing = false
  let open = false

  const closePopover = () => {
    isClosing = true
    setTimeout(() => {
      isClosing = false
      open = false
    }, 200)
  }
</script>

<div class="wrapper" use:clickOutsideListener={{ enabled: open, cb: closePopover }}>
  <div class="activatable" on:click={() => (open = true)}><slot name="activatable" /></div>
  <div class="popover" class:open class:isClosing><slot name="popover" /></div>
</div>

<style>
  .wrapper {
    position: relative;
  }
  .popover {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    z-index: 100;
  }

  .open {
    display: flex;
    animation: fadeIn ease 200ms;
  }
  .isClosing {
    animation: fadeOut ease 200ms;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
