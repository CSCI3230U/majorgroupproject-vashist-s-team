import { createStore } from 'vuex'

export default createStore({
  state: {
    token: sessionStorage.getItem('token'),
    name: '',
    code: ''
  },
  mutations:{
    setToken(state,tokens){
      state.token = tokens
      
    },
    setName(state, names){
      state.name = names
    },
    setCode(state,codes){
      state.code = codes
    }

  }
})
