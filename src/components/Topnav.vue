<template>
  <div class="topnav">
    <div class="logo" @click="togglemenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const togglemenu = ()=>{
    menuVisible.value = !menuVisible.value
  }
   return {togglemenu}
  },
 
};
</script>

<style lang="scss" scoped>
.topnav {
  background-color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    padding-right: auto;
  }
  > .menu {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>