<template>
  <div class="skf-tree">
       <TreeItem v-for="child in innerOptions" :key="child.key" :item="child" :checkbox="checkbox"></TreeItem>
  </div>
</template>

<script lang="ts">
import TreeItem from "./Treeitem.vue"
export default {
  name:'Tree',
  components:{TreeItem},
  props:{
    options:{
    type:Array,
    default:()=>[]
    } ,
    checkbox:{
    type:Boolean,
    default:false
    } ,
  },
  setup(props,context){
    let innerOptions =[];
    let  handleOPtions = (item,indent = 0 )=>{
            return {
                ...item,
                indent:indent,
                expand:true,
                checked:false,
                disables:false,
                children:(item.children || []).map(item => handleOPtions(item,indent + 1))
            }
        }
    innerOptions =  props.options.map(item => handleOPtions(item))
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