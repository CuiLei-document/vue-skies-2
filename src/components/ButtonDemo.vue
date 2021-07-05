<template>
  <h1>按钮 Button</h1>
  <h2>基础</h2>
  <main>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="text">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="error">你好</Button>
  </main>
  <h2>示例二</h2>
  <div>
    <Button size="big">不小了</Button>
    <Button size="medium">一丢丢小</Button>
    <Button size="small">小了点</Button>
    <Button size="tiny">确实小</Button>
  </div>
  <div>
    <Button size="big" theme="link">不小了</Button>
    <Button theme="link" size="medium">一丢丢小</Button>
    <Button theme="link" size="small">小了点</Button>
    <Button theme="link" size="tiny">确实小</Button>
  </div>
  <div>
    <Button size="big" theme="text">不小了</Button>
    <Button theme="text" size="medium">一丢丢小</Button>
    <Button theme="text" size="small">小了点</Button>
    <Button theme="text" size="tiny">确实小</Button>
  </div>
  <h2>示例三</h2>
  <div>
    <div>
      <Button leve="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button leve="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" leve="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" leve="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" leve="main">主要文本按钮</Button>
      <Button theme="text">普通文本按钮</Button>
      <Button theme="text" leve="danger">危险文本按钮</Button>
    </div>
    <h2>示例四</h2>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button theme="line" disabled>禁用链接</Button>
      <Button theme="text" disabled>禁用文本</Button>
    </div>
    <h3>示例五</h3>
      <div>
        <Button :loading="true">加载中</Button>
        <Button >加载完成</Button>
      </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>

<style>
</style>