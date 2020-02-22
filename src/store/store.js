import Vue from 'vue'
import Vuex from 'vuex'
// import cmsStore from './modules/cms'
 
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos:[
      {
          id: 1,
          name: 'todo 1'
      },
      {
          id: 2,
          name: 'todo2'
      }
    ],
    file:[
        {
            
        }
    ]
  },
  mutations: {
    setTodos:(state,todos) => (state.todos = todos),
    setFile:(state,file) => {
      // Add to the array
      state.file = [ ...state.file, file ]
    }
  },
  actions: {
    fetchTodos({ commit }, response){
      console.log('fetching all of the todos');
      commit('setTodos', response.data)
    },
    addFile({ commit }, file) {
        // const displayFile = file
        commit('setFile', file)
    }

  },
  getters: {
    allTodos: (state) => state.todos,
    allFiles: (state) => state.file
  }
})

export default store;