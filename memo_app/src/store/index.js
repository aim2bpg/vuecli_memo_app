import Vue from 'vue'
import createdPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createdPersistedState()],
  state: {
    memos: []
  },
  mutations: {
    create (state, memo) {
      memo.id = state.memos.length + 1
      state.memos.push(memo)
    },
    update (state, data) {
      const updatedData = state.memos.find(memo => memo.id === data.id)
      updatedData.body = data.body
    },
    destroy (state, id) {
      state.memos = state.memos.filter(memo => memo.id !== id)
    }
  }
})
