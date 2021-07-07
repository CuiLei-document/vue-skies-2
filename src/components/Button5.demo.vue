<demo>
支持 loading: 加载按钮
</demo>
<template>
  <div>
    <Button :loading="true">加载中</Button>
    <Button>加载完成</Button>
    <Button :loading="true" disabled>加载禁用</Button>
  </div>
</template>
<script>
import Button from '../lib/Button.vue'
export default {
    components:{Button}
}
</script>