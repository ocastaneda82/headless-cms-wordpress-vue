<template>
  <div class="protected b-page-cont">
    <b-container>
      <b-row>
        <b-col>
          <h1>User's page</h1>
          <h3>This is a protected page page</h3>
          <p>Only logged in users are going to be able to see this page</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Protected",
};
</script>
