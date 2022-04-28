import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import Switchdemo from './components/Switchdemo.vue'
import Buttondemo from './components/Buttondemo.vue'
import Dialogdemo from './components/Dialogdemo.vue'
import Tabsdemo from './components/Tabsdemo.vue'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'
const history = createWebHashHistory()
const markdown =(filename: string)=>h(Markdown,{path:`../markdown/${filename}.md`,key:filename})
export const router = createRouter({
    history:history,
    routes:[
       {path:'/',component:Home},
       {path:'/doc',component:Doc,children:[
           {path:'',redirect:'/doc/introduce'},
           {path:'switch',component:Switchdemo},
           {path:'button',component:Buttondemo},
           {path:'dialog',component:Dialogdemo},
           {path:'tabs',component:Tabsdemo},
           {path:'introduce',component:markdown('Introduce')},
           {path:'install',component:markdown('Install')},
           {path:'start',component:markdown('Start')},
       ]},
    ]
})

