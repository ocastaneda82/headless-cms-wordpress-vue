<template>
  <div class="register b-page-cont">
    <b-container>
      <b-row>
        <b-col>
          <h1>Register</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <RegisterForm />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import RegisterForm from "@/components/RegisterForm";
import RegisterForm from "@/components/RegisterForm";
export default {
  name: "Register",
  components: {
    RegisterForm,
    // RegisterForm,
  },
};
</script>
