<template>
  <div>Tabs 示例</div>
  <h1>示例1</h1>
  <Tabs v-model:selected="x">
    <Tab title="火龙果">火龙果</Tab>
    <Tab title="西瓜">西瓜</Tab>
    <Tab title="梨">梨</Tab>
  </Tabs>
  <h1>示例2</h1>
  <Tabs v-model:selected="y">
    <Tab title="菠萝" >菠萝</Tab>
    <Tab title="芒果" disabled>芒果</Tab>
    <Tab title="哈密瓜" >哈密瓜</Tab>
    <Tab title="苹果" >苹果</Tab>
    <Tab title="猕猴桃" disabled>猕猴桃</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from 'vue';
export default {
  components: { Tabs, Tab },
  setup(){
    const x = ref('火龙果')
    const y = ref('菠萝')
    return {x,y}
  }
};
</script>

<style>
</style>