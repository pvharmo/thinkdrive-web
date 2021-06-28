<script lang="ts">
  import * as file from './File'

  import FileList from 'src/components/FilesList/FilesList.svelte'

  export let location: string
  let rows: file.File[] = []

  const setFileList = async (location: string) => {
    rows = await file.list(location)
    rows = rows.filter((x) => x.type === 'object')
  }

  $: setFileList(location)
</script>

<FileList {rows} />
