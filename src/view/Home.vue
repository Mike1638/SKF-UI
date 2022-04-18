<template>
  <div>
    <Topnav></Topnav>
    <div class="banner">
      <h1>SKF UI</h1>
      <h2>多组件，灵活，小巧</h2>
      <div class="actions">
        <a>github</a>
        <a>起步</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {components:{Topnav}}
</script>

<style lang="scss" scoped>
.topnav{
  background-color: pink;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    >.logo{
      max-width: 6em;
      padding-right: auto;
    }
    >.menu{
      display: flex;
      flex-wrap: nowrap;
      white-space: nowrap;
      >li{
        margin:0 1em;
      }
    }   
}
</style>