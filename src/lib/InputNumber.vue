<template>
    <div class="skf-inputnumber-wrapper">
        <button class="skf-inputnumber-button left" @click="min" :disabled="disabled || minrestrict">-</button>
        <input type="text" class="skf-inputnumber-input"  :value="num" @change="resetnum" :disabled="disabled">
        <button class="skf-inputnumber-button right" @click="add" :disabled="disabled || maxrestrict">+</button>
    </div>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
     props:{
        num:{
            type:Number,
            require:true
        },
        min:{
            type:Number,
            require:true

        },
        max:{
            type:Number,
            require:true
        },
        disabled:{
            type:Boolean,
            default:false
        },
        step:{
            type:Number,
            default:1
        },
     },
     setup(props,context){
        const minrestrict = computed(()=>{
              if(props.num==props.min){
                return true
              }else{
                return false
              }
        })
        const maxrestrict = computed(()=>{
              if(props.num==props.max){
                return true
              }else{
                return false
              }
        })
        const min = ()=>{
            let nextmin  = props.num-props.step
            if(nextmin<props.min) {return}
            context.emit('update:num',nextmin) 
        }
        const add = ()=>{
              let nextadd  = props.num+props.step
            if(nextadd>props.max) {return}
             context.emit('update:num',nextadd) 
        }
        const resetnum = (e)=>{
            const newnum  =  Number(e.target.value) 
            if(newnum>props.min && newnum<props.max){
                   context.emit('update:num',newnum)
            }else if(newnum<props.min){
                   context.emit('update:num',props.min)
            }else if(newnum>props.max){
                   context.emit('update:num',props.max)
            }
        }
       return {min,add,minrestrict,maxrestrict,resetnum}
     }
}
</script>

<style lang="scss">
  .skf-inputnumber-wrapper{
    border-radius: 4px;
    display: inline-flex;
    flex-direction: row;
    .skf-inputnumber-button{
       width: 38px;
       height: 40px;  
       border: 1px solid #d8dde7;
       outline: none;
       &.left{
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
       }
       &.right{
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
       }  
    }
    .skf-inputnumber-input{
     flex: 1;
    background:none;  	
    outline:none;  	
    border: 0;
    line-height: 38px;
    border-top: 1px solid #d8dde7;
    border-bottom: 1px solid #d8dde7;
    text-align: center;
  }
}
</style>