<script lang="ts">
  import Card from 'components/Material/Card.svelte'
  import Icon from 'components/Material/Icon.svelte'
  import ElementAndText from 'components/Material/ElementAndText.svelte'
  import { mdiFolder } from '@mdi/js'
  import { push } from 'svelte-spa-router'

  export let link: string
</script>

<Card interactive on:click={() => push(link)}>
  <ElementAndText>
    <Icon slot="element" icon={mdiFolder} />
    <h3 slot="text"><slot /></h3>
  </ElementAndText>
</Card>
