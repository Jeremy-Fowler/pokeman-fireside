<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 mb-2">
        <h2
          v-for="p in wildPokemans"
          :key="p.name"
          @click="setActivePokemon(p.name)"
        >
          <i class="mdi text-danger mdi-pokeball"></i>
          {{ p.name }}
        </h2>
        <button
          @click="changePage(previousPage)"
          class="btn btn-outline-danger me-2"
          :class="{ disabled: !previousPage }"
          :disabled="!previousPage"
        >
          Previous
        </button>
        <button
          v-if="nextPage"
          @click="changePage(nextPage)"
          class="btn btn-outline-danger"
        >
          Next
        </button>
      </div>
      <div class="col-md-8">
        <ActivePokemon v-if="activePokemon.name" :pokemon="activePokemon" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
import { pokemansService } from '../services/PokemansService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
export default {
  setup() {
    onMounted(async () => {
      try {
        await pokemansService.getWildPokemans()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      wildPokemans: computed(() => AppState.wildPokemans),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),
      activePokemon: computed(() => AppState.activePokemon),
      async changePage(page) {
        try {
          await pokemansService.changePage(page)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async setActivePokemon(name) {
        try {
          await pokemansService.setActivePokemon(name)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>