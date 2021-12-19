import { createStore } from 'vuex'

export default createStore({
  state: {
    count:1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
