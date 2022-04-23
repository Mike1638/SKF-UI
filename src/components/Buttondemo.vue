<template>
  <div>
    <span>Button 示例</span>
    <h1>示例1</h1>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
    <h1>示例2</h1>
    <div>
      <Button size="big">大大大</Button>
      <Button>普通</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">普通</Button>
      <Button theme="link" size="small">小小小</Button>
    </div>
    <div>
      <Button theme="text" size="big">大大大</Button>
      <Button theme="text">普通</Button>
      <Button theme="text" size="small">小小小</Button>
    </div>
    <h1>示例3</h1>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要按钮</Button>
      <Button theme="link">普通</Button>
      <Button theme="link" level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要按钮</Button>
      <Button theme="text">普通</Button>
      <Button theme="text" level="danger">危险按钮</Button>
    </div>
    <h1>示例4</h1>
    <Button disabled>不可用</Button>
    <Button theme="link" disabled>不可用链接</Button>
    <Button theme="text" disabled>不可用文本</Button>
    <h1>示例5</h1>
    <Button loading>加载中</Button>
    <Button loading></Button>
    <Button >加载完毕</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button},
};
</script>

<style>
</style>