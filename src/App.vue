<template>
  <v-app relative>
    <Login v-if="!$store.getters.login"/>
    <div class="app-background" v-if="$store.getters.login">
      <v-app-bar app color="primary" flat dark max-width="900px" class="mx-auto">
        <v-app-bar-nav-icon @click.stop="showDrawer = true" />
        <v-spacer></v-spacer>
        <v-toolbar-title class="toolbar-title-font">{{ title }}</v-toolbar-title>
      </v-app-bar>

      <v-content class="content-wrapper">
        <NavigationDrawer @showDrawer="closeDrawer" v-if="showDrawer" />
        <router-view />
      </v-content>
    </div>
  </v-app>
</template>

<script>
import NavigationDrawer from "./components/Drawer.vue";
import Login from './views/Login.vue';

export default {
  name: "App",

  components: {
    NavigationDrawer,
    Login
  },

  data: () => ({
    showDrawer: false,
    loggedIn: false
  }),

  methods: {
    closeDrawer(value) {
      this.showDrawer = value;
    }
  },

  computed: {
    title() {
      return this.$route.name;
    }
  },

  watch: {
    '$store.getters.login': function(newVal) {
      newVal ? this.$router.push({name: 'Recipes'}) : '';
    }
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

  html {
    background-color: whitesmoke;
  }

  #app {
    max-width: 900px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px 1px rgba(171, 171, 171, 0.3);
  }

  .app-background {
    background: linear-gradient(to bottom, rgba(26,117,211,1) 0%, rgba(255,255,255,0.27) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a75d3', endColorstr='#ffffff', GradientType=0 );
    background-attachment: fixed;
  }

  .toolbar-title-font {
    font-family: 'Great Vibes', cursive !important;
    font-size: 30px !important;
  }

  .content-wrapper {
    min-height: 100vh;
  }
</style>
