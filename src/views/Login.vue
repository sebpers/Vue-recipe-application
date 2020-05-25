<template>
    <v-card flat class="cardPosition pb-10" :class="{'cardPositionSm': $vuetify.breakpoint.xsOnly}">
      <div class="login-chef-logo">
        <h2><strong>Login</strong></h2>
      </div>

        <div class="d-flex flex-column align-center">
          <v-card-text class="card-input-width">
              <v-text-field
                v-model="userName"
                label="Username..."
                :append-icon="icons.face"
              />
              <v-text-field
                v-model="password"
                label="Password..."
                :type="!showPassword ? 'Password' : 'text'"
                v-on:keyup.enter="login(userName, password)"
                @click:append="showPassword = !showPassword"
                :append-icon="showPassword ? icons.eyeOn : icons.eyeOff"
              />
          </v-card-text>

          <v-card-actions>
            <div class="d-flex flex-wrap justify-center">
              <v-btn class="mx-3 mb-3" color="primary" @click="login(userName, password)">Sign in</v-btn>
              <v-btn class="mx-3 mb-3" color="warning">Forgot password</v-btn>
              <v-btn
                class="mx-3 mb-3"
                :class="{'size': $vuetify.breakpoint.xsOnly}"
                color="success">
                  Register
                </v-btn>
            </div>
          </v-card-actions>
        </div>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
      userName: null,
      password: null,
      showPassword: false,
      icons: {
        face: 'mdi-face',
        eyeOn: 'mdi-eye',
        eyeOff: 'mdi-eye-off'
      }
    }
  },

  methods: {
    login(userName, password) {
      const user = {
        userName,
        password
      }
      this.$store.commit('loginValidation', user);
      this.userName = '';
      this.password = '';
    }
  }
}
</script>

<style>
  .size {
    width: 300px;
  }

  .card-input-width {
    max-width: 460px;
  }

  .cardPosition {
    margin-left: 50%;
    margin-top: 20%;
    transform: translate(-50%, -20%);
    width: 600px;
  }

  .cardPositionSm {
    margin-top: 150px;
  }

  .login-chef-logo {
    background: url('../assets/chef-hat.jpeg');
    background-repeat: no-repeat;
    background-size: contain;

    height: 150px;
    width: 130px;
    margin: 0 auto;

    position: relative;
  }

  h2 {
    font-family: 'Great Vibes', cursive;
    transform: rotate(12deg);

    text-align: center;
    position: absolute;
    bottom: 22px;
    left: 23px;
  }
</style>