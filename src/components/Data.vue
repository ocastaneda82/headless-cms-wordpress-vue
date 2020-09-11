<template>
  <b-card-group deck>
    <b-card
      v-for="(item, i) in info"
      :key="i"
      :title="item.name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
    >
      <b-card-text>{{item.description}}</b-card-text>

      <b-button target="_blank" :href="item.url" variant="primary">{{item.url}}</b-button>
    </b-card>
  </b-card-group>
  <!-- <pre>{{info}}</pre> -->
</template>

<script>
import axios from "axios";
export default {
  name: "Data",
  data() {
    return {
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
      .get("https://vuejs.digitalactive.info/wp-json/wp/v2/users")
      .then((response) => (this.info = response.data));
  },
};
</script>

<style></style>
