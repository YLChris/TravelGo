import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({ // 这里是导出通过vuex创建的的store仓库
  state: state, // 此时即可引用到state.js里的公用数据
  mutations: mutations
})
