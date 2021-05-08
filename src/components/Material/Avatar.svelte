<script lang="ts">
  export let image = ''
  export let alt = 'An avatar picture'
</script>

<img src={image} {alt} />

<style>
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
</style>
