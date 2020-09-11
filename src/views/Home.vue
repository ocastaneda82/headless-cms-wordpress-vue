<template>
  <div class="home b-page-cont">
    <b-container>
      <b-row>
        <b-col>
          <h1>Home</h1>
          <Data />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Data from "@/components/Data";
export default {
  name: "Home",
  components: {
    Data,
  },
};
</script>

<style></style>
