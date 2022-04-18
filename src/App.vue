<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Frank/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Frank from  './components/frank.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Frank
  }
}
</script>
