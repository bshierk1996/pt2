import axios from 'axios'

const state = {
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
            id:1,
            name: 'dsa'
        }
    ]
};

const getters = {
    allTodos: (state) => state.todos,
    allFiles: (state) => state.file
    
};

const actions = {
    fetchTodos({ commit }, response){
        console.log('fetching all of the todos');
        commit('setTodos', respose.data)
    },
    addFile({ commit }, file) {
        const displayFile = this.file
    }
    
};

const mutations = {
    setTodos:(state,todos) => (state.todos = todos),
    setFile:(state,file) => (state.file = file)
};

export default {
    state,
    getters,
    actions,
    mutations
}