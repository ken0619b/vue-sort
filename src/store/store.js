import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    numbers: [1, 2, 5, 3, 2, 6, 8, 10, 321, 352, 462, 214, 64],
    sample: 'aaa'
  },

  getters: {},

  mutations: {
    SET_NUMBERS(state, data) {
      Vue.set(state, 'numbers', [...data]);
    },
  },

  actions: {
    setNumbers({ commit }, errors) {
      commit("SET_NUMBERS", errors);
    },
  },
});

export default store;
