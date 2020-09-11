<template>
  <div class="protected b-page-cont">
    <b-container>
      <b-row>
        <b-col>
          <DataUser />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DataUser from "@/components/DataUser";

export default {
  name: "Protected",
  components: {
    DataUser,
  },
};
</script>
