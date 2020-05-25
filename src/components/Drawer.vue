<template>
  <v-card width="256">
    <v-navigation-drawer class="primary background-gradient" dark permanent fixed temporary>
      <v-list>
        <blockquote class="px-2 py-5 text-center">{{ quote }}</blockquote>
        <hr />
        <v-list-item v-for="path in menu" :key="path.id" link :to="path.route" @click="closeDrawer(path.title)" :class="path.marginTopLogin">

            <v-list-item-icon>
              <v-icon>{{ path.icon }}</v-icon>
            </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ path.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      quote: "",
      menu: [
        {
          title: "Add recipe",
          icon: "mdi-plus",
          route: "/addrecipe"
        },
        {
          title: "Recipes",
          icon: "mdi-food",
          route: "/my-recipes"
        },
        {
          title: "Favorites",
          icon: "mdi-heart",
          route: "/favorite-recipes"
        },
        {
          title: "Shuffle recipe ",
          icon: "mdi-shuffle-variant",
          route: "/shuffle-recipe"
        },
        {
          title: "Info",
          icon: "mdi-information",
          route: "/information"
        },
        {
          title: "Logout",
          icon: "mdi-logout",
          route: "/",
          marginTopLogin: 'mt-10'
        }
      ]
    };
  },

  mounted() {
    this.$store.commit("shuffleQuote");
    this.quote = this.$store.getters.randomQuote;
  },

  methods: {
    closeDrawer(pathTitle) {
      this.$emit('showDrawer', false);
      if (pathTitle === 'Logout') {
        this.$store.commit("logout");
      }
    }
  }
};
</script>

<style scoped>
  .background-gradient {
    background: rgb(26,117,211);
    background: linear-gradient(180deg, rgba(26,117,211,1) 0%, rgba(81,160,199,1) 43%, rgba(255,255,255,1) 100%);
  }

  .on-hover {
    color: red !important;
  }
</style>