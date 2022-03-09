<template>
  <img
    class="img-fluid"
    :src="pokemon.sprites.other.dream_world.front_default"
    alt=""
  />
  <h1>{{ pokemon.name }}</h1>
</template>


<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>