<script lang="ts">
  import { Button, List, ListItem, Paper, Icon, ElementAndText } from 'minmat'
  import Popover from 'minmat/utils/Popover.svelte'
  import NewDialog from 'src/api/Dialogs/NewDialog.svelte'
  import { mdiTrashCanOutline } from '@mdi/js'
  import UploadDialog from 'src/api/Dialogs/UploadDialog.svelte'
  import { push } from 'svelte-spa-router'
  import FolderTree from 'src/components/TreeView.svelte'

  let openDialogUpload = false

  let open = false
  let newObject = {
    type: 'folder'
  }

  const createObject = (objectDescription: any) => {
    open = true
    newObject = objectDescription
  }
</script>

<div class="new-button">
  <Popover>
    <Button raised slot="activatable">New</Button>
    <Paper elevation={4} slot="popover">
      <List>
        <ListItem on:click={() => createObject({ type: 'folder' })}>Create folder</ListItem>
        <ListItem on:click={() => (openDialogUpload = true)}>Upload</ListItem>
      </List>
    </Paper>
  </Popover>
</div>
<List>
  <FolderTree path="/" name="/" />
  <ListItem on:click={() => push('/.trash/')}>
    <ElementAndText>
      <Icon slot="element" icon={mdiTrashCanOutline} />
      <span slot="text">Trash</span>
    </ElementAndText>
  </ListItem>
</List>

<NewDialog {open} obj={newObject} on:close={() => (open = false)} />
<UploadDialog open={openDialogUpload} on:close={() => (openDialogUpload = false)} />

<style>
  .new-button {
    display: flex;
    padding: 15px 30px;
    margin-top: 10px;
  }
</style>
