import Vue from "vue";
import  Router from "vue-router"

Vue.use(Router)
const routes=[
    {path:'/',component:()=>import('../components/a.vue'),
children:[
    {
        path:"/d",
        component:()=>import('../components/d.vue')
    }
]
},
    {path:'/b',component:()=>import('../components/b.vue')},
    {path:'/c',component:()=>import('../components/c.vue')},
    {
        path:"*",
        redirect:"/"
    }
    
]
export default new Router({
    routes ,
    mode:"hash"
})