<template>
  <div>Tabs示例</div>
  <Demo :component="Tabs1Demo"/>
</template>

<script>
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
export default {
  components:{Demo},
  setup(){
    return {Tabs1Demo}
  }
};
</script>

<style>
</style>