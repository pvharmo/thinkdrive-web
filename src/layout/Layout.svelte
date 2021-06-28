<script>
  import Nav from './Nav.svelte'
  import Drawer from 'components/Material/Drawer.svelte'
  import AppBar from 'components/Material/AppBar.svelte'
  import FileListApi from 'src/api/File/FileListApi.svelte'
  import FolderListApi from 'src/api/Folder/FolderListApi.svelte'
  import { location } from 'svelte-spa-router'
</script>

<div class="app-content">
  <AppBar>
    <h1 slot="title">ThinkDrive</h1>
  </AppBar>

  <div class="layout">
    <Drawer>
      <Nav />
    </Drawer>
    <div class="main">
      <div class="folders">
        <h3>Folders</h3>
        <FolderListApi location={$location} />
      </div>
      <div class="files">
        <h3>Files</h3>
        <FileListApi location={$location} />
      </div>
    </div>
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
  .folders,
  .quick-access {
    margin-bottom: 20px;
  }

  .quick-access {
    margin-top: 10px;
  }
</style>
