<demo>
支持tabs: 导航切换
</demo>
<template>
  <Tabs v-model:selected="x" >
    <Tab title="导航1">内容一</Tab>
    <Tab title="导航2">内容二</Tab>
  </Tabs>
</template>

<script>
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {ref} from 'vue'
export default {
  components:{Tabs,Tab},
  setup(){
    const x = ref('导航1')
    return {x}
  }
};
</script>
