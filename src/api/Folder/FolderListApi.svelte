<script lang="ts">
  import { folders } from 'src/api/store'

  import FoldersList from 'src/api/Folder/FoldersList.svelte'
  import type { Folder } from './Folder'

  export let selected: Folder[] = []
</script>

<FoldersList folders={$folders} {selected} on:select on:goto />
