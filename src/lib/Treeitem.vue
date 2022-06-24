<template>
    <div class="skf-tree-item">
        <div @click.stop="handleClick" :style="{ paddingLeft : indentLeft + 'px' }"   :class="['skf-item-content',{checked:item.checked}]"  >
         <div class="skf-tree-item-right-triangle" v-show="!item.expand  && item.children.length"></div>  
         <div class="skf-tree-item-down-triangle" v-show="item.expand && item.children.length"></div>
         <span>{{item.val}}</span>
        </div>
        <div  v-if="item.expand && item.children.length" class="skf-item-children">
          <TreeItem v-for="child in item.children" :key="child.key" :item="child"></TreeItem>
        </div>
    </div>
</template>

<script lang="ts">
import { computed} from '@vue/runtime-core'
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
 
  },
  setup(props,context){
    let isshow = false
      const handleClick=()=>{
           props.item.checked = !props.item.checked
           if(props.item.disabled){
            return
           }
           props.item.expand = !props.item.expand
           isshow = !isshow
    }
    const  indentLeft = computed(()=>{
        return props.item.indent * 30
    })
    return {handleClick,indentLeft,isshow}
  },
}
</script>

<style lang="scss">
.skf-tree-item{
    height: 100%;
    display: flex;
    flex-direction: column;
   .skf-item-content{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: space-around;
    &.checked{
      background: rgb(64, 158, 255);
      &:hover{
         background: rgb(64, 158, 255);
         cursor: pointer;
     } 
    }
    &:hover{
         background: #f5f7fa;
         cursor: pointer;
     } 
    .skf-tree-item-right-triangle{
     margin:0 0 0px 10px; 
     width: 0;
     height: 0;
     border:4px solid; 
     border-color:  transparent  transparent  transparent #c0c4cc;
     }
    .skf-tree-item-down-triangle{
     margin:4px 5px 0px 10px; 
     width: 0;
     height: 0;
     border:4px solid; 
     border-color:#c0c4cc  transparent  transparent  transparent;
     }
   } 
}
</style>