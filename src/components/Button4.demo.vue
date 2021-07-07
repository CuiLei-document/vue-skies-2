<demo>
支持 disabled：禁用按钮
</demo>
<template>
   <div>
      <Button disabled>禁用按钮</Button>
      <Button theme="line" disabled>禁用链接</Button>
      <Button theme="text" disabled>禁用文本</Button>
    </div>
</template>

<script>
import Button from '../lib/Button.vue'
export default {
    components:{Button}
}
</script>