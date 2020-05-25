<template>
  <v-row class="mt-5 mr-0">
    <v-col class="mx-auto" cols="10" md="4">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search recipe"
        class="text-field-color"
      >
        <v-icon
          text
          slot="append"
          v-if="search.length > 0"
          @click="search = ''"
        >mdi-alpha-x-circle</v-icon>
      </v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },

  watch: {
    search: function(newVal) {
      this.$store.commit("searchRecipe", newVal);
    }
  },

  beforeDestroy() {
    this.$store.commit("searchRecipe", '');
  }
};
</script>

<style scoped>
  .text-field-color >>> .v-input__slot::before,
  .text-field-color >>> .v-input__slot::after,
  .text-field-color >>> .v-text-field__slot input,
  .text-field-color >>> .v-text-field__slot label,
  .text-field-color >>> .v-text-field__slot .primary--text,
  .text-field-color >>> .v-input__icon .v-icon::before {
    color: #fff !important;
    border-color: #fff !important;
    font-weight: 500;
  }
</style>