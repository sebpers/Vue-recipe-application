<template>
  <v-card>
    <v-snackbar
      v-model="snackbar"
      :color="color"
      :multi-line="mode === 'multi-line'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn dark text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      color: "success",
      mode: "",
      snackbar: true,
      text: "Recipe added",
      timeout: 2000,
      x: null,
      y: "top"
    };
  }
};
</script>