import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:()=>import('../views/Home.vue'),
    meta:{
      head:true
    }
  },{
    path:'/contact',
    name:'contact',
    component:()=>import('../views/contact.vue')
  },{
    path: '/doc',
    name: 'doc',
    component:()=>import('../views/doc.vue')
  },{
    path:'/drink',
    name:'drink',
    component:()=>import('../views/inf.vue')
  },{
    path:'/alc',
    name:'alc',
    component:()=>import('../views/inf.vue')
  },{
    path:'/drug',
    name:'drug',
    component:()=>import('../views/inf.vue')
  },{
    path:'/game',
    name:'game',
    component:()=>import('../views/inf.vue')
  },{
    path:'/fiz',
    name:'fiz',
    component:()=>import('../views/inf.vue')
  },{
    path:'/lazer',
    name:'lazer',
    component:()=>import('../views/lazer.vue')
  },{
    path:'/electro',
    name:'electro',
    component:()=>import('../views/electro.vue')
  },{
    path:'/dars',
    name:'dars',
    component:()=>import('../views/dars.vue')
  },
  {
    path:'/fiz/narcology',
    name:'narcologyFiz',
    component:()=>import('../views/inf.vue')
  },
  {
    path:'/lazer/narcology',
    name:'narcologyLazer',
    component:()=>import('../views/narcology/lazer.vue')
  },{
    path:'/electro/narcology',
    name:'narcologyElectro',
    component:()=>import('../views/narcology/electro.vue')
  }
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router