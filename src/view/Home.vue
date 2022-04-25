<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav></Topnav>
      <div class="banner">
        <h1>SKF UI</h1>
        <h2>多组件，灵活，小巧</h2>
        <div class="actions">
          <a href="https://github.com" target="_blank">GitHub</a>
          <router-link to="/doc">起步</router-link>
        </div>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写(非严格模式)</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-code"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import Dialog from "../lib/Dialog.vue";
export default { components: { Topnav, Dialog } };
</script>

<style lang="scss" scoped>
.topnavAndBanner {
  background: radial-gradient(
    circle,
    rgba(116, 235, 213, 1) 0%,
    rgba(172, 182, 229, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
.banner {
  color: rgb(40 101 154 / 98%);
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .actions {
    padding: 8px 0;
    > a {
      margin: 0 8px;
      background: rgb(95, 139, 228);
      color: #fff;
      display: inline-block;
      $h: 28px;
      line-height: $h;
      border-radius: $h/2;
      padding: 8px 24px;
    }
  }
}
</style>