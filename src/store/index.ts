import { createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions, } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export const store = createStore({
  state: {
    userData:[],
    isLogedIn:false
  },
  mutations: {
    isLogedIn: (state,payload)=> state.isLogedIn=payload,

  },
  actions: {
    isLogedIn({ commit},payload) {
      console.log(payload,"payload")
      commit('isLogedIn',payload)
    },
  },
  modules: {
  },
  plugins: [createPersistedState()],

})
export function useStore() {
  return store 
}