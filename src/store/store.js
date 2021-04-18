import { createStore } from 'vuex'

export default createStore({
  state: {
    token: sessionStorage.getItem('token'),
    name: '',
    code: '',
    navType: sessionStorage.getItem('type')
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
    },
    setNavTrue(state){
      state.navType = true;
    },
    setNavFalse(state){
      state.navType = false;
    }
  }
})
