<template>
  <div class="about text-center" >
    <RecipeCard class="mt-5" :recipeProp="getShuffledRecipe" v-if="getShuffledRecipe[0]"/>
    <v-btn class="warning mt-5" width="200px" @click="setRandomRecipe" v-if="getShuffledRecipe[0]">Shuffle</v-btn>
    <v-flex class="d-flex justify-center align-center" style="height: 40vh">
      <h3 v-if="!getShuffledRecipe[0]" class="mb-0">
        <strong>{{ noRecipesToShuffleMessage }}</strong>
      </h3>
    </v-flex>
  </div>
</template>

<script>
import RecipeCard from "../components/RecipeCard.vue";

export default {
  components: {
    RecipeCard
  },

  computed: {
    getShuffledRecipe() {
      this.setRandomRecipe();
      return this.$store.getters.getRandomRecipe;
    },

    noRecipesToShuffleMessage() {
      return "No recipes to shuffle..."
    }
  },

  methods: {
    setRandomRecipe() {
      this.$store.commit("setRandomRecipe");
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