<template>
  <article class="pet">
    <div class="pet-container">
      <div class="pet-image">
        <figure class="image">
          <img v-bind:src="image" />
        </figure>
      </div>
      <div class="pet-detail">
        <h6 class="pet-name">
          {{title}}
        </h6>
        <pre class="pet-description">{{description}}</pre>
      </div>
    </div>
    <footer class="pet-options">
      <Button text="Adoptar" class="green" v-on:click="adopt" />
      <Button text="Matar" class="red" v-on:click="kill" />
    </footer>
  </article>
</template>
// eslint-disable-next-line
<script>
import Button from './Button.vue'
import {adopt, kill} from '../services/dog'
export default {
  name: 'card',
  props: {
    id: {
      type: Number,
      default: null
    },
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  components: {Button},
  methods: {
    async adopt() {
      const data = (await adopt(this.id)).data
      alert('Adoptado!')
      this.$emit('adoptado')
    },
    async kill() {
      const data = (await kill(this.id)).data
      alert('Muerto!')
      this.$emit('muerto')
    }
  }
}
</script>
<style lang="sass" scoped></style>
