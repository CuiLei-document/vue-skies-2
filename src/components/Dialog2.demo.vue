<demo>
支持dialog: 一键打开
</demo>
<template>
 <Button @click="showDialog">点击打开</Button>
</template>

<script>
import Button from "../lib/Button.vue";
import {openDialog} from '../lib/openDialog'
export default {
  components: {Button },
  setup() {
    
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
    return {showDialog };
  },
};
</script>

<style>
</style>