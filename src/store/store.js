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
    files:[
    ]
  },
  mutations: {
    setTodos:(state,todos) => (state.todos = todos),
    setFile:(state, file) => {
      console.log("Reached the add file mutation")
      // Add to the array
      // state.files = [ ...state.files, file ]
      // state.files.push(file)
      Vue.set(state.files, state.files.length, file);

      console.log('Here is the new state:')
      console.log(state)
    }
  },
  actions: {
    fetchTodos({ commit }, response){
      console.log('fetching all of the todos');
      commit('setTodos', response.data)
    },
    addFile({ commit }, file) {
        // const displayFile = file
        console.log('Reached the addfile action!')
        commit('setFile', file)
    }

  },
  getters: {
    allTodos: (state) => state.todos,
    allFiles: (state) => state.files
  }
})

export default store;