import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex);

 const store = new Vuex.Store({
   state:{
     authenticated: false,
     imgToShow: 'TEST TITLE',
    //  allImgs: [],
   },
   mutations:{
     setAuthentication(state, status){
       state.authenticated = status;
     },
     showImg(state, status){
       state.imgToShow = status;
     }
    },
    actions: {
      showImgAction({ commit }, status) {
        commit('showImg', status);
      }
    },
    getters: {
        getImgUrl: state => state.imgToShow
    }
 })

export default store;