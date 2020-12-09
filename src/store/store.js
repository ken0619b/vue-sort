import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 最大：64を想定
    numbers: [
      {
        id: 1,
        value: 5,
      },
      {
        id: 2,
        value: 13,
      },
      {
        id: 3,
        value: 12,
      },
      {
        id: 4,
        value: 14,
      },
      {
        id: 5,
        value: 2,
      },
      {
        id: 6,
        value: 5,
      },
      {
        id: 7,
        value: 6,
      },
      {
        id: 8,
        value: 7,
      },
      {
        id: 1,
        value: 5,
      },
      {
        id: 2,
        value: 13,
      },
      {
        id: 3,
        value: 12,
      },
      {
        id: 4,
        value: 14,
      },
      {
        id: 5,
        value: 2,
      },
      {
        id: 6,
        value: 5,
      },
      {
        id: 7,
        value: 6,
      },
      {
        id: 8,
        value: 7,
      },
      {
        id: 1,
        value: 5,
      },
      {
        id: 2,
        value: 13,
      },
      {
        id: 3,
        value: 12,
      },
      {
        id: 4,
        value: 14,
      },
      {
        id: 5,
        value: 2,
      },
      {
        id: 6,
        value: 5,
      },
      {
        id: 7,
        value: 6,
      },
      {
        id: 8,
        value: 7,
      },
      {
        id: 1,
        value: 5,
      },
      {
        id: 2,
        value: 13,
      },
      {
        id: 3,
        value: 12,
      },
      {
        id: 4,
        value: 14,
      },
      {
        id: 5,
        value: 2,
      },
      {
        id: 6,
        value: 5,
      },
      {
        id: 7,
        value: 6,
      },
      {
        id: 8,
        value: 7,
      },
      {
        id: 1,
        value: 5,
      },
      {
        id: 2,
        value: 13,
      },
      {
        id: 3,
        value: 12,
      },
      {
        id: 4,
        value: 14,
      },
      {
        id: 5,
        value: 2,
      },
      {
        id: 6,
        value: 5,
      },
      {
        id: 7,
        value: 6,
      },
      {
        id: 8,
        value: 7,
      },
      {
        id: 1,
        value: 5,
      },
      {
        id: 2,
        value: 13,
      },
      {
        id: 3,
        value: 12,
      },
      {
        id: 4,
        value: 14,
      },
      {
        id: 5,
        value: 2,
      },
      {
        id: 6,
        value: 5,
      },
      {
        id: 7,
        value: 6,
      },
      {
        id: 8,
        value: 7,
      },
      {
        id: 1,
        value: 5,
      },
      {
        id: 2,
        value: 13,
      },
      {
        id: 3,
        value: 12,
      },
      {
        id: 4,
        value: 14,
      },
      {
        id: 5,
        value: 2,
      },
      {
        id: 6,
        value: 5,
      },
      {
        id: 7,
        value: 6,
      },
      {
        id: 8,
        value: 7,
      },
      {
        id: 1,
        value: 5,
      },
      {
        id: 2,
        value: 13,
      },
      {
        id: 3,
        value: 12,
      },
      {
        id: 4,
        value: 14,
      },
      {
        id: 5,
        value: 2,
      },
      {
        id: 6,
        value: 5,
      },
      {
        id: 7,
        value: 6,
      },
      {
        id: 8,
        value: 7,
      },
    ],
  },

  getters: {},

  mutations: {
    SET_NUMBERS(state, data) {
      // numberオブジェクトのかたちに治す
      Vue.set(state, "numbers", [...data]);
    },
  },

  actions: {
    setNumbers({ commit }, errors) {
      commit("SET_NUMBERS", errors);
    },
  },
});

export default store;
