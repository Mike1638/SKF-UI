<template>
  <div>
    <Topnav></Topnav>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li><router-link to="">Switch组件</router-link></li>
          <li><router-link to="">Button组件</router-link></li>
          <li><router-link to="">Dialog组件</router-link></li>
          <li><router-link to="">Tabs组件</router-link></li>
        </ol>
      </aside>
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

<style lang="scss">
aside {
  background: lightblue;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 16px;
  padding-top:70px;
  >h2{
    margin-bottom: 4px;
  }
  > ol {
    >li{
      padding: 4px 0;
    }
  }
}
</style>
