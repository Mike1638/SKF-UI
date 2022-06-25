<template>
   <span>Button 示例</span>
   <Demo :component="Swiper1Demo"></Demo> 
</template>

<script lang="ts">
import Demo from "./Demo.vue"
import Swiper1Demo from "./Swiperdemo/Swiper1.demo.vue"
export default {
components: {  Demo,Swiper1Demo},
setup(){
    return {Demo,Swiper1Demo}
    },
}
</script>
