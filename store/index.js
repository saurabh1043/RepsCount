import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      rep: [
        { state: 'workout', minutes: 0, seconds: 20 },
        { state: 'rest', minutes: 0, seconds: 10 }
      ],
      reset: false,
      continueCount: false
    },
    getters: {
      rep (state) {
        return state.rep
      },
      resetted (state) {
        return state.reset
      },
      continueCount (state) {
        return state.continueCount
      }
    },
    mutations: {
      reset (state, payload) {
        state.reset = payload
      },
      continueCount (state, payload) {
        state.continueCount = payload
      }
    }
  })
}

export default createStore
