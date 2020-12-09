<template>
  <div class="toolbar">
    <div class="title">vue-sort</div>
    <div>numbers: {{ numbers.length }}</div>
    <button @click="sort">sort</button>
  </div>
</template>

<script>
import store from "../store/store";
import { mapState } from "vuex";

export default {
  name: "Toolbar",
  computed: {
    ...mapState(["numbers"]),
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

<style scoped>
.toolbar {
  width: 1024px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 10px;
}
.title {
  font-size: 20px;
  margin-right: 10px;
}
</style>
