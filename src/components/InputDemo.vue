<template>
    <h1>Input组件</h1>
    <Demo :component="Input1Demo"/>
</template>
<script lang="ts">
import Input1Demo from "./Input1.demo.vue";
import Demo from './Demo.vue'
export default {
  components: { Demo },
  setup(){
   
      return {Input1Demo}
  }
};
</script>