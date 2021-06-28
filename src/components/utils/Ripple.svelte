<script lang="ts">
  let rippleContainer: HTMLElement

  const mouseup = (event: MouseEvent) => {
    const size = rippleContainer.offsetWidth
    const pos = rippleContainer.getBoundingClientRect()
    const x = event.pageX - pos.left - size / 2
    const y = event.pageY - pos.top - size / 2
    const ripple = document.createElement('span')

    ripple.style.top = y + 'px'
    ripple.style.left = x + 'px'
    ripple.style.height = size + 'px'
    ripple.style.width = size + 'px'
    ripple.style.transform = 'scale(0.8)'
    ripple.style.borderRadius = '100%'
    ripple.style.position = 'absolute'
    ripple.style.backgroundColor = '#000'
    ripple.style.animation = 'material-ripple 700ms, material-fadeIn 700ms'

    rippleContainer.appendChild(ripple)

    setTimeout(() => {
      try {
        rippleContainer.removeChild(ripple)
      } catch {}
    }, 700)
  }
</script>

<div class="ripple-container" on:mouseup={mouseup} bind:this={rippleContainer} />

<style>
  .ripple-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }

  @keyframes -global-material-ripple {
    to {
      transform: scale(2);
    }
  }

  @keyframes -global-material-fadeIn {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }
</style>
