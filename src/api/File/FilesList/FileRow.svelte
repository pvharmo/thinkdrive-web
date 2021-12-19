<script lang="ts">
  import { TableCell, TableRow, Icon, ElementAndText } from 'minmat'
  import { mdiTextBoxOutline } from '@mdi/js'
  import type { FileData } from 'src/api/File/File'

  export let row: FileData
  export let selected: boolean = false
</script>

<TableRow highlight={selected} interactive on:click on:dblclick>
  <TableCell width="auto">
    <ElementAndText>
      <Icon slot="element" icon={mdiTextBoxOutline} />
      <span slot="text">{row.name}</span>
    </ElementAndText>
  </TableCell>
  <TableCell width="200px">
    <ElementAndText>
      <!-- <Avatar slot="element" image={row.ownerAvatar} alt="avatar" />
      <span slot="text">{row.owner}</span> -->
      <span slot="text">You</span>
    </ElementAndText>
  </TableCell>
  <TableCell width="200px">
    <!-- <span>{row.lastModified}</span> -->
    <span>Yesterday at 9:34</span>
  </TableCell>
</TableRow>
