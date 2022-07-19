import UserApi from '@/api/user'
import { setItem, getItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    token: getItem('token') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    }
  },
  actions: {
    async Login({ commit }, loginForm) {
      const token = await UserApi.Login(loginForm)
      commit('setToken', token)
      return token
    }
  }
}
