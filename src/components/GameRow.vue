<template>
  <tr>
    <td>{{ game.codigo }}</td>
    <td>{{ game.nombre }}</td>
    <td>{{ game.stock }}</td>
    <td>{{ formattedPrice }}</td>
    <td>
      <button @click="$emit('increaseStock', game.codigo)">+</button>
      <button @click="$emit('decreaseStock', game.codigo)">-</button>
    </td>
  </tr>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const formattedPrice = computed(() => {
      return `$${parseInt(props.game.precio).toLocaleString()}`
    })

    return {
      formattedPrice,
    }
  },
}
</script>
