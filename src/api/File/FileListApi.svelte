<script lang="ts">
  import FileList from 'src/api/File/FilesList/FilesList.svelte'
  import { files } from 'src/api/store'
  import type { File } from 'src/api/File/File'

  export let selected: File[] = []
</script>

<FileList rows={$files} on:select {selected} />
