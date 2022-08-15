import { login } from "@/api/user"
import { setToken, getToken, removeToken } from "@/utils/auth"
const state = {}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state: {
    token: getToken()
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    removeToken (state) {
      state.token = null
      removeToken()
    }
  },
  actions: {
    // todo 通过接口获取token
    // todo 通过actions方法触发 token存储猿 commit。setToken
    async login ({ commit }, data) {
      const res = await login(data)
      console.log(res)
      commit('setToken', res.data.data)
    }
  }
}
