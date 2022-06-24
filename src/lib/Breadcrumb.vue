<template>
  <div class="skf-breadcrumb">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { provide } from 'vue'
export default {
  props:{
    separator:{
         type:String,
         default:'>'
    }
  },
  setup(props,context){
     provide('separator',props.separator)
   }
}
</script>

<style lang="scss">
.skf-breadcrumb{
    .skf-breadercrub-item:last-child{
      .skf-breadercrub-item-icon{
        display: none;
       }
    }
}
</style>