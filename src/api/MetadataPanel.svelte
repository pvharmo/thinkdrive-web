<script>
  import FolderMetadataPanel from 'src/api/Folder/FolderMetadataPanel.svelte'
  import FileMetadataPanel from 'src/api/File/FileMetadataPanel.svelte'
  import { metadata } from 'src/api/store'
</script>

{#if $metadata}
  {#if $metadata.type === 'container'}
    <FolderMetadataPanel />
  {:else}
    <FileMetadataPanel />
  {/if}
{/if}
