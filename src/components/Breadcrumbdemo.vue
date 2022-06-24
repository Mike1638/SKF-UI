<template>
    <span>Breadcrumb 示例</span>
    <Demo :component="Breadcrumbitemdemo1"></Demo> 
    <Demo :component="Breadcrumbitemdemo2"></Demo> 
    <router-view/>
</template>

<script>
import Demo from "../components/Demo.vue"
import Breadcrumbitemdemo1 from '../components/Breadcrumbdemo/Breadcrumb1.demo.vue'
import Breadcrumbitemdemo2 from '../components/Breadcrumbdemo/Breadcrumb2.demo.vue'
export default {
 components:{ Demo, Breadcrumbitemdemo1,Breadcrumbitemdemo2 },
 setup(){
   
    return {Demo, Breadcrumbitemdemo1,Breadcrumbitemdemo2 }
 }
}
</script>

<style>

</style>