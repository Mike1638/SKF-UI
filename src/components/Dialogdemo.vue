<template>
  <span>Dialog示例</span>
  <Demo :component="Dialog1demo"></Demo>
  <Demo :component="Dialog2demo"></Demo>
</template>

<script lang="ts">
import Dialog1demo from "./Dialogdemo/Dialog1.demo.vue"
import Dialog2demo from "./Dialogdemo/Dialog2.demo.vue"
import Demo from './Demo.vue';
export default {
  components: {Dialog1demo, Demo,Dialog2demo},
  setup() {
    return {Dialog1demo ,Dialog2demo};
  },
};
</script>

<style>
</style>