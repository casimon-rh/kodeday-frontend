<template>
  <a class="button" v-on:click="$emit('click')">
    {{ text }}
  </a>
</template>
<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="sass" scoped></style>
