<template>
  <main class="board">
    <p>main</p>
    <p>numbers: {{ numbers }}</p>
    <button @click="sort">sort</button>
  </main>
</template>

<script>
import store from "../store/store";

import { mapState } from "vuex";

export default {
  name: "Board",
  computed: {
    ...mapState([
      "numbers",
    ]),
  },
  data() {
    return {};
  },
  methods: {
    sort() {
      let result = this.bubbleSort(this.numbers);
      this.update_numbers(result);
    },
    bubbleSort(arr) {
      let len = arr.length;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
          if (arr[j] > arr[j + 1]) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
          }
        }
      }
      return arr;
    },
    update_numbers(new_array) {
      store.commit("SET_NUMBERS", new_array);
    },
  },
};
</script>

<style scoped></style>
