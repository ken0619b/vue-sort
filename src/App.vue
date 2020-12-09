<template>
  <div id="app">
    <Toolbar />
    <Board />
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Board from "./components/Board";

export default {
  name: "App",
  components: {
    Board,
    Toolbar,
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
