<template>
  <div class="skf-tabs">
    <div class="skf-tabs-nav">
      <div class="skf-tabs-nav-item" v-for="(t, index) in titles" :key="index" :class="{selected:t === selected}" @click="select(t)">
        {{ t }}
      </div>
    </div>
    <div class="skf-tabs-content">
      <component class="skf-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" :class="{selected:c.props.title===selected}"></component>
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
export default {
  props:{
     selected:{
       type:String,
     }    
  } ,
 setup(props, context) {
    const defaults = context.slots.default();
    console.log(defaults[0].props.title);
    
    defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error("组件类型错误！");
      }
    });
    const titles = defaults.map((item) => {
      return item.props.title;
    });
    const select = (t:string)=>{
      context.emit('update:selected',t)
    }
    return { defaults, titles ,select};
  },
};
</script>

<style lang="scss">
.skf-tabs {
  &-nav {
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    justify-content: left;
    align-items: center;
    &-item {
        padding: 8px 0px;
        margin:0 16px;
        cursor: pointer;
        &:first-child{
            margin-left: 0;
        }
    &.selected{
    color: rgb(24, 144, 255);
    }
    }
  }
  &-content{
      padding: 8px 0;
     &-item{
       display: none;
        &.selected{
        display: block;
      }
     }
  }
}
</style>