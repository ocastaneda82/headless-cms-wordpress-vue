<template>
  <div class="data-user">
    <h1>Hola, {{info.name}}</h1>
    <h2>Tu correo es: {{info.email}}</h2>
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
// import axios from "axios";
// import DataUserEdit from "@/components/DataUserEdit";

export default {
  // components: {
  //   DataUserEdit,
  // },
  data() {
    return {
      info: {
        // le paso algo al iniciar para evitar el error
        email: "",
        name: "",
        description: "",
        url: "",
        id: "",
      },
    };
  },
  mounted() {
    this.info.email = store.state.user.user_email;
    this.info.name = store.state.name;
    this.info.description = store.state.description;
    this.info.url = store.state.url;
    this.info.id = store.state.id;
  },
  methods: {
    unLogin() {
      // store.commit("DELETE_USER");
      store.commit("DELETE_DATA_USER", null);
      this.$router.push("/login");
    },
    editInfo() {
      this.$router.push("/edit");
    },
  },
};
</script>
