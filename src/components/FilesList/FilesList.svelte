<script>
  import ElementAndText from 'components/Material/ElementAndText.svelte'
  import Icon from 'components/Material/Icon.svelte'
  import Avatar from 'components/Material/Avatar.svelte'
  import Table from 'components/Material/Table/Table.svelte'
  import TableRow from 'components/Material/Table/TableRow.svelte'
  import TableCell from 'components/Material/Table/TableCell.svelte'
  import TableHead from 'components/Material/Table/TableHead.svelte'
  import { mdiTextBoxOutline, mdiGoogleDrive } from '@mdi/js'
  import FileRow from './FileRow.svelte'
</script>

<Table>
  <thead>
    <TableRow>
      <TableHead>
        <h3>Name</h3>
      </TableHead>
      <TableHead>
        <h3>Location</h3>
      </TableHead>
      <TableHead>
        <h3>Owner</h3>
      </TableHead>
      <TableHead>
        <h3>Last modified</h3>
      </TableHead>
    </TableRow>
  </thead>
  <tbody>
    <FileRow />
  </tbody>
</Table>
