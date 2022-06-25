<template>
  <div class="skf-swiper-wrapper" >
    <div class="left" @click="left"></div>
    <div class="right" @click="right"></div>
    <div class="skf-swiper-item-wrapper" :style="[`transform:${containerStyle}`,`transition:${flashStyle}`]">
    <div v-for="(item,index) in [list[lastimgindex-1]]" :key="index" class="xxxxx"><img :src="item.img" /></div>
      <slot></slot>
    <div v-for="(item,index) in [list[0]]" :key="index" class="xxxxx"><img :src="item.img" /></div>
    </div>
    <div class="dotwrapper">
      <span v-for="(item,index) in list" :key="index" class="dot" @click="dotgo($event,index)" :class="[{currentdot:(index == currentindex)}]"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, inject, Ref,ref } from "vue"
export default {
 setup(){
  const list = inject<Ref>('list')
  const distance = ref(-500)
  const currentindex = ref(0)
  const flashmove = ref('1s')
  const lastimgindex =list.value.length
  const left = ()=>{
   distance.value = distance.value+500
   currentindex.value  =currentindex.value -1
   if(distance.value == 0){
   
    currentindex.value = lastimgindex-1
   distance.value = -(lastimgindex)*500
   }
   console.log('currentindex',currentindex.value)
    console.log('left')
  }
  const right  = ()=>{
   distance.value = distance.value-500
   currentindex.value  = currentindex.value +1
   if(distance.value == -(lastimgindex+1)*500){
     setTimeout(()=>{
       flashmove.value = 'none'
    })
    currentindex.value = 0
    distance.value = -500
   }
   console.log('currentindex',currentindex.value)
   console.log('right' )
  }
  const dotgo =(e,index)=>{
    console.log('index',index)  //  0 1 2 3
    currentindex.value = index
    distance.value = 500 * (-1 - index )
  }
  const containerStyle=computed(()=>{
     //这里用了计算属性，用transform来移动整个图片列表
      return  `translate(${distance.value}px, 0)`
  })
  const flashStyle = computed(()=>{
      return  `transform ${flashmove.value}`
  })
  return {left,right,dotgo,containerStyle,list,lastimgindex,currentindex,flashStyle}
 }
}
</script>

<style lang="scss">
 .skf-swiper-wrapper{
    width: 500px;
    height: 250px;
    overflow: hidden; 
    position: relative;
    .left{
      width: 30px;
      height: 30px;
      position: absolute;
      left: 0;
      bottom: 50%;
      transform: translate(0,50%);
      z-index: 10;
      outline: 1px solid red;
    }
    .right{
      width: 30px;
      height: 30px;
      position: absolute;
      right: 0;
      bottom: 50%;
      transform: translate(0,50%);
      z-index: 10;
      outline: 1px solid yellow;
    }
      .dotwrapper{
      width: 100%;
      height: 20px;
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 5px;
      .dot{
        margin: 0 5px;
        width: 20px;
        height: 20px;
        border: 1px solid red;
        border-radius: 10px;
        color: red;
        cursor: pointer;
        &.currentdot{
          background: orangered;
        }
      }
    }
   .skf-swiper-item-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 500px;
    height: 250px;
  }  
 }
</style>