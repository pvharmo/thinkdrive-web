<script lang="ts">
  export let icon: string
  export let size: number = 24
  export let color: string = '#555'
  export let style: string = ''
</script>

<svg style="width:{size}px;height:{size}px;{style}">
  <path fill={color} d={icon} />
</svg>
