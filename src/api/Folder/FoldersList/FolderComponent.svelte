<script lang="ts">
  import { Card, Icon, ElementAndText } from 'minmat'
  import { mdiFolder } from '@mdi/js'

  export let selected: boolean
</script>

<Card interactive {selected} on:click on:dblclick>
  <ElementAndText>
    <Icon slot="element" icon={mdiFolder} />
    <h3 slot="text"><slot /></h3>
  </ElementAndText>
</Card>
