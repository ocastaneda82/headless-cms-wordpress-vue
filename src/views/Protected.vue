<template>
  <div class="protected b-page-cont">
    <b-container>
      <b-row>
        <b-col>
          <h1>Hola, {{usuario.nombre}}</h1>
          <h2>Tu correo es: {{usuario.email}}</h2>
          <h3>This is a protected page page</h3>
          <div>{{ info }}</div>

          <p>Only logged in users are going to be able to see this page</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import store from "../store";
import axios from "axios";

console.log("info: " + JSON.stringify(store.state.user));
const nombre = store.state.user.user_display_name;
const email = store.state.user.user_email;
const usuarioNice = store.state.user.user_nicename;

console.log(usuarioNice);
export default {
  name: "Protected",
  data() {
    return {
      usuario: {
        nombre: nombre,
        email: email,
      },
      info: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://vuejs.digitalactive.info/wp-json/wp/v2/users/?username=" +
          usuarioNice
      )
      .then((response) => (this.info = response.data));
  },
};
</script>
