<demo>
基本使用
</demo>
<template>
    <Switch v-model:value="boolean" />
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: { Switch},
  setup() {
    const boolean = ref(false);
    return {boolean}
  },
};
</script>
