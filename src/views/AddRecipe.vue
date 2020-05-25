<template>
  <div>
    <v-card height="100vh">
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <h1 class="new-recipe-header mx-auto mt-10 display-2" md="12">New recipe</h1>
            <v-col class="mx-auto" cols="12" md="10">
              <v-text-field v-model="title" label="Title" required />
            </v-col>

            <v-col class="mx-auto" cols="12" md="10">
              <v-text-field v-model="imageUrl" label="Image url" required />
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="description"
                class="mx-auto"
                style="maxWidth: 600px;"
                outlined
                label="Outlined textarea"
                placeholder="Add description..."
              />
            </v-col>
          </v-row>
        </v-container>

        <v-card-actions style="maxWidth: 500px;" class="mx-auto">
          <v-btn color="error" class="mx-auto" @click="reset">Reset fields</v-btn>
          <v-btn color="success" class="mx-auto" @click="addRecipe">Add recipe</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <Snackbar v-if="snackbar === true"></Snackbar>
  </div>
</template>

<script>
import Snackbar from "../components/Snackbar.vue";

export default {
  components: {
    Snackbar
  },
  data: () => ({
    valid: false,
    title: "",
    description: "",
    imageUrl: "",
    snackbar: false
  }),

  methods: {
    reset() {
      this.title = "";
      this.description = "";
      this.imageUrl = "";
    },

    addRecipe() {
      if (this.title.trim() && this.description) {
        const randomImage = Math.floor(Math.random() * 301);

        const newRecipe = {
          title: this.title,
          description: this.description,
          randomImageId: randomImage,
          source: this.imageUrl.length && this.imageUrl.startsWith('http')
            ? this.imageUrl
            : `https://i.picsum.photos/id/${randomImage}/200/300.jpg`,
          favorite: false
        };

        this.$store.commit("addNewRecipe", newRecipe);

        this.snackbar = !this.snackbar;

        this.title = "";
        this.description = "";
        this.imageUrl = "";
      }
    },
  }
};
</script>

<style scoped>
  .new-recipe-header {
    font-family: 'Great Vibes', cursive !important;
    background-color: #fff !important;
  }
</style>