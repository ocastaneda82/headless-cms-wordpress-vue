<template>
  <div class="data-user">
    <h1>Hola, {{info.name}}</h1>
    <h2>Tu correo es: {{usuario.email}}</h2>
    <h2>
      Tu sitio web es:
      <a :href="info.url" target="_blank">{{ info.url }}</a>
    </h2>
    <div>{{ info.description }}</div>
    <pre>{{ info }}</pre>
  </div>
</template>

<script>
import store from "../store";
import axios from "axios";

const email = store.state.user.user_email;
const usuarioNice = store.state.user.user_nicename;

export default {
  data() {
    return {
      usuario: {
        email: email,
      },
      info: {
        // le paso algo al iniciar para evitar el error
        name: "Tu nombre",
        description: "Tu descripción",
        url: "Tu sitio web",
      },
    };
  },
  mounted() {
    axios
      .get(
        "https://vuejs.digitalactive.info/wp-json/wp/v2/users/?slug=" +
          usuarioNice
      )
      .then((response) => (this.info = response.data[0]));
  },
};
</script>
