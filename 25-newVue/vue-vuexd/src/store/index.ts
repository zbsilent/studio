import { createStore } from 'vuex'

export default createStore({
  state: {
    count:1
  },
  mutations: {
    increment (state) {
      // εζ΄ηΆζ
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
