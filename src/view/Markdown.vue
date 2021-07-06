<template>
    <div v-html="content">
        
    </div>
</template>
<script lang="ts">
import {ref} from 'vue'
export default {
    props:{
        path:{
            type:String,
            require:true
        }
    },
    setup(props){
        const content = ref<string>(null)
        import(props.path).then(response=>{
            content.value = response.default
        })
        return {
            content
        }
    }
}
</script>