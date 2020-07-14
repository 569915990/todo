import * as types from 'store/mutation-types'

const mutations = {
  [types.ADD_ITEM] (state, item) {
    state.todoItems.push(item)
  },
  [types.DELETE_ITEM] (state, id) {
    for (let n in state.todoItems) {
      if (state.todoItems[n].id === id) {
        state.todoItems.splice(id, 1)
        break
      }
    }
  },
  [types.TOGGLE_STATE] (state, id) {
    for (let n in state.todoItems) {
      if (state.todoItems[n].id === id) {
        state.todoItems[n].isComplete = !state.todoItems[n].isComplete
        break
      }
    }
  }
}

export default mutations
