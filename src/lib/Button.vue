<template>
  <button class="skf-button" :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`skf-theme-${theme}`]: theme,
        [`skf-size-${size}`]: size,
        [`skf-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
.skf-button {
  box-sizing: border-box;
  border: none;
  border: 1px solid rgb(217, 217, 217);
  height: 32px;
  border-radius: 6px;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: rgb(38, 38, 38);
  background: white;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background  250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: rgb(64, 169, 255);
    border-color: rgb(64, 169, 255);
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.skf-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: rgb(24, 144, 255);
    &:hover,
    &:focus {
      color: rgb(64, 169, 255);
    }
  }
  &.skf-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover {
      background: rgb(250, 250, 250);
    }
  }
  &.skf-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.skf-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.skf-theme-button {
    &.skf-level-main {
      background: rgb(64, 169, 255);
      color: white;
      border-color:rgb(64, 169, 255);
      &:hover,&:focus{
      background: darken(rgb(64,169,255),10%);
      border-color: darken(rgb(64,169,255),10%);
      }
    }
    &.skf-level-danger {
      background: rgb(255, 77, 79);
      color: white;
      border-color: rgb(255, 77, 79);
      &:hover,&:focus{
      background: rgb(255, 120, 117) ;
      border-color: rgb(255, 120, 117); 
      }
    }
    &[disabled]{
      cursor: not-allowed;
      color:rgb(191, 191, 191);
      &:hover{
      border-color:rgb(217, 217, 217);
      }
    }
  }
  &.skf-theme-link {
    &.skf-level-danger {
      color: rgb(255, 77, 79);
       &:hover,&:focus{
      color: rgb(255, 120, 117); 
      }
    }
    &[disabled]{
      cursor: not-allowed;
      color:rgb(191, 191, 191)
    }
  }
  &.skf-theme-text{
    &.skf-level-main{
   color: rgb(64, 169, 255);
   &:hover,&:focus{
     color: darken(rgb(64,169,255),10%);
   }
    }
    &.skf-level-danger {
      color: rgb(255, 77, 79);
       &:hover,&:focus{
      color: rgb(255, 120, 117); 
      }
    }
     &[disabled]{
      cursor: not-allowed;
      color:rgb(191, 191, 191)
    }
  }
}
</style>



