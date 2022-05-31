<template>
  <div>
    <h1>Switch组件示例</h1>
    <Demo :component="Switch1demo"></Demo> 
    <Demo :component="Switch2demo"></Demo> 
  </div>
</template>

<script lang="ts">
import Switch1demo from "./Switchdemo/Switch1.demo.vue"
import Switch2demo from "./Switchdemo/Switch2.demo.vue"
import Demo from "./Demo.vue"
export default {
  components: {Switch1demo,Switch2demo,Demo},
  setup(){
    return { Switch1demo,Switch2demo};
  }
};
</script>
