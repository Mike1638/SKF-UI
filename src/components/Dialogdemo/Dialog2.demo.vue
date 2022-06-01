<demo>
示例2
</demo>
<template>
  <Button @click="showDialog">toggle</Button>
  <Dialog>
     <template v-slot:title>
      <strong>Basic Dialog</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../../lib/Dialog.vue"
import Button from "../../lib/Button.vue";
import { openDialog } from "../../lib/openDialog";
export default {
  components:{Dialog,Button},
  setup(){
   const showDialog = () => {
      openDialog({
        title:'函数式调用',
        maincontent: "函数式调用",
        ok() {
          return true;
        },
        cancel() {
          return true;
        },
      });
    };
    return { showDialog };
  }
}
</script>

<style>

</style>