<demo>
基本使用
</demo>
<template>
   <Breadcrumb >
     <Breadcrumbitem v-for="(item,index) in navoptions" :key="index" :to="{path:item.path}">{{item.itemname}}</Breadcrumbitem>
  </Breadcrumb>
</template>

<script lang="ts">
import Breadcrumb from '../../lib/Breadcrumb.vue'
import Breadcrumbitem from '../../lib/Breadcrumbitem.vue'
export default {
components:{ Breadcrumb, Breadcrumbitem},
 setup(){
    const navoptions = [
        {
           itemname:'Switch组件',
           path:'/doc/switch'
        },
        {
           itemname:'Tabs组件',
           path:'/doc/tabs'
        },
        {
           itemname:'InputNumber组件',
           path:'/doc/inputNumber'
        },
        {
           itemname:'Button组件',
           path:'/doc/button'
        },
        {
           itemname:'无链接',
        },
    ] 
      return {navoptions,Breadcrumb, Breadcrumbitem}
    }
}
</script>

<style>

</style>