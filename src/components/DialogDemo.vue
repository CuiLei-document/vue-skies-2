<template>
  <div>
    <h2>示例一</h2>
    <Button @click="toggle">点击</Button>
    <Dialog v-model:visible="x"  :closeClickOverlay="true"
    :ok="fn1" :count="fn2"
    />
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
    const fn1 = ()=>{
      console.log('hi')
      return false
    }
    const fn2 = ()=>{
      console.log('爸爸')
    }
    return {toggle,x,fn1,fn2}
  },
};
</script>

<style>
</style>