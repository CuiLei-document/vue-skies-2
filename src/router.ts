import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import InputDemo from './components/InputDemo.vue'
import install from './markdown/install.md'
import intro from './markdown/intro.md'
import GetStart from './markdown/get-start.md'
import Markdown from './components/Markdown.vue'
import { h } from '@vue/runtime-core'
const history = createWebHashHistory()
const x = string => h(Markdown,{content:string,key:string})
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
                    component:x(intro)
                },
                {
                    path:'install',
                    component:x(install)
                },
                {
                    path:'get-start',
                    component:x(GetStart)
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
                },
                {
                    path:'/doc/input',
                    component:InputDemo
                }
            ]
        }
    ]
})