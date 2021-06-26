<script lang="ts">
  import { onMount } from 'svelte'
  import * as file from './File'

  import FileList from 'src/components/FilesList/FilesList.svelte'

  export let location: string
  let rows: file.File[] = []

  onMount(async () => {
    rows = await file.list(location)
  })
</script>

<FileList {rows} />
