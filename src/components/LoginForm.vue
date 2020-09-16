<template>
  <div>
    <b-form @submit.prevent="login()" v-if="show">
      <b-form-group id="input-group-1" label="Username:" label-for="username">
        <b-form-input
          id="username"
          v-model="form.username"
          type="text"
          required
          placeholder="Username"
        ></b-form-input>
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
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    async login() {
      // login() {
      try {
        // envio los datos del form y espero una respuesta
        // eslint-disable-next-line no-unused-vars
        const { result } = await this.$store.dispatch("login", this.form);
        // ahora monto los datos del usuario en el store y espero una respuesta
        // eslint-disable-next-line no-unused-vars
        const { resultMontar } = await this.$store.dispatch(
          "montarDataUsuario"
        );
        // ahora sigo con lo demás
        const { redirect = false } = this.$route.query;
        const path = redirect ? decodeURI(redirect) : "/";
        this.$router.push({ path });
      } catch (e) {
        console.log("Error:");
        console.log(e);
      }
    },
  },
};
</script>
