<template>
  <div id="app">
    <Header />
    <Controller />
    <Board />
  </div>
</template>

<script>
import Header from "./components/Header";
import Controller from "./components/Controller";
import Board from "./components/Board";

export default {
  name: "App",
  components: {
    Board,
    Header,
    Controller,
  },

  data() {
    return {};
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
  margin-top: 10px;
}
</style>
