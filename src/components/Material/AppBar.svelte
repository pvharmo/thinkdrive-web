<header>
  {#if $$slots['navigation-icon']}
    <div class="navigration-icon">
      <slot name="navigation-icon" />
    </div>
  {/if}
  <div class="title">
    <slot name="title" />
  </div>
  <div class="content">
    <slot />
  </div>
  <div class="right-content">
    <slot name="right-content" />
  </div>
</header>

<style>
  header {
    display: flex;
    width: var(--app-bar-width, 100%);
    transition: box-shadow 200ms linear;
    background-color: var(--primary-color, #6200ee);
    color: var(--primary-text-color, #fff);
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 4;
    height: var(--app-bar-height, 64px);
    align-items: center;
  }

  .title {
    margin-left: 20px;
  }

  .right-content {
    margin-left: auto;
    margin-right: 25px;
  }

  .navigration-icon {
    margin-left: 25px;
  }

  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto 20px;
  }
</style>
