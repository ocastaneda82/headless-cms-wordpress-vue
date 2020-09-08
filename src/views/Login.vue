<template>
  <div class="login b-page-cont">
    <b-container>
      <b-row>
        <b-col><h1>Login</h1></b-col>
      </b-row>
      <b-row>
        <b-col><LoginForm /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import LoginForm from "@/components/LoginForm";
import LoginForm from "@/components/LoginForm";
export default {
  name: "Login",
  components: {
    LoginForm,
    // LoginForm,
  },
};
</script>
