<script lang="ts">
  import { onMount } from 'svelte'
  import * as folder from 'src/api/Folder/Folder'
  import { List, ListItem } from 'minmat'
  import Ripple from 'minmat/utils/Ripple.svelte'
  import { push } from 'svelte-spa-router'

  export let path: string
  export let name: string

  let children: any[] = []

  let expanded = false
  const toggleExpansion = () => {
    expanded = !expanded
  }

  const gotoFolder = () => {
    push(path)
  }

  onMount(async () => {
    const childFolders = await folder.listContent(path)
    children = childFolders.filter((x) => x.type === 'container')
  })
</script>

{#if children.length > 0}
  <!-- <ListItem style="height:36px;" on:click={toggleExpansion}> -->
  <li class="hover">
    <div class="item" on:click={toggleExpansion}>
      <span class="arrow" class:arrowDown={expanded}>&#x25b6</span>
    </div>
    <div class="item" on:click={gotoFolder} style="flex: 1;">
      <Ripple />
      <span>
        {name}
      </span>
    </div>
  </li>
  <!-- </ListItem> -->
  {#if expanded}
    <li style="padding-left:15px;">
      <List style="padding:0; flex:1;">
        {#each children as child}
          <svelte:self name={child.name} path={path + child.name + '/'} />
        {/each}
      </List>
    </li>
  {/if}
{:else}
  <ListItem style="height:30px;" on:click={gotoFolder}>
    <span class="no-arrow" />
    {name}
  </ListItem>
{/if}

<style>
  .no-arrow {
    padding-left: 1rem;
  }
  .arrow {
    cursor: pointer;
    display: inline-block;
    /* transition: transform 200ms; */
  }
  .arrowDown {
    transform: rotate(90deg);
  }

  li {
    display: flex;
    padding-left: calc(var(--mdc-list-side-padding, 16px) - 6px);
    padding-right: var(--mdc-list-side-padding, 16px);
    position: relative;
  }

  .item {
    position: relative;
    cursor: pointer;
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 3px;
    outline: none;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hover:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
</style>
