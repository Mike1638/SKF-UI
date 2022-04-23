<template>
  <template v-if="visible">
    <div class="skf-dialog-overlay" @click="onClickOverlay"></div>
    <div class="skf-dialog-wrapper">
      <div class="skf-dialog">
        <header>
          标题 <span class="skf-dialog-close" @click="close"></span>
        </header>
        <main>
          <p>
            第一行字第一行字第一行字第一行字第一行字第一行字第一行字第一行字
          </p>
          <p>第二行字</p>
          <p>第三行字</p>
          <p>第四行字</p>
        </main>
        <footer>
          <Button level="main">Ok</Button>
          <Button>Cancel</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeonClickOverlay:{
        type:Boolean,
        default:true
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible",!props.visible);
    };
    const onClickOverlay=()=>{
        if(props.closeonClickOverlay){
            close()
        }
    }
    return { close ,onClickOverlay};
  },
};
</script>
<style lang="scss">
.skf-dialog {
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 3px fade-out($color: #000000, $amount: 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid #d9d9d9;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>