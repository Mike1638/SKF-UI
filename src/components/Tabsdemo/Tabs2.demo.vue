<demo>
示例1
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="菠萝">菠萝</Tab>
    <Tab title="芒果" disabled>芒果</Tab>
    <Tab title="哈密瓜">哈密瓜</Tab>
    <Tab title="苹果">苹果</Tab>
    <Tab title="猕猴桃" disabled>猕猴桃</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tab, Tabs },
  setup() {
    const x = ref("菠萝");
    return { x };
  },
};
</script>

<style>
</style>