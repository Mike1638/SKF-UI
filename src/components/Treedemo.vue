<template>
    <span>Tree 示例</span>
    <Demo :component="Tree1DemoVue"></Demo> 
    <Demo :component="Tree2DemoVue"></Demo> 
</template>

<script lang="ts">
import Demo from "../components/Demo.vue"
import Tree1DemoVue from "./Treedemo/Tree1.demo.vue"
import Tree2DemoVue from "./Treedemo/Tree2.demo.vue"
export default {
    components:{Demo,Tree1DemoVue,Tree2DemoVue},
    setup(){
    return{Demo,Tree1DemoVue,Tree2DemoVue}
    }
}
</script>

<style>

</style>