<template>
  <div>
    <div class="demo">
      <h2>{{component.__sourceCodeTitle}}</h2>
      <div class="demo-component">
        <component :is="component" />
      </div>
      <div class="demo-actions">
          <Button v-if="codeVisible" @click="hiCode">隐藏代码</Button>
        <Button  v-else @click="showCode">查看代码</Button>
      
      </div>
      <div class="demo-code" v-if="codeVisible">
        <pre class="language-css" v-html="html"></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import  "prismjs";
import '../assets/prism.css'
const Prism = (window as any).Prism;
import {computed,ref} from 'vue'
export default {
    components:{Button},
    props:{
        component:Object
    },
    setup(props){
        const html = computed(()=>{
            return Prism.highlight(props.component.__sourceCode,Prism.languages.html,'html')
        })
        const codeVisible = ref(false)
        const showCode = ()=>{
            codeVisible.value = true
        }
        const hiCode = ()=>{
          codeVisible.value = false
        }
        return{
            Prism,
            html,
            showCode,
            hiCode,
            codeVisible
        }
    }
}
</script>
<style lang="scss">
    $border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 35px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px solid $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px solid $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>