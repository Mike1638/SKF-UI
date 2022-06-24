<template>
    <span>Tree 示例</span>
    <Demo :component="Tree1DemoVue"></Demo> 
</template>

<script lang="ts">
import Demo from "../components/Demo.vue"
import Tree1DemoVue from "./Treedemo/Tree1.demo.vue"
export default {
    components:{Demo,Tree1DemoVue},
    setup(){
    return{Demo,Tree1DemoVue}
    }
}
</script>

<style>

</style>