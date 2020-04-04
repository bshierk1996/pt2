import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
//  import Vuex from 'vuex'
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
import mobile from './components/mobileNav'
import dashBoard from './components/dashboard'
import admin from './components/adminPortal'
import 'es6-promise/auto'
import adminLogin from './components/adminLogin'
import workoutSelect from './components/workoutSelect'
import workoutComplete from './components/workoutComplete'
import payment from './components/payment'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
//  Vue.use(Vuex);
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
    {path: '/nav', component: mobile},
    {path: '/dashboard', component: dashBoard},
    {path: '/admin',name:'admin', component: admin,  },
    // meta:{requiresAuth:true  }
    {path:'/adminLogin',name:'adminLogin',component:adminLogin},
    {path: '/select',component:workoutSelect},
    {path: '/complete',component:workoutComplete},
    {path: '/payment', component:payment}

   
  ],
  mode:'history',

 
  
},

)
//  router.beforeEach((to,from,next)=>{
//    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//    const isAuthenticated = firebase.auth().currentUser;
//    console.log('isauthenticated',isAuthenticated);
//    if(requiresAuth && !isAuthenticated){
//      next('/admin');
//    }else{
//      next('/');
//    }
//  });

new Vue({
  router,
  render: h => h(App),
   store:store,
   router:router
}).$mount('#app')
