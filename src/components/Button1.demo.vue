<demo>
常规样式 theme属性，改变Button的默认样式
</demo>
<template>

  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="text">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="error">你好</Button>
  </div>
</template>
<script>
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>