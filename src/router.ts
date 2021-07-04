import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
const history = createWebHashHistory()
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