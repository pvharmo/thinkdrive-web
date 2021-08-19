<script lang="typescript">
  import { location, push } from 'svelte-spa-router'
  import { Icon, Button } from 'minmat'
  import { mdiChevronRight } from '@mdi/js'

  $: folders = $location.split('/').slice(1, -1)

  const go = (i: number) => {
    const path = '/' + folders.slice(0, i).join() + '/'
    push(path)
  }
</script>

<Button on:click={() => push('/')}>ThinkDrive</Button>
{#each folders as folder, i}
  <Icon icon={mdiChevronRight} /><Button on:click={() => go(i + 1)}>{folder}</Button>
{/each}
