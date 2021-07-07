<template>
    <article class="markdown-body" v-html="content"></article>
</template>

<script>
export default {
    props:{
        content:{
            type:String,
            readonly:true
        }
    }
}
</script>