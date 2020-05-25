<template>
  <div class="card-wrapper">
    <v-card
      class="mx-2 mb-4"
      max-width="360px"
      min-width="360px"
      v-for="recipe in recipes"
      :key="recipe.id"
    >
      <v-container class="py-0 px-0">
        <v-row dense>
          <v-col class="py-0">
            <v-card>
              <v-img
                :src="recipe.source"
                class="white--text align-end"
                height="200px"
              />

              <v-card-title>
                {{ recipe.title }}
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon @click="updateList(recipe)" :class="{ favoriteRecipe : recipe.favorite }">
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon @click="deleteRecipe(recipe.id)" class="delete">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card-title>

              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <strong>Description</strong>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>{{ recipe.description }}</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import ConfirmationModal from "./ConfirmModal.vue";

export default {
  props: ["recipeProp"],

  components: {
    ConfirmationModal
  },

  data() {
    return {
      snackbar: false,
      text: "Recipe deleted",
      confirmModal: false
    };
  },

  computed: {
    recipes() {
      return this.recipeProp;
    }
  },

  methods: {
    deleteRecipe(id) {
      this.$store.commit("deleteRecipe", id);
    },

    updateList(recipe) {
      recipe.favorite = !recipe.favorite
      this.$store.commit("updateList", recipe);
    }
  }
};
</script>

<style>
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.favoriteRecipe {
  color: red !important;
}

.delete:hover {
  color: #000 !important;
}
</style>