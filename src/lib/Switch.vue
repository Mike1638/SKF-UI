<template>
  <div>
    <button class="skf-switch" :class="{ 'skf-checked': value }" @click="toggle">
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: { value: Boolean },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>


<style lang="scss">
$bh: 22px;
$rh: $bh - 4px;
.skf-switch{
  width: $bh * 2;
  height: $bh;
  border: none;
  border-radius: $bh;
  position: relative;
  background: rgb(191, 191, 191);
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    background: rgb(245, 245, 247);
    width: $rh;
    height: $rh;
    border-radius: $rh/2;
    transition: all 250ms;
  }
  &:focus {
    outline: none;
  }
  &.skf-checked {
    background: rgb(24, 144, 255);
    span {
      left: calc(100% - #{$rh} - 2px);
    }
  }
  &:active {
    span {
      width: $rh + 4px;
    }
  }
  &.skf-checked:active {
    span {
      width: $rh + 4px;
      margin-left: -4px;
    }
  }
}
</style>