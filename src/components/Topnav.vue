<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-skf"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <span class="toggleAside" @click="togglemenu" v-if=" toggleMenuButtonVisible">
      <svg class="icon">
        <use xlink:href="#icon-caidan"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props:{
    toggleMenuButtonVisible:{
      type:Boolean,
      default:false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const togglemenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { togglemenu };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  > .logo {
    max-width: 6em;
    padding-right: auto;
    padding: 1px 0;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>