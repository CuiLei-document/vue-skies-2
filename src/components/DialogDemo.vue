<template>
  <div>
    <h2>示例一</h2>
    <Button @click="toggle">点击</Button>
    <Dialog :visible="x" />
  </div>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
import Button from '../lib/Button.vue'
import {ref} from 'vue'
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    return {toggle,x}
  },
};
</script>

<style>
</style>