<script lang="ts">
  import Nav from './Nav.svelte'
  import Drawer from 'components/Material/Drawer.svelte'
  import AppBar from 'components/Material/AppBar.svelte'

  import MetadataPanel from 'src/api/MetadataPanel.svelte'
  import Main from './Main.svelte'
</script>

<div class="app-content">
  <AppBar>
    <h1 slot="title">ThinkDrive</h1>
  </AppBar>

  <div class="layout">
    <Drawer>
      <Nav />
    </Drawer>
    <div class="main row">
      <Main />
    </div>
    <aside class="metadata-panel">
      <MetadataPanel />
    </aside>
  </div>
</div>

<style>
  .app-content {
    height: 100%;
    --app-bar-height: 64px;
    font-family: var(--typography-font-family, Roboto);
  }
  .layout {
    display: flex;
    height: calc(100% - var(--app-bar-height, 0));
  }
  .main {
    width: 100%;
    padding: 10px 25px;
  }

  .metadata-panel {
    min-width: 300px;
    padding: 20px;
    border-left: 1px rgba(0, 0, 0, 0.1) solid;
  }
</style>
