<template>
  <span class="skf-breadercrub-item">
    <span :class="['skf-breadercrub-item-content',{'is-link':to.path}]" @click="handleitem">
        <slot></slot>
    </span>
    <span class="skf-breadercrub-item-icon">
        {{separator}}
    </span>
  </span>
</template>

<script lang="ts">
import { inject } from 'vue'
import { useRouter } from 'vue-router'
export default {
    props:{
        to:{
            type:Object,
            default:()=>({})
        }
    },
setup(props,context){
    const separator =  inject("separator")
    const router = useRouter()
    const to  = props.to
    const handleitem = ()=>{
        if(!to.path) return
        if(router){
            router.push(to)
        }else{
           location.pathname = to.path
        }
       
     }
     return {separator,handleitem}
}
}
</script>

<style lang="scss">
.skf-breadercrub-item{
   .skf-breadercrub-item-content{
    padding-left: 10px;
    &.is-link {
        color: rgb(64, 158, 255);
        &:hover{
         cursor: pointer;
        }
    }
   }
   .skf-breadercrub-item-icon{
    padding-left: 10px;
   }
}
</style>