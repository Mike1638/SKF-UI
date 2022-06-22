<template>
  <Select v-model:options="options" >
  </Select>
</template>

<script lang="ts">
import Select from "../lib/Select.vue";
export default {
  components: { Select },
  setup(){
      const  options =  [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
       return {options} 
  }
};
</script>

<style>
</style>