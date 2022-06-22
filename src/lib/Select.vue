<template>
    <div class="skf-select-wrapper">
        <SelectOption/>
    </div>
</template>

<script lang="ts">
import SelectOption from "./SelectOption.vue"
export default {
  components:{SelectOption},
  
}
</script>

<style lang="scss"> 
.skf-select-wrapper{
    height:40px;
    width:240px;
    border: 1px solid red;
    border-radius:5px ;
    position: relative;
}
</style>