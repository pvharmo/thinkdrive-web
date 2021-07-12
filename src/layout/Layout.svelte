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
  import RenameFolderDialog from 'src/api/Folder/RenameFolderDialog.svelte'
  import RenameFileDialog from 'src/api/File/RenameFileDialog.svelte'
  import * as folder from 'src/api/Folder/Folder'
  import * as file from 'src/api/File/File'
  import MoveFolderDialog from 'src/api/Folder/MoveFolderDialog.svelte'
  import { push } from 'svelte-spa-router'

  $: fetchFilesAndFolders($location)

  let selectedFolders: folder.Folder[] = []
  let selectedFiles: file.File[] = []

  let openDialogRenameFolder = false
  let openDialogRenameFile = false

  let openDialogMoveFolder = false
  let openDialogMoveFile = false

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

  const renameObject = async () => {
    if (selectedFiles.length > 0) {
      openDialogRenameFile = true
    } else {
      openDialogRenameFolder = true
    }
  }

  const moveObject = async () => {
    if (selectedFiles.length > 0) {
      openDialogMoveFile = true
    } else {
      openDialogMoveFolder = true
    }
  }
</script>

<RenameFolderDialog
  open={openDialogRenameFolder}
  currentName={selectedFolders[0]?.name}
  on:close={() => (openDialogRenameFolder = false)}
/>
<RenameFileDialog
  open={openDialogRenameFile}
  currentName={selectedFiles[0]?.name}
  on:close={() => (openDialogRenameFile = false)}
/>

<MoveFolderDialog
  open={openDialogMoveFolder}
  currentName={selectedFolders[0]?.name}
  on:close={() => (openDialogMoveFolder = false)}
/>

<MoveFolderDialog
  open={openDialogMoveFile}
  currentName={selectedFiles[0]?.name}
  on:close={() => (openDialogMoveFile = false)}
/>

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
        <ObjectActions
          on:delete={deleteObject}
          on:rename={renameObject}
          on:move={moveObject}
          slot="right-content"
        />
      </Toolbar>
      <div class="folders">
        <h3>Folders</h3>
        <FolderListApi
          on:select={(event) => select('container', event)}
          on:goto={(event) => push(event.detail.value)}
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
