import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex);

 const store = new Vuex.Store({
   state:{
     authenticated: false,
     imgToShow: '',
    //  allImgs: [],
   },
   mutations:{
     setAuthentication(state, status){
       state.authenticated = status;
     },
     showImg(state, status){
         console.log('The mutation received this:')
         console.log(status)
       state.imgToShow = status;
     }
    },
    actions: {
      showImgAction({ commit }, status) {
          console.log('The action received this: ')
          console.log(status);
        commit('showImg', status);
      }
    },
    getters: {
        getImgUrl: state => state.imgToShow
    }
 })

export default store;