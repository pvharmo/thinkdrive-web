<script lang="ts">
  import Table from 'components/Material/Table/Table.svelte'
  import TableRow from 'components/Material/Table/TableRow.svelte'
  import TableHead from 'components/Material/Table/TableHead.svelte'
  import FileRow from './FileRow.svelte'
  import type { File } from 'src/api/File/File'
  import { createEventDispatcher } from 'svelte'

  export let rows: File[]
  export let selected: File[] = []

  const dispatch = createEventDispatcher()
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
      <FileRow
        {row}
        selected={selected.includes(row)}
        on:click={() => dispatch('select', { value: row })}
      />
    {/each}
  </tbody>
</Table>
