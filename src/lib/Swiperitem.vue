<template>
   <div class="skf-swiper-item-wrapper-img">
     <slot></slot>
    
   </div>
</template>

<script lang="ts">
export default {
  setup(props,context){
   return
  }
}
</script>

<style lang="scss">
.skf-swiper-item-wrapper-img{
    >img{
    width: 500px;
    height: 250px;
    }
}
</style>