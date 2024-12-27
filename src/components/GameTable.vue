<template>
  <h2>Lista de Juegos</h2>
  <table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <GameRow
        v-for="game in games"
        :key="game.code"
        :game="game"
        @increaseStock="increaseStock"
        @decreaseStock="decreaseStock"
      />
    </tbody>
  </table>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import GameRow from './GameRow.vue'

export default {
  components: { GameRow },
  setup() {
    const store = useStore()

    const games = computed(() => store.state.games)

    const increaseStock = (code) => {
      store.dispatch('increaseStock', code)
    }

    const decreaseStock = (code) => {
      store.dispatch('decreaseStock', code)
    }

    return {
      games,
      increaseStock,
      decreaseStock,
    }
  },
}
//segun lo conversado en este codigo, por estar con Vue3 no utilizo mapState y mapActions ... se usan otros equivalentes... que serian useStore(), computed, y store.dispatch
</script>

<style scoped>
h2 {
  text-align: center;
  color: darkslategray;
}
</style>
