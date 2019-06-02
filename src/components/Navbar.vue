<template>
  <nav class="navbar">
    <span class="navbar-item">
      <img src="https://cdn.worldvectorlogo.com/logos/pug.svg" class="navbar-logo" />
      <h1 class="navbar-brand">Mea Doptas?</h1>
    </span>
    <span class="navbar-item">
      <Button text="Inicia sesión" class="loggin"/>
      <Button text="Registrar" class="register"/>
    </span>
  </nav>
</template>
<script>
import Button from './Button.vue'

export default {
  name: 'navbar',
  components: {Button}
}
</script>
<style lang="sass" scoped>

</style>
