<template>
  <div class="data-user">
    <h1>Hola, {{info.name}}</h1>
    <h2>Tu correo es: {{usuario.email}}</h2>
    <h2>
      Tu sitio web es:
      <a :href="info.url" target="_blank">{{ info.url }}</a>
    </h2>
    <div>{{ info.description }}</div>
    <div>
      <b-button v-on:click.prevent="unLogin()" variant="danger">Salir</b-button>
      <b-button v-on:click.prevent="editInfo()">Editar</b-button>
    </div>

    <!-- <pre>{{ info.id }}</pre> -->
    <!-- <pre>{{ info }}</pre> -->
  </div>
</template>

<script>
import store from "../store";
import axios from "axios";
// import DataUserEdit from "@/components/DataUserEdit";

const email = store.state.user.user_email;
const usuarioNice = store.state.user.user_nicename;

export default {
  // components: {
  //   DataUserEdit,
  // },
  data() {
    return {
      usuario: {
        email: email,
      },
      info: {
        // le paso algo al iniciar para evitar el error
        name: "",
        description: "",
        url: "",
        id: "",
      },
    };
  },
  mounted() {
    axios
      .get(
        "https://vuejs.digitalactive.info/wp-json/wp/v2/users/?slug=" +
          usuarioNice
      )
      .then((response) => {
        store.commit("SET_ID", response.data[0].id);
        this.info = response.data[0];
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    unLogin() {
      store.commit("DELETE_USER");
      store.commit("DELETE_ID");
      this.$router.push("/login");
    },
    editInfo() {
      this.$router.push("/edit");
    },
  },
};
</script>
