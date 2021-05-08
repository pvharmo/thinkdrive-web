<aside class="drawer">
  <div class="drawer-content">
    <slot />
  </div>
</aside>

<style>
  .drawer-content {
    height: 100%;
    overflow-y: auto;
  }
  .drawer {
    width: var(--drawer-width, 256px);
    border-color: rgba(0, 0, 0, 0.12);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: var(--shape-large, 0);
    border-bottom-right-radius: var(--shape-large, 0);
    z-index: 6;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    box-sizing: border-box;
    height: 100%;
    border-right-width: 1px;
    border-right-style: solid;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: hidden;
  }
</style>
