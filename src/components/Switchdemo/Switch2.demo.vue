<demo>
禁用状态
</demo>
<template>
    <Switch v-model:value="boolean" disabled/>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../../lib/Switch.vue";
export default {
  components: { Switch},
  setup() {
    const boolean = ref(false);
    return {boolean}
  },
};
</script>
