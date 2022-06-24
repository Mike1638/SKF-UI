<template>
  <div class="skf-tree">
       <TreeItem v-for="child in innerOptions" :key="child.key"  :item="child"></TreeItem>
  </div>
</template>

<script lang="ts">
import TreeItem from "./Treeitem.vue"
import {ref } from 'vue';
export default {
  name:'Tree',
  components:{TreeItem},
  props:{
    options:{
    type:Array,
    default:()=>[]
    } ,
    expand:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context){
    let innerOptions =ref([]);
    let  handleOPtions = (item,indent = 0 )=>{
            return {
                ...item,
                indent:indent,
                expand:props.expand,
                checked:false,
                disables:true,
                children:(item.children || []).map(item => handleOPtions(item,indent + 1))
            }
        }
    innerOptions.value =  props.options.map(item => handleOPtions(item))
    return {TreeItem,innerOptions}
  },
}
</script>

<style lang="scss">
  .skf-tree{
    display: flex;
    flex-direction: column;
  }
</style>