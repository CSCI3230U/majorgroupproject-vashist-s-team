
import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    token: sessionStorage.getItem('token'),
    name: '',
    code: '',
    navType: sessionStorage.getItem('type'),
    auth: false
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
    },
    setAuth(state,value){
      state.auth = value
    },
    setTest(state){
      axios.get('http://localhost:4000/verifyIfAdmin')
        .then((response)=>{
          state.auth = response['data']
        })
        .catch((error)=>{
          console.log(error)
        })
      }
    
    
      
    }
})