import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import mealplan from './components/mealPlanSection.vue'
import workouts from './components/workouts'
import realtime from './components/realTimeSection'
import signup from './components/signupForm'
import login from './components/login'
import Home from './components/Home'
import DailyWorkouts from './components/DailyWorkouts'
import { todayProps, yesterdayProps } from './propsconfig'
import viewUsers from './components/viewUsers'
import pricingView from './components/pricingView'
import content from './components/content'
import mobile from './components/mobileNav'
import dashBoard from './components/dashboard'
import admin from './components/adminPortal'
import 'es6-promise/auto'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {path: '/', component: Home},
    {
      path: '/todays-workout',
      component: DailyWorkouts,
      props: todayProps
    },
    {
      path: '/yesterdays-workout',
      component: DailyWorkouts,
      props: yesterdayProps
    },
    {path: '/mealplan', component: mealplan},
    {path:'/workouts',component: workouts},
    {path: '/realtime', component: realtime},
    {path: '/signupForm', component: signup},
    {path: '/login', component: login},
    {path: '/viewUsers', component: viewUsers},
    {path: '/pricing', component: pricingView},
    {path: '/content', component: content},
    {path: '/nav', component: mobile},
    {path: '/dashboard', component: dashBoard},
    {path: '/admin',name:'admin', component: admin },//beforeEnter: (to,from,next) =>{
    //   if(store.state.authenticated == false){
    //     next(false);
    //   }else{
    //     next()
    //   }
    //}},

   
  ],
  mode:'history',

 
  
},

)
 const store = new Vuex.Store({
   state:{
     authenticated: false
   },
   mutations:{
     setAuthentication(state,status){
       state.authenticated = status;
     }
    }
 })

new Vue({
  router,
  render: h => h(App),
   store:store,
   router:router
}).$mount('#app')
