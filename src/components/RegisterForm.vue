
  <template>
  <div>
    <div class="mensajes">
      <b-alert variant="success" show v-if="exito">Registro exitoso</b-alert>
      <b-link class="btn btn-secondary" to="/login" v-if="exito">Ir al login</b-link>
    </div>

    <b-alert variant="danger" show v-if="falla">Registro fallido</b-alert>
    <b-form @submit.prevent="registro()" v-if="show">
      <b-form-group id="input-group-1" label="Username:" label-for="username">
        <b-form-input
          id="username"
          v-model="form.username"
          type="text"
          required
          placeholder="Username"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Email:" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" required placeholder="Email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          required
          type="password"
          placeholder="•••••••••••"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Sign In</b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
      show: true,
      exito: false,
      falla: false,
    };
  },
  methods: {
    registro() {
      // this.exito = true;
      // this.show = false;
      axios
        .post(`https://vuejs.digitalactive.info/wp-json/wp/v2/users/register`, {
          username: this.form.username,
          email: this.form.email,
          password: this.form.password,
        })
        .then((response) => {
          console.log(response.data);
          this.exito = true;
          this.show = false;
          // mostrarExito();
        })
        .catch((e) => {
          console.log(e);
          this.falla = true;
        });

      // const mostrarExito = () => {
      //   console.log("Registro exitoso");
      //   // this.$router.push("/login");
      // };
    },
  },
};
</script>

<style>
</style>