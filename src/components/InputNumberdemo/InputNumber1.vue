<demo>
基础用法
</demo>
<template>
  <InputNumber v-model:num="num" @change="handleChange" :min="1" :max="10" :disabled="false" ></InputNumber>
</template>

<script>
import { ref } from 'vue';
import InputNumber from "../../lib/InputNumber.vue"
export default {
components:{InputNumber},
setup(){
      const num = ref(5);
      const  handleChange  = (value)=>{
        console.log(value.target.value);
      }
      return {num,handleChange}
   }
}
</script>

<style>

</style>