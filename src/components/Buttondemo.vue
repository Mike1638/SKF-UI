<template>
  <div>
    <span>Button 示例</span>
    <Demo :component="Button1demo"></Demo> 
    <Demo :component="Button2demo"></Demo> 
    <Demo :component="Button3demo"></Demo> 
    <Demo :component="Button4demo"></Demo> 
    <Demo :component="Button5demo"></Demo> 
    
    
   
   
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Demo from "../components/Demo.vue"
import Button1demo from "../components/Button1.demo.vue"
import Button2demo from "../components/Button2.demo.vue"
import Button3demo from "../components/Button3.demo.vue"
import Button4demo from "../components/Button4.demo.vue"
import Button5demo from "../components/Button5.demo.vue"
export default {
  components: { Button ,Demo,Button1demo,Button2demo,Button3demo,Button4demo,Button5demo},
  setup(){
     return{
     Button1demo,Button2demo,Button3demo,Button4demo,Button5demo
     } 
  }
};
</script>

<style>
</style>