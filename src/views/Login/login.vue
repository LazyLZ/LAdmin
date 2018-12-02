<template>
  <v-app :dark="dark">
    <v-toolbar dense app :color="dark?'':'blue-grey darken-4'">
      <v-toolbar-title>
        <span :class="'primary--text'">LAdmin</span>
        <span class="px-2 white--text font-weight-light">|</span>
        <span class=" white--text font-weight-light">Material Design</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="dark = !dark" icon>
        <v-icon color="white">mdi-invert-colors</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container justify-center>
        <v-layout class="pt-5" fill-height justify-center>
          <v-card class="elevation-4" width="500px">
            <v-card-title>
              <span class="headline pl-2">Login</span>
            </v-card-title>
            <!--<v-divider></v-divider>-->
            <v-card-text>
              <v-container class="pb-2 pt-0" grid-list-md>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-text-field
                      label="Login ID"
                      prepend-icon="mdi-account"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      label="Password"
                      prepend-icon="mdi-lock"
                      type="password"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="login" color="primary" flat large>login</v-btn>
            </v-card-actions>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer
      app
      class="footer"
      fixed
      height="auto"
    >
      <v-layout class="caption grey--text text-xs-center" justify-cetner>
        <v-flex xs6 offset-xs3>
          &copy;{{(new Date()).getFullYear()}} Design by LZ
        </v-flex>
        <v-flex class="px-2 text-xs-right" xs3>
          <span>Ver. 0.1.0</span>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import {createHelpers} from 'vuex-map-fields'

const {mapFields} = createHelpers({
  getterType: '$L/getField',
  mutationType: '$L/updateField',
})
export default {
  name: 'login',
  computed: {
    ...mapFields([
      'dark'
    ])
  },
  methods: {
    login () {
      this.$store.commit('login/saveLoginInfo', {
        token: '__TEST__',
        name: 'LazyLZ',
        id: 'admin_lz',
        role: 'admin'
      })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
