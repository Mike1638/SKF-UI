<template>
   <div class="topnav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
</template>

<script lang="ts">
export default {};
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