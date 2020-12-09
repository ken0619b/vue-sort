<template>
  <main class="board">
    <p>main</p>
    <p>items: {{ items }}</p>
    <button @click="sort">sort</button>
  </main>
</template>

<script>
export default {
  name: "Board",
  props: {
    items: Array,
  },
  methods: {
    sort() {
      alert("sorted");
      alert(this.items);
      let result = this.bubbleSort(this.items);
      alert(result);
    },
    bubbleSort(arr) {
    console.log('sorting...');
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
  },
};
</script>

<style scoped></style>
