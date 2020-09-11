<template>
  <div class="edit b-page-cont">
    <b-container>
      <b-row>
        <b-col>
          <DataUserEdit />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DataUserEdit from "@/components/DataUserEdit";

export default {
  name: "Edit",
  components: {
    DataUserEdit,
  },
};
</script>
