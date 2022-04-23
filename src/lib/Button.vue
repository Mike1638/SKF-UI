<template>
  <button class="skf-button" :class="`skf-theme-${theme}`">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style lang="scss">
.skf-button {
    box-sizing: border-box;
    border:none;
    border:1px solid rgb(217, 217, 217);
    height: 32px;
    border-radius: 6px;
    padding: 0 12px;
    cursor: pointer;
    display:inline-flex;
    justify-content: center;
    align-items:center;
    color:rgb(38, 38, 38); 
    background: white;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    & + & {
     margin-left: 8px;
    }
    &:hover,
    &:focus{
      color: rgb(64, 169, 255);
      border-color:rgb(64, 169, 255) ;
    }
    &:focus{
      outline: none;
    }
    &::-moz-focus-inner{
      border: 0;
    }

  &.skf-theme-button {
  }
  &.skf-theme-link {
  }
  &.skf-theme-text {
  }
}
</style>