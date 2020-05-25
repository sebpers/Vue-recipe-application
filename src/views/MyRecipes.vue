<template>
  <div class="MyRecipes" flex>

    <Search v-if="getSearchRecipe" />

    <div class="d-flex justify-space-between checkbox-wrapper">
      <v-checkbox v-model="filter.favorites" color="white" label="Favorites" />
      <v-checkbox v-model="filter.title" color="white" label="Title" />
    </div>

    <RecipeCard :recipeProp="getSearchRecipe" />
    <RecipeCard :recipeProp="getFilteredRecipe ? getFilteredRecipe : getAllRecipes" v-if="getSearchRecipe.length === 0" />

    <v-flex class="d-flex justify-center mt-12 no-recipe-message-wrapper" v-if="getAllRecipes.length === 0">
      <h3>
        <strong>{{ noRecipes }}</strong>
      </h3>
    </v-flex>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import RecipeCard from "../components/RecipeCard.vue";

export default {
  name: "MyRecipes",
  components: {
    Search,
    RecipeCard
  },

  data() {
    return {
      filter: {
        title: false,
        favorites: false
      }
    }
  },

  beforeDestroy() {
    // Reset filter
    this.$store.commit("filterRecipe", false);
  },

  watch: {
    filter: {
      handler: function(newVal) {
        if (newVal || !newVal) {
          this.$store.commit("filterRecipe", newVal);
        }
      },
      deep: true
    }
  },

  computed: {
    getAllRecipes() {
      return this.$store.getters.getAllRecipes;
    },

    getSearchRecipe() {
      return this.$store.getters.searchResult;
    },

    getFilteredRecipe() {
      return this.$store.getters.getFilteredRecipe;
    },

    noRecipes() {
      return 'Shoot! No recipes currently on the menu ...';
    }
  }
};
</script>

<style>
  .no-recipe-message-wrapper {
    color: whitesmoke;
    opacity: 0.7;
  }

  .v-input--checkbox .v-label.theme--light {
    color: whitesmoke;
  }

  .checkbox-wrapper {
    max-width: 250px;
    margin: 0 auto;
  }

</style>