<script>
  import ElementAndText from 'components/Material/ElementAndText.svelte'
  import Icon from 'components/Material/Icon.svelte'
  import Avatar from 'components/Material/Avatar.svelte'
  import TableRow from 'components/Material/Table/TableRow.svelte'
  import TableCell from 'components/Material/Table/TableCell.svelte'
  import { mdiTextBoxOutline, mdiGoogleDrive } from '@mdi/js'
</script>

<TableRow>
  <TableCell>
    <ElementAndText>
      <Icon slot="element" icon={mdiTextBoxOutline} />
      <span slot="text">My file</span>
    </ElementAndText>
  </TableCell>
  <TableCell width="250px">
    <ElementAndText>
      <Icon slot="element" icon={mdiGoogleDrive} />
      <span slot="text">Google Drive</span>
    </ElementAndText>
  </TableCell>
  <TableCell width="200px">
    <ElementAndText>
      <Avatar slot="element" image="portrait.jpg" alt="avatar" />
      <span slot="text">Me</span>
    </ElementAndText>
  </TableCell>
  <TableCell width="200px">
    <span>Today</span>
  </TableCell>
</TableRow>
