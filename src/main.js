import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import mealplan from './components/mealPlanSection.vue'
import workouts from './components/workouts'
import realtime from './components/realTimeSection'
import signup from './components/signupForm'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

const router = new VueRouter({
  routes:[

    {path: '/mealplan', component: mealplan},
    {path:'/workouts',component: workouts},
    {path: '/realtime', component: realtime},
    {path: '/signupForm', component: signup}
  ],
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
