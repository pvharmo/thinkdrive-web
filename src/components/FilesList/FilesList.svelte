<script lang="ts">
  import Table from 'components/Material/Table/Table.svelte'
  import TableRow from 'components/Material/Table/TableRow.svelte'
  import TableHead from 'components/Material/Table/TableHead.svelte'
  import FileRow from './FileRow.svelte'
  import type { File } from 'src/api/File/File'

  export let rows: File[]
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
    {#each rows as row}
      <FileRow {row} />
    {/each}
  </tbody>
</Table>
