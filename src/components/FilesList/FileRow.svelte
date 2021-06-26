<script lang="ts">
  import ElementAndText from 'components/Material/ElementAndText.svelte'
  import Icon from 'components/Material/Icon.svelte'
  import Avatar from 'components/Material/Avatar.svelte'
  import TableRow from 'components/Material/Table/TableRow.svelte'
  import TableCell from 'components/Material/Table/TableCell.svelte'
  import { mdiTextBoxOutline, mdiGoogleDrive } from '@mdi/js'
  import type { File } from 'src/api/File/File'

  export let row: File
</script>

<TableRow>
  <TableCell>
    <ElementAndText>
      <Icon slot="element" icon={mdiTextBoxOutline} />
      <span slot="text">{row.name}</span>
    </ElementAndText>
  </TableCell>
  <TableCell width="250px">
    <ElementAndText>
      <Icon slot="element" icon={mdiGoogleDrive} />
      <span slot="text">{row.location}</span>
    </ElementAndText>
  </TableCell>
  <TableCell width="200px">
    <ElementAndText>
      <Avatar slot="element" image={row.ownerAvatar} alt="avatar" />
      <span slot="text">{row.owner}</span>
    </ElementAndText>
  </TableCell>
  <TableCell width="200px">
    <span>{row.lastModified}</span>
  </TableCell>
</TableRow>
