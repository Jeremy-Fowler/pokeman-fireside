import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { pokeApi } from "./AxiosService"

export class PokemansService {
  async getWildPokemans() {
    const res = await pokeApi.get('pokemon')
    logger.log(res.data)
    AppState.wildPokemans = res.data.results
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
  }
  async changePage(page) {
    const res = await pokeApi.get(page)
    logger.log(res.data)
    AppState.wildPokemans = res.data.results
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.previous
  }
  async setActivePokemon(name) {
    const res = await pokeApi.get('pokemon/' + name)
    logger.log(res.data)
    AppState.activePokemon = res.data
  }
}

export const pokemansService = new PokemansService()