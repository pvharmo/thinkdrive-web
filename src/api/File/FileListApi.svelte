<script lang="ts">
  import FileList from 'src/components/FilesList/FilesList.svelte'
  import { files } from 'src/api/store'
</script>

<FileList rows={$files} />
