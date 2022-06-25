import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import Switchdemo from './components/Switchdemo.vue'
import Buttondemo from './components/Buttondemo.vue'
import Dialogdemo from './components/Dialogdemo.vue'
import Tabsdemo from './components/Tabsdemo.vue'
import Treedemo from './components/Treedemo.vue'
import InputNumberdemo from './components/InputNumberdemo.vue'
import Breadcrumbdemo from './components/Breadcrumbdemo.vue'
import Swiperdemo from './components/Swiperdemo.vue'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'
import install from "./markdown/Install.md"
import start from "./markdown/Start.md"
import introduce from "./markdown/Introduce.md"
const history = createWebHashHistory()
const markdown =(filename: string)=>h(Markdown,{content:filename,key:filename})
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
           {path:'tree',component:Treedemo},
           {path:'inputnumber',component:InputNumberdemo},
           {path:'breadcrumb',component:Breadcrumbdemo},
           {path:'swiper',component:Swiperdemo},
           {path:'introduce',component:markdown(introduce)},
           {path:'install',component:markdown(install)},
           {path:'start',component:markdown(start)},
       ]},
    ]
})

