<demo>
示例1
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="火龙果">火龙果</Tab>
    <Tab title="西瓜">西瓜</Tab>
    <Tab title="梨">梨</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tab, Tabs },
  setup() {
    const x = ref("火龙果");
    return { x };
  },
};
</script>

<style>
</style>