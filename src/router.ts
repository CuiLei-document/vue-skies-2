import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

import Introduce from './view/Introduce.vue'
import Install from './view/Install.vue'
import GetStart from './view/GetStart.vue'
import Markdown from './view/Markdown.vue'
import { h } from '@vue/runtime-core'
const history = createWebHashHistory()
const x = fillName => h(Markdown,{path:`../markdown/${fillName}.md`,key:fillName})
export const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {
                    path:'introduce',
                    component:x('Intro')
                },
                {
                    path:'install',
                    component:x('install')
                },
                {
                    path:'get-start',
                    component:x('get-start')
                },
                {
                    path: '/doc/switch',
                    component:SwitchDemo
                },
                {
                    path:'/doc/button',
                    component:ButtonDemo
                },
                {
                    path:'/doc/dialog',
                    component:DialogDemo
                },
                {
                    path:'/doc/tabs',
                    component:TabsDemo
                }
            ]
        }
    ]
})