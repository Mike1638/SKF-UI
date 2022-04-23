<template>
<span>Dialog示例</span>
<h1>示例1</h1>
<Button @click="toggle">toggle</Button> 
<Dialog :visible="x" @update:visible="x = $event"  :closeonClickOverlay="false"></Dialog>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue"
import { ref } from "vue";
export default {
  components:{Dialog,Button},
  setup(){
       const x= ref(false)
       const toggle = ()=>{
         x.value = !x.value
       }
         return{x,toggle}
  }
};
</script>

<style>
</style>