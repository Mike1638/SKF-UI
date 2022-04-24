<template>
  <div>
    <div v-for="(t, index) in title" :key="index">{{ t }}</div>
    <div>
    <component v-for="(c, index) in defaults" :key="index" :is="c"></component>
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error("组件类型错误！");
      }
    });
    const title = defaults.map((item) => {
      return item.props.title;
    });
    return { defaults, title };
  },
};
</script>