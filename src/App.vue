<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <Formulario />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Formulario from "./components/Formulario.vue";

export default {
  name: "App",
  components: {
    Formulario,
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
