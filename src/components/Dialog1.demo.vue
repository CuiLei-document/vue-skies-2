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
import {openDialog} from '../lib/openDialog'
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const fn1 = () => {
      console.log("hi");
      return false;
    };
    const fn2 = () => {
      console.log("爸爸");
    };
    const showDialog = ()=>{
        openDialog({
          title:`标题`,
          content:`你好`,
          ok(){
            console.log('ok')
            return  false
          },
          count(){
            console.log('count')
          }
        })
    }
    return { toggle, x, fn1, fn2,showDialog };
  },
};
</script>

<style>
</style>