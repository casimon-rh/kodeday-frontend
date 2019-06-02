<template>
  <div id="app">
    <header class="header">
      <Navbar />
    </header>
    <section class="pets">
      <template v-for="dog in dogs">
        <Card          
          v-bind:title="dog.name"
          v-bind:key="dog.id"
          v-bind:description="describeDog(dog)"
          v-bind:image="imgDog(dog.id)"
          v-bind:id="dog.id"
          v-on:adoptado="fetchData"
          v-on:muerto="fetchData"
        />
      </template>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Card from './components/Card.vue'
import { getAll } from './services/dog'

export default {
  name: 'app',
  components: {Navbar, Card},
  async beforeMount(){
    await this.fetchData()
  },
  data() {
    return {
      dogs: []
    }
  },
  methods:{
    async fetchData() {
      const response = await getAll()
      if (response.status === 200){
        this.updateDogs(response.data.dogs)
      }
    },
    updateDogs(newDogs) {
      this.dogs = [...newDogs]
    },
    describeDog(dog) {
      return 'Age: ' + dog.age + '\nGender: ' + dog.gender + '\nBreed: '+
      dog.breed + '\nAdoptado: ' + (dog.isAdopted ? 'si' : 'no')
    },
    imgDog(id) {
      return id < 4
      ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhK2k9MZuYmvhCNWjPJJqJc7b8M4i5gNxiyAAQuPqWbThRXiH-'
      : 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'
    }
  }
}
</script>

<style lang="sass" src="./assets/index.sass"></style>
<style lang="sass" scoped>
#app
  height: 100%
  width: 100%
  flex-direction: column
</style>
