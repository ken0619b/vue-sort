<template>
  <div class="controller">
    <div>{{ value }}</div>
    <button @click="sort">sort</button>
    <vue-slider
      @change="changeHandle"
      :width="1024"
      :min="4"
      :max="64"
      :interval="1"
      v-model="value"
    />
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import store from "../store/store";
import { mapState } from "vuex";

export default {
  name: "Controller",
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 4,
    };
  },
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
        for (let j = 0; j < len - 1; j++) {
          if (arr[j].value > arr[j + 1].value) {
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
    changeHandle(event) {
      store.commit("GENERATE_NUMBERS", event);
    },
  },
};
</script>

<style scoped>
.controller {
  margin-bottom: 10px;
  margin: auto;
}
</style>
