<template>
  <div class="about">
    <RecipeCard  :recipeProp="getFavorites" />
    <v-flex class="d-flex justify-center" min-height="100vh" style="height: 100%">
      <h3 class="mt-12">{{ noFavorites }}</h3>
    </v-flex>
  </div>
</template>

<script>
import RecipeCard from "../components/RecipeCard.vue";

export default {
  components: {
    RecipeCard
  },

  data() {
    return {};
  },

  computed: {
    getFavorites() {
      return this.$store.getters.favoriteRecipes;
    },

    noFavorites() {
      return this.$store.getters.favoriteRecipes.length === 0
        ? "No favorites currently added.."
        : null;
    }
  }
};
</script>

<style scoped>
  h3 {
    color: whitesmoke;
    opacity: 0.7;
  }
</style>