<template>
  <div class="skf-select-item-wrapper">
            <ul >
            <li v-for="(item) in options" :key="item.value" class="skf-select-item" @click="xxx">
                {{item.label}}
            </li>
            </ul>
        </div>
</template>

<script lang="ts">
export default {
props:{
    options:{
        type:Array,
        require:true
    }
  },
  setup(props,context){
      const xxx = (e)=>{
         console.log(e.target.innerText)
      }
      return {xxx}
  }    
}
</script>

<style lang="scss">
.skf-select-item-wrapper{
    width: 100%;
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    position: absolute;
    left: 0;
    top: 60px;
    border: 1px solid #e4e7ed;
    border-radius: 5px;
     &::after{
        content: '';
        border: 9px solid;
        border-color: transparent transparent  white transparent ;
        position: absolute;
        left: 32px;
        top:-16px;
    }
     &::before{
        content: '';
        border: 7px solid;
        border-color: transparent transparent  #e4e7ed transparent ;
        position: absolute;
        left: 34px;
        top:-15px;
    }
    .skf-select-item{
        padding: 5px;
        padding-left: 10px;
        &:hover{
            cursor: pointer;
            background: #f5f7fa;
        }
    }
}
</style>