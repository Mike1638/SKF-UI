<demo>
基础用法
</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog  :visible="x"  @update:visible="x = $event" :closeonClickOverlay="false"  :ok="f1" :cancel="f2" >
    <template v-slot:title>
      <strong>Basic Dialog</strong>
    </template>
    <template v-slot:maincontent>
      <p>第一行字第一行字第一行字第一行字第一行字第一行字第一行字第一行字</p>
      <p>第二行字</p>
      <p>第三行字</p>
      <p>第四行字</p>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../../lib/Dialog.vue"
import Button from "../../lib/Button.vue";
import { ref } from "vue";
export default {
  components:{Dialog,Button},
  setup(){
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {
      return true;
    };
    return { x, toggle, f1, f2 };
  }
}
</script>

<style>

</style>