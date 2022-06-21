<demo>
禁用状态
</demo>
<template>
  <Button disabled>不可用</Button>
  <Button theme="link" disabled>不可用链接</Button>
  <Button theme="text" disabled>不可用文本</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue"
export default {
  components: { Button },
};
</script>

<style>
</style>