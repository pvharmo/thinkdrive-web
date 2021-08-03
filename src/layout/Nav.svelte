<script lang="ts">
  import Button from 'components/Material/Button.svelte'
  import Popover from 'components/utils/Popover.svelte'
  import List from 'components/Material/List.svelte'
  import ListItem from 'components/Material/ListItem.svelte'
  import Paper from 'components/Material/Paper.svelte'
  import Icon from 'components/Material/Icon.svelte'
  import ElementAndText from 'components/Material/ElementAndText.svelte'
  import NewDialog from 'src/api/Dialogs/NewDialog.svelte'
  import { mdiHistory, mdiStarOutline, mdiTrashCanOutline } from '@mdi/js'
  import UploadDialog from 'src/api/Dialogs/UploadDialog.svelte'

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
        <ListItem>Item 3</ListItem>
      </List>
    </Paper>
  </Popover>
</div>
<List>
  <ListItem>
    <ElementAndText>
      <Icon slot="element" icon={mdiHistory} />
      <span slot="text">Recent</span>
    </ElementAndText>
  </ListItem>
  <ListItem>
    <ElementAndText>
      <Icon slot="element" icon={mdiStarOutline} />
      <span slot="text">Following</span>
    </ElementAndText>
  </ListItem>
  <ListItem>
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
