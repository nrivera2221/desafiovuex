import { createStore } from 'vuex'
import gamesData from '../assets/juegos.json'

//segun lo conversado en este codigo, por estar con Vue3 no utilizo mapState y mapActions ... se usan otros equivalentes... que serian useStore(), computed, y store.dispatch
const store = createStore({
  state: {
    games: gamesData,
  },
  mutations: {
    increaseStock(state, code) {
      const game = state.games.find(game => game.codigo === code)
      if (game) game.stock = parseInt(game.stock) + 1
    },
    decreaseStock(state, code) {
      const game = state.games.find(game => game.codigo === code)
      if (game && game.stock > 0) game.stock = parseInt(game.stock) - 1
    },
  },
  actions: {
    increaseStock({ commit }, code) {
      commit('increaseStock', code)
    },
    decreaseStock({ commit }, code) {
      commit('decreaseStock', code)
    },
  },
  getters: {
    allGames: state => state.games,
  },
})

export default store
