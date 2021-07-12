<script lang="ts">
  import Nav from './Nav.svelte'
  import Drawer from 'components/Material/Drawer.svelte'
  import AppBar from 'components/Material/AppBar.svelte'
  import FileListApi from 'src/api/File/FileListApi.svelte'
  import FolderListApi from 'src/api/Folder/FolderListApi.svelte'
  import { location } from 'svelte-spa-router'
  import { fetchFilesAndFolders } from 'src/api/actions'
  import MetadataPanel from 'src/api/MetadataPanel.svelte'
  import Breadcrumb from 'src/api/Breadcrumb.svelte'
  import Toolbar from 'src/components/Material/Toolbar.svelte'
  import ObjectActions from 'src/api/ObjectActions.svelte'
  import * as folder from 'src/api/Folder/Folder'
  import * as file from 'src/api/File/File'

  $: fetchFilesAndFolders($location)

  let selectedFolders: folder.Folder[] = []
  let selectedFiles: file.File[] = []

  const select = (type: string, event: CustomEvent) => {
    if (type === 'container') {
      selectedFolders = [event.detail.value]
      selectedFiles = []
    } else {
      selectedFiles = [event.detail.value]
      selectedFolders = []
    }
  }

  const deleteObject = async () => {
    if (selectedFiles.length > 0) {
      await file.destroy(selectedFiles[0].location + selectedFiles[0].name)
      fetchFilesAndFolders($location)
    } else {
      await folder.destroy(selectedFolders[0].location + selectedFolders[0].name + '/')
      fetchFilesAndFolders($location)
    }
  }
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
      <Toolbar>
        <Breadcrumb slot="title" />
        <ObjectActions on:delete={deleteObject} slot="right-content" />
      </Toolbar>
      <div class="folders">
        <h3>Folders</h3>
        <FolderListApi
          on:select={(event) => select('container', event)}
          selected={selectedFolders}
        />
      </div>
      <div class="files">
        <h3>Files</h3>
        <FileListApi on:select={(event) => select('object', event)} selected={selectedFiles} />
      </div>
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

  .folders,
  .quick-access {
    margin-bottom: 20px;
  }

  .quick-access {
    margin-top: 10px;
  }
</style>
