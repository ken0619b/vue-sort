<template>
  <div class="controller">
    <div>{{ value }}</div>
    <button @click="sort">sort</button>
    <vue-slider
      @change="changeHandle"
      :width="1600"
      :min="4"
      :max="128"
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
      value: 16,
      procedures: [],
      process_item: null,
      loopObj: null,
    };
  },
  mounted() {
    store.commit("GENERATE_NUMBERS", 16);
  },
  beforeDestroy() {
    clearInterval(this.loopObj);
  },
  computed: {
    ...mapState(["numbers"]),
  },
  methods: {
    sort() {
      // todo: processを貯める処理をもう少し工夫できるはず
      let originalArray = this.numbers.slice(0, this.numbers.length);
      let sortedArray = this.bubbleSort(originalArray);
      console.log(sortedArray.map((item) => `${item.id}-${item.value}`));

      let processing_array = this.numbers.slice(0, this.numbers.length);
      let procedures_copy = this.procedures;

      this.loopObj = setInterval(() => {
        let process_item = procedures_copy[0];

        switch (process_item.action) {
          case "comparison": {
            let comparing_ids = [
              process_item.value1.id,
              process_item.value2.id,
            ];

            for (let i = 0; i < processing_array.length; i++) {
              if (
                processing_array[i].id == comparing_ids[0] ||
                processing_array[i].id == comparing_ids[1]
              ) {
                processing_array[i].status = "comparing";
              }
            }

            break;
          }
          case "swapping": {
            let swapping_from_index;
            let swapping_to_index;

            for (let i = 0; i < processing_array.length; i++) {
              if (processing_array[i].id == process_item.value1.id) {
                processing_array[i].status = "swapping";
                swapping_from_index = i;
              }

              if (processing_array[i].id == process_item.value2.id) {
                processing_array[i].status = "swapping";
                swapping_to_index = i;
              }
            }

            // todo:swap処理
            let swapping_from = processing_array[swapping_from_index];
            let swapping_to = processing_array[swapping_to_index];
            processing_array[swapping_to_index] = swapping_from;
            processing_array[swapping_from_index] = swapping_to;

            break;
          }
        }
        // 変更を反映
        this.update_numbers(processing_array);
        // console.log(processing_array.map((item) => `${item.id}-${item.value}-${item.status}`))

        // 終了チェック
        procedures_copy.splice(0, 1);

        if (procedures_copy.length == 0) {
          clearInterval(this.loopObj);
        }
      }, 10);
    },
    bubbleSort(arr) {
      let len = arr.length;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
          if (arr[j].value > arr[j + 1].value) {
            this.procedures.push({
              action: "comparison",
              value1: arr[j],
              value2: arr[j + 1],
            });
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;

            // 未スワップの配列を格納
            this.procedures.push({
              action: "swapping",
              value1: arr[j + 1],
              value2: arr[j],
            });
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
