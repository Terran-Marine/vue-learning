import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 50
  },
  mutations: {
    //同步操作
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },

  },
  actions: {
    //异步操作
  },
  getters: {},
  modules: {}
});

export default store