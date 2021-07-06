<template>
    <article class="markdown-body" v-html="md">

    </article>
    <Markdown  path="../markdown/Intro.md"/>
</template>

<script>
import md from '../markdown/Intro.md'
import Markdown from '../view/Markdown.vue'
export default {
    components:{Markdown},
    data(){
        return {md}
    }
}
</script>