<script lang="ts">
  import Breadcrumb from 'src/api/Breadcrumb.svelte'
  import { Toolbar } from 'minmat'
  import ObjectActions from 'src/api/ObjectActions.svelte'
  import { fetchFilesAndFolders } from 'src/api/actions'
  import * as folder from 'src/api/Folder/Folder'
  import * as file from 'src/api/File/File'
  import RenameDialog from 'src/api/Dialogs/RenameDialog.svelte'
  import MoveDialog from 'src/api/Dialogs/MoveDialog.svelte'
  import FileList from 'src/api/File/FilesList/FilesList.svelte'
  import { files, folders } from 'src/api/store'
  import FoldersList from 'src/api/Folder/FoldersList/FoldersList.svelte'
  import ShareDialog from 'src/api/Dialogs/ShareDialog.svelte'
  import { directory } from '../stores/filesystem'

  $: fetchFilesAndFolders($directory.format())

  let selectedFolders: folder.Folder[] = []
  let selectedFiles: file.FileData[] = []

  let openDialogRename = false
  let openDialogMove = false
  let openDialogShare = false

  const downloadObject = () => {
    file.download(selectedFiles[0].location + selectedFiles[0].name)
  }

  const select = (type: string, event: CustomEvent) => {
    if (type === 'container') {
      selectedFolders = [event.detail.value]
      selectedFiles = []
    } else {
      selectedFiles = [event.detail.value]
      selectedFolders = []
    }
  }

  const gotoObject = (event: CustomEvent) => {
    file.download(event.detail.value)
  }

  const deleteObject = async () => {
    if (selectedFiles.length > 0) {
      if (confirm(`Are you sure you want to delete this ${selectedFiles[0].name}?`)) {
        await file.toTrash(selectedFiles[0].location + selectedFiles[0].name)
        fetchFilesAndFolders($directory.format())
      }
    } else {
      if (confirm(`Are you sure you want to delete ${selectedFolders[0].name}?`)) {
        await folder.toTrash(selectedFolders[0].location + selectedFolders[0].name + '/')
        fetchFilesAndFolders($directory.format())
      }
    }
  }

  const moveObject = async () => {
    openDialogMove = true
  }
</script>

<RenameDialog
  open={openDialogRename}
  isFile={selectedFiles.length > 0}
  currentName={selectedFolders.length > 0 ? selectedFolders[0]?.name : selectedFiles[0]?.name}
  on:close={() => (openDialogRename = false)}
/>

<MoveDialog
  open={openDialogMove}
  isFile={selectedFiles.length > 0}
  currentName={selectedFolders.length > 0 ? selectedFolders[0]?.name : selectedFiles[0]?.name}
  on:close={() => (openDialogMove = false)}
/>

<ShareDialog
  open={openDialogShare}
  object={selectedFolders.length > 0 ? selectedFolders[0] : selectedFiles[0]}
  on:close={() => (openDialogShare = false)}
/>

<Toolbar>
  <Breadcrumb slot="title" />
  <ObjectActions
    on:download={downloadObject}
    on:delete={deleteObject}
    on:move={moveObject}
    on:share={() => {
      openDialogShare = true
    }}
    on:rename={() => {
      openDialogRename = true
    }}
    slot="right-content"
  />
</Toolbar>
<div class="folders">
  <h3>Folders</h3>
  <FoldersList
    folders={$folders}
    selected={selectedFolders}
    on:select={(event) => select('container', event)}
    on:goto={(event) => directory.set(event.detail.value)}
  />
</div>
<div class="files">
  <h3>Files</h3>
  <FileList rows={$files} on:select={(event) => select('object', event)} on:goto={(event) => gotoObject(event)} selected={selectedFiles} />
</div>

<style>
  .folders {
    margin-bottom: 20px;
  }
</style>
