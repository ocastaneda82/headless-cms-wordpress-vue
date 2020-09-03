<template>
  <div>
    <b-form
      @submit="onSubmit"
      v-if="show"
      action="https://vuejs.org/"
      method="post"
    >
      <b-form-group id="input-group-4" label="User:" label-for="input-user">
        <b-form-input
          id="input-user"
          v-model="form.user"
          required
          placeholder="Enter user"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Your Name:"
        label-for="input-password"
      >
        <b-form-input
          id="input-password"
          v-model="form.password"
          required
          type="password"
          placeholder="Enter your password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Formulario",
  data() {
    return {
      form: {
        user: "",
        password: "",
        // food: null,
        // checked: [],
      },
      // foods: [
      //   { text: "Select One", value: null },
      //   "Carrots",
      //   "Beans",
      //   "Tomatoes",
      //   "Corn",
      // ],
      show: true,
    };
  },
  mounted() {
    var session_url = "http://tracking:8888/wp-json/wp/v2/posts/1";
    var username = "admin";
    var password = "adminadmin";
    var credentials = btoa(username + ":" + password);
    var basicAuth = "Basic " + credentials;
    axios
      .post(
        session_url,
        {
          title: "Oscar Pruebaaa",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis alias qui illum labore laudantium, quasi excepturi numquam maxime consequatur. Odit officia corrupti quam velit? Aliquid labore pariatur suscipit ex obcaecati!",
        },
        {
          headers: { Authorization: +basicAuth },
          auth: {
            username: username,
            password: password,
          },
        }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      // conectarWp(this.form.user, this.form.password);
    },
  },
};
// const conectarWp = (username, password) => {

// };
</script>
