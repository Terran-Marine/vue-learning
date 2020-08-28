import Vue from "vue";
import Vuex from "vuex";
import homeStore from "@/store/homeStore";

Vue.use(Vuex);

const INCREMENT1='increment1';

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
    [INCREMENT1](){}

  },
  actions: {
    //异步操作

    upDataInfo(context){
      setTimeout(()=>{
        context.commit(INCREMENT1);
      },1000)
    }

  },
  getters: {
    //相当于计算属性
    powerCount(state) {
      return state.count * state.count;
    }
  },
  modules: {
    home:homeStore,
  }
});

export default store