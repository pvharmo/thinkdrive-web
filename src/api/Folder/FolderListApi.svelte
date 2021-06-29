<script lang="ts">
  import { folders } from 'src/api/store'

  import FoldersList from 'src/components/FoldersList/FoldersList.svelte'
</script>

<FoldersList folders={$folders} />
