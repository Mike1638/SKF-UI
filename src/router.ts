import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import Switchdemo from './components/Switchdemo.vue'
import Buttondemo from './components/Buttondemo.vue'
import Dialogdemo from './components/Dialogdemo.vue'
import Tabsdemo from './components/Tabsdemo.vue'
import Docdemo from './components/Docdemo.vue'
import Introduce from './view/Introduce.vue'
import Install from './view/Install.vue'
import Start from './view/Start.vue'
const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
       {path:'/',component:Home},
       {path:'/doc',component:Doc,children:[
           {path:'',component:Docdemo},
           {path:'switch',component:Switchdemo},
           {path:'button',component:Buttondemo},
           {path:'dialog',component:Dialogdemo},
           {path:'tabs',component:Tabsdemo},
           {path:'introduce',component:Introduce},
           {path:'install',component:Install},
           {path:'start',component:Start},
       ]},
    ]
})

