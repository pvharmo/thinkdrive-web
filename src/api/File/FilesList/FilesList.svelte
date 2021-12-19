<script lang="ts">
  import { Table, TableRow, TableHead } from 'minmat'
  import FileRow from './FileRow.svelte'
  import type { FileData } from 'src/api/File/File'
  import { createEventDispatcher } from 'svelte'

  export let rows: FileData[]
  export let selected: FileData[] = []

  const dispatch = createEventDispatcher()
</script>

{#if rows.length > 0}
  <Table>
    <thead>
      <TableRow>
        <TableHead>
          <h3>Nom</h3>
        </TableHead>
        <TableHead>
          <h3>Propriétaire</h3>
        </TableHead>
        <TableHead>
          <h3>Dernière modification</h3>
        </TableHead>
      </TableRow>
    </thead>
    <tbody>
      {#each rows as row}
        {#if row.name[0] !== '.'}
          <FileRow
            {row}
            selected={selected.includes(row)}
            on:click={() => dispatch('select', { value: row })}
            on:dblclick={() => dispatch('goto', { value: row.contentUrl })}
          />
        {/if}
      {/each}
    </tbody>
  </Table>
{:else}
  <div class="empty-list">
    <h2 class="empty-list">Aucun fichier</h2>
  </div>
{/if}

<style>
  div.empty-list {
    margin-left: 10px;
  }

  h2.empty-list {
    color: rgba(0, 0, 0, 0.2);
  }
</style>
