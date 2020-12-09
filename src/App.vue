<template>
  <div id="app">
    <Header />
    <Board :items="items" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Board from "./components/Board";

export default {
  name: "App",
  components: {
    Header,
    Board,
  },

  data() {
    return {
      items: [1, 2, 5, 3, 2, 6, 8, 10, 321, 352, 462, 214, 64],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
