<script lang="ts">
  import Button from 'components/Material/Button.svelte'
  import Popover from 'components/utils/Popover.svelte'
  import List from 'components/Material/List.svelte'
  import ListItem from 'components/Material/ListItem.svelte'
  import Paper from 'components/Material/Paper.svelte'
  import Icon from 'components/Material/Icon.svelte'
  import ElementAndText from 'components/Material/ElementAndText.svelte'
  import { mdiHistory, mdiStarOutline, mdiTrashCanOutline } from '@mdi/js'
</script>

<div class="new-button">
  <Popover>
    <Button raised slot="activatable">New</Button>
    <Paper elevation={4} slot="popover">
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
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

<style>
  .new-button {
    display: flex;
    padding: 15px 30px;
    margin-top: 10px;
  }
</style>
