<template>
  <div>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>{{ info.content.rendered }}</b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Data",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("http://tracking:8888/wp-json/wp/v2/posts/9")
      .then((response) => (this.info = response.data));
  },
};
</script>

<style></style>
