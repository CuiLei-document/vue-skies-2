<demo>
支持  disabled 、readonly、error、双向绑定
</demo>
<template>
    <Input value="正常" />
    <Input value="disabled" disabled />
    <Input value="readonly" readonly />
    <Input value="error" error="只能显示5个字" />
    <Input v-model:value="value" />
    {{ value }}
</template>
<script lang="ts">
import Input from "../lib/Input.vue";
import { ref } from "vue";
export default {
  components: { Input },
  setup(){
      const value = ref('v-model')
      return {value}
  }
};
</script>