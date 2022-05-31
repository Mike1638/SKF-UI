<template>
  <div>Tabs 示例</div>
  <Demo :component="Tabs1demo"></Demo>
  <Demo :component="Tabs2demo"></Demo>
</template>

<script lang="ts">
import Tabs1demo from "./Tabsdemo/Tabs1.demo.vue";
import Tabs2demo from "./Tabsdemo/Tabs2.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: { Tabs1demo, Demo, Tabs2demo },
  setup() {
    return { Tabs1demo, Tabs2demo };
  },
};
</script>

<style>
</style>