<template>
  <div class="skf-tabs">
    <div class="skf-tabs-nav" ref="container">
      <div  class="skf-tabs-nav-item"  v-for="(t, index) in titles" :key="index"  :ref=" (el) => {if (t === selected) selectedItem = el;} "
        :class="{ selected: t === selected ,disabled:disabled.includes(t)}"
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div class="skf-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="skf-tabs-content">
     <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, onMounted,  ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    
    
    onMounted(() => {
      watchEffect(() => {
        const { width } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.left = left2 - left1 + "px";
      });
    });
    const defaults = context.slots.default();
    console.log(defaults[1].props); 
    
    defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error("组件类型错误！");
      }
    });
    const titles = defaults.map((item) => {
      return item.props.title;
    });
     const current = computed(() => {
      return defaults.filter(tag => tag.props.title === props.selected)[0]
    })
    let disabled=[]
     for(let i = 0;i<defaults.length;i++){
       if('disabled' in  defaults[i].props){
          disabled.push(defaults[i].props.title) 
       }
     }
     console.log(disabled)
    
    
    const select = (t: string) => {
      if(!disabled.includes(t)){
        context.emit("update:selected", t);
      }
    };
    return { defaults, titles, select, indicator, container ,selectedItem,current,disabled};
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
    position: relative;
    &-item {
      padding: 8px 0px;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: rgb(24, 144, 255);
      }
      &.disabled{
        cursor: not-allowed;
        color: rgb(191, 191, 191);
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
  &-nav-indicator {
    position: absolute;

    height: 3px;
    left: 0;
    bottom: -1px;
    background: rgb(24, 144, 255);
    transition: all 350ms;
  }
}
</style>