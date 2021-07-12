<div class="container">
  {#if $$slots['navigation-icon']}
    <div class="navigration-icon">
      <slot name="navigation-icon" />
    </div>
  {/if}
  <slot name="title" />
  <div class="content">
    <slot />
  </div>
  <div class="right-content">
    <slot name="right-content" />
  </div>
</div>

<style>
  .container {
    display: flex;
    width: 100%;
    transition: box-shadow 200ms linear;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 3;
    align-items: center;
  }

  .right-content {
    margin-left: auto;
  }

  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto 20px;
  }
</style>
