<demo>
支持大小 size属性，改变Button的大小
</demo>
<template>
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
</template>
<script>
import Button from '../lib/Button.vue'
export default {
    components:{Button}
}
</script>