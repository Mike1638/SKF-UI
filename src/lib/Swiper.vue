<template>
  <div class="skf-swiper-wrapper" >
    <div class="left" @click="throttleleft"></div>
    <div class="right" @click="throttleright"></div>
    <div class="skf-swiper-item-wrapper" :style="[`transform:${containerStyle}`,`transition:${flashStyle}`]">
    <div v-for="(item,index) in [list[lastimgindex-1]]" :key="index" class="skf-swiper-item-wrapper-img"><img :src="item.img" /></div>
      <slot></slot>
    <div v-for="(item,index) in [list[0]]" :key="index" class="skf-swiper-item-wrapper-img"><img :src="item.img" /></div>
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
  const throttle = (fn,time)=>{
   let freeze = null 
  return (...args)=>{
      if(freeze) {return}
      fn.call(null,...args)
        freeze = true
      setTimeout(()=>{
        freeze = null
      },time)
  }
  }
  const left = ()=>{
   distance.value = distance.value+500
   currentindex.value  =currentindex.value -1
   if(distance.value == 0){
    flashmove.value = 'none';
    currentindex.value = lastimgindex
    distance.value = -(lastimgindex+1)*500
    setTimeout(()=>{
     flashmove.value = '1s';
     currentindex.value = currentindex.value-1
     distance.value = -(lastimgindex)*500
    },0)
   }
  }
  const right  = ()=>{
   distance.value = distance.value-500
   currentindex.value  = currentindex.value +1
   if(distance.value == -(lastimgindex+1)*500){
    flashmove.value = 'none';
    currentindex.value = -1
    distance.value = 0
    setTimeout(()=>{
      flashmove.value = '1s'
      currentindex.value = 0
      distance.value = -500
    },0)
   }
  }
  const throttleleft = throttle(left,1000) 
  const throttleright = throttle(right,1000) 
  const dotgo =(e,index)=>{
    currentindex.value = index
    distance.value = 500 * (-1 - index )
  }
  const containerStyle=computed(()=>{
     //这里用了计算属性，用transform来移动整个图片列表
      return  `translate(${distance.value}px, 0)`
  })
  const flashStyle = computed(()=>{
    if(flashmove.value == "none" ){
      return 'none'
    }else{
      return  `transform ${flashmove.value}`
    }
  })
  return {throttleleft,throttleright,dotgo,containerStyle,list,lastimgindex,currentindex,flashStyle}
 }
}
</script>

<style lang="scss">
 .skf-swiper-wrapper{
    width: 500px;
    height: 250px;
    overflow: hidden; 
    position: relative;
    border-radius: 5px;
    .left{
      width: 30px;
      height: 30px;
      position: absolute;
      left: 0;
      bottom: 50%;
      transform: translate(0,50%);
      z-index: 10;
      border-radius: 15px;
      margin-left: 10px;
      outline: 1px solid rgb(173, 216, 230);
      background: rgb(173, 216, 230);
      &::before{
        position: absolute;
        left: 40%;
        top: 36%;
        transform: translate(-50%,-50%);
        transform: rotate(45deg);
        content: '';
        height: 10px;
        width: 10px;
        background: black;
      }
      &::after{
        position: absolute;
        left: 48%;
        top: 36%;
        transform: translate(-50%,-50%);
        transform: rotate(45deg);
        content: '';
        height: 10px;
        width: 10px;
        background: rgb(173, 216, 230);
      }
    }
    .right{
      width: 30px;
      height: 30px;
      position: absolute;
      right: 0;
      bottom: 50%;
      transform: translate(0,50%);
      z-index: 10;
      border-radius: 15px;
      margin-right: 10px;
      outline: 1px solid rgb(173, 216, 230);
      background: rgb(173, 216, 230);
         &::before{
        position: absolute;
        left: 30%;
        top: 36%;
        transform: translate(-50%,-50%);
        transform: rotate(45deg);
        content: '';
        height: 10px;
        width: 10px;
        background: black;
      }
      &::after{
        position: absolute;
        left: 22%;
        top: 36%;
        transform: translate(-50%,-50%);
        transform: rotate(45deg);
        content: '';
        height: 10px;
        width: 10px;
        background: rgb(173, 216, 230);
      }
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
        outline: 1px solid rgb(173, 216, 230);
        border-radius: 10px;
        cursor: pointer;
        text-align: center;
        &.currentdot{
          background: rgb(173, 216, 230);;
        }
      }
    }
   .skf-swiper-item-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
   
  }  
 }
</style>