<template>
  <div class="layout">
    <Topnav class="nav" toggleMenuButtonVisible></Topnav>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li><router-link to="/doc/introduce">介绍</router-link></li>
          <li><router-link to="/doc/install">安装</router-link></li>
          <li><router-link to="/doc/start">开始使用</router-link></li>
        </ol>
        <h2>组件列表</h2>
        <ol class="overli">
          <li><router-link to="/doc/switch">Switch组件</router-link></li>
          <li><router-link to="/doc/button">Button组件</router-link></li>
          <li><router-link to="/doc/dialog">Dialog组件</router-link></li>
          <li><router-link to="/doc/tabs">Tabs组件</router-link></li>
          <li><router-link to="/doc/tree">Tree组件</router-link></li>
          <li><router-link to="/doc/inputnumber">InputNumber组件</router-link></li>
          <li><router-link to="/doc/breadcrumb">Breadcrumb组件</router-link></li>
          <li><router-link to="/doc/swiper">Swiper组件</router-link></li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
};
</script>

<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 200px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
    padding: 0 10px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 12px 20px;
        text-decoration: none;
      }
      .router-link-active {
        background: burlywood;
      }
    }
    &.overli{
      overflow-y:scroll;
      height: calc(100vh - 295px);
      &::-webkit-scrollbar{
        width: 0 !important
      }
    }
  }
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 250px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    z-index: 9;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: rgb(255, 255, 255);
  }
}
main {
  overflow: auto;
}
</style>
