<template>
 <span>InputNumber 示例</span>
 <Demo :component="InputNumber1"></Demo> 
 <Demo :component="InputNumber2"></Demo> 
 <Demo :component="InputNumber3"></Demo> 
</template>

<script lang="ts">
import Demo from "../components/Demo.vue"
import InputNumber1 from "./InputNumberdemo/InputNumber1.demo.vue"
import InputNumber2 from "./InputNumberdemo/InputNumber2.demo.vue"
import InputNumber3 from "./InputNumberdemo/InputNumber3.demo.vue"
export default {
   components:{Demo,InputNumber1,InputNumber2,InputNumber3},
   setup(){
      return {Demo,InputNumber1,InputNumber2,InputNumber3}
   }
}
</script>

<style>

</style>