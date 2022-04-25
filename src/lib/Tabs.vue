<template>
  <div class="skf-tabs">
    <div class="skf-tabs-nav">
      <div class="skf-tabs-nav-item" v-for="(t, index) in titles" :key="index">
        {{ t }}
      </div>
    </div>
    <div class="skf-tabs-content">
      <component
        class="skf-tabs-content-item"
        v-for="(c, index) in defaults"
        :is="c"
        :key="index"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error("组件类型错误！");
      }
    });
    const titles = defaults.map((item) => {
      return item.props.title;
    });
    return { defaults, titles };
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
  }
}
</style>