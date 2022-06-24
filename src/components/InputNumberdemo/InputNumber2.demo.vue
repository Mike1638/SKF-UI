<demo>
禁用状态
</demo>
<template>
  <InputNumber v-model:num="num" @change="handleChange" :min="10" :max="20" :disabled="true"></InputNumber>
</template>

<script>
import { ref } from 'vue';
import InputNumber from "../../lib/InputNumber.vue"
export default {
components:{InputNumber},
setup(){
      const num = ref(15);
      const  handleChange  = (value)=>{
        console.log(value.target.value);
      }
      return {num,handleChange}
   }
}
</script>

<style>

</style>