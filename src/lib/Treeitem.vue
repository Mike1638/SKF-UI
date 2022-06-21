<template>
    <div class="skf-tree-item">
        <div @click.stop="handleClick" :style="{ paddingLeft : indentLeft + 'px' }"   :class="[{checked:item.checked},'skf-item-content']"  >
        <span>{{item.val}}||{{item.expand}}||{{item.children.length}}||{{item.expand && item.children.length}}</span>
        </div>
        <div  v-if="item.expand && item.children.length" class="skf-item-children">
        {{item.expand}}
          <TreeItem v-for="child in item.children" :key="child.key" :item="child" :checkbox="checkbox"></TreeItem>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, watch } from '@vue/runtime-core'
export default {
  name:'TreeItem',
  props:{
    item:{
        type:Object,
        default:()=>({
            key:'',
            val:'',
            indent:0,
            expand:false,
            checked:false,
            disabled:false,
            children:[]
        })    
    },
    checkbox:{
        type:Boolean,
        default:false
    }
  },
  setup(props,context){
    const handleClick=()=>{
           console.log(props.item);
           if(props.item.disabled){
            return
           }
           if(!props.item.children.length && props.checkbox){
              props.item.checked  = !props.item.checked
           }
           props.item.expand = !props.item.expand
           console.log('xxx')
            console.log(props.item);
           console.log(props.item.expand && props.item.children.length)
    }
    const  indentLeft = computed(()=>{
        return props.item.indent * 30
    })
    // const zhankai = computed(()=>{
    //     console.log('xxxx')
    //     return props.item.expand && props.item.children.length
    // })
    // watch(()=>props.item.expand,()=>{
    //     return props.item.expand && props.item.children.length
    // },{ deep: true , immediate: true })
    return {handleClick,indentLeft}
  },
}
</script>

<style lang="scss">
.skf-tree-item{
    height: 100%;
    display: flex;
    flex-direction: column;
   
   
}
</style>