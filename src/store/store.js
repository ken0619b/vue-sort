import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    numbers: [
      {
        id: 1,
        value: 5,
        status: [],
      },
      {
        id: 8,
        value: 7,
        status: [],
      },
      {
        id: 2,
        value: 13,
        status: [],
      },
      {
        id: 3,
        value: 12,
        status: [],
      },
      {
        id: 4,
        value: 14,
        status: [],
      },
      {
        id: 5,
        value: 2,
        status: [],
      },
      {
        id: 6,
        value: 5,
        status: [],
      },
      {
        id: 7,
        value: 46,
        status: [],
      },
    ],
  },

  getters: {},

  mutations: {
    SET_NUMBERS(state, data) {
      Vue.set(state, "numbers", [...data]);
    },
    GENERATE_NUMBERS(state, max) {
      let data = [];
      for (let i = 0; i < max; i++) {
        let generated_value = random();
        data.push({ id: i, value: generated_value, status: [] });
      }
      Vue.set(state, "numbers", [...data]);
    },
  },

  actions: {
    setNumbers({ commit }, errors) {
      commit("SET_NUMBERS", errors);
    },
    generateNumbers({ commit }, errors) {
      commit("GENERATE_NUMBERS", errors);
    },
  },
});

function random() {
  return Math.max(Math.floor(Math.random() * Math.floor(64)), 1);
}

export default store;
