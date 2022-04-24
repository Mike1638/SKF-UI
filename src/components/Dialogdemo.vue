<template>
  <span>Dialog示例</span>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog
    :visible="x"
    @update:visible="x = $event"
    :closeonClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
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
  <h1>示例2</h1>
  <Button @click="showDialog">toggle</Button>
  <Dialog>
    <template v-slot:title>
      <strong>Basic Dialog</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { ref } from "vue";
import { title } from "process";
export default {
  components: { Dialog, Button },
  setup() {
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
    const showDialog = () => {
      openDialog({
        title:'title',
        maincontent: "content",
        ok() {
          return true;
        },
        cancel() {
          return true;
        },
      });
    };
    return { x, toggle, f1, f2, showDialog };
  },
};
</script>

<style>
</style>