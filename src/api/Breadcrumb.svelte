<script lang="ts">
  import { directory, Path } from '../stores/filesystem'
  import { Icon, Button } from 'minmat'
  import { mdiChevronRight } from '@mdi/js'

  $: folders = $directory.toArray().slice(2, -1)

  const go = (i: number) => {
    const path = '/123456/' + folders.slice(0, i).join('/') + '/'
    directory.set(new Path(path))
  }
</script>

<Button on:click={() => directory.set(new Path('/123456/'))}>ThinkDrive</Button>
{#each folders as folder, i}
  <Icon icon={mdiChevronRight} /><Button on:click={() => go(i + 1)}>{folder}</Button>
{/each}
