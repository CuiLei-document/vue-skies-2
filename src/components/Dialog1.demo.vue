<demo>
支持dialog: 弹窗
</demo>
<template>
  <div>
    <Button @click="toggle">点击</Button>
    <Dialog
      v-model:visible="x"
      :closeClickOverlay="true"
      :ok="fn1"
      :count="fn2"
    >
      <template v-slot:title> 
        <strong>加粗的标题</strong>
      </template>
      <template v-slot:content>
        <div>你好2</div>
        <div>你好1</div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const fn1 = () => {
      return false;
    };
    const fn2 = () => {
    };
    return { toggle, x, fn1, fn2 };
  },
};
</script>

<style>
</style>