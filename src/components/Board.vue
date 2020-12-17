<template>
  <div>
    <main class="bodyContainer">
      <div
        v-for="number in numbers"
        v-bind:style="{ width: 1024 / numbers.length + 'px', height: number.value * 15 + 'px' }"
        :key="number.id"
        class="arrayElement"

      >
        {{ number.value }}
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Board",
  computed: {
    ...mapState(["numbers"]),
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.bodyContainer {
  width: 100%;
  height: 100%;
  background-color: rgb(230, 230, 230);
  text-align: center;
}

.arrayElement {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
  color: transparent;
  background-color: rgba(35, 189, 245, 0.8);
  font-size: 12px;
  font-family: sans-serif;
  font-weight: 700;
  color: white;
  display: inline-block;
}

</style>
