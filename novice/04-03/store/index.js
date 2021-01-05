import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [
      {
      name: 'Aku Anak Frontend',
      address: 'Jl. Kaliurang',
      program: 'Frontend',
      isApproved: true
    },
    {
      name: 'Aku Anak Frontend 2',
      address: 'Jl. Tamsis',
      program: 'Frontend',
      isApproved: false
    },
    {
      name: 'Aku Anak Backend',
      address: 'Jl. Cinta',
      program: 'Backend',
      isApproved: false
    },
    {
      name: 'Aku Anak Mobile',
      address: 'Jl. Pakem',
      program: 'Mobile',
      isApproved: true
    },
  ]
  },
  mutations:{
    addUser(state, payload){
      state.user.push(payload)
    },
  },
  actions:{
    // getUser(store, payload){
    //   store.commit('addUser', payload)
    // }
  },
  getters:{
  },
  modules: {
  }
})
