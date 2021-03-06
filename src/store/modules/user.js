import UserApi from '@/api/user'
import {
  setItem,
  removeItem
} from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    }
  },
  actions: {
    async login({
      commit
    }, loginForm) {
      const res = await UserApi.Login(loginForm)
      commit('setToken', res.data.data.token)
      return res.data.data.token
    },
    async logout({
      commit
    }) {
      await UserApi.logout()
      commit('setToken', '')
      removeItem('token')
      return true
    }
  }
}
