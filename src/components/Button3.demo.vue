<demo>
支持 leve：主要按钮以及危险按钮等！
</demo>
<template>
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
</template>

<script>
import Button from '../lib/Button.vue'
export default {
    components:{Button}
}
</script>