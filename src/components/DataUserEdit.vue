<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Nombre de usuario:" label-for="nombre">
        <b-form-input id="nombre" v-model="form.name" type="text" placeholder="Nombre de usuario"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Sitio web:" label-for="url">
        <b-form-input id="url" v-model="form.url" type="text" placeholder="Sitio web de usuario"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Sitio web:" label-for="description">
        <b-form-textarea
          id="description"
          v-model="form.description"
          placeholder="Descripción"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import store from "../store";
import axios from "axios";

// console.log(id, token);

export default {
  data() {
    return {
      form: {
        name: "",
        url: "",
        description: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const token = store.state.user.token;
      const id = store.state.id;
      axios
        .post(
          "https://vuejs.digitalactive.info/wp-json/wp/v2/users/" + id,
          {
            name: this.form.name,
            url: this.form.url,
            description: this.form.description,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(() => this.$router.push("/user"))
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>