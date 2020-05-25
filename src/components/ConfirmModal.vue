<!-- Currently not available -->

<template>
  <v-row justify="center">
    <v-btn color="primary" dark @click.stop="dialog = confirmModal">Open Dialog</v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Remove favorite?</v-card-title>

        <v-card-text>Are you sure you want to remove "" from favorites?</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">Nej</v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">Ja</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["confirmModal"],

  data() {
    return {
      dialog: true
    };
  }
};
</script>

<style>
</style>