<template>
  <v-app :dark="dark">
    <v-toolbar dense app color="primary">
      <v-toolbar-title class="headline">
        <span v-html="'LAdmin'"></span>
        <span class="px-2 font-weight-light">|</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="dark = !dark" icon>
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      dark: false,
    }
  }
}
</script>
<style>
  html, body {
    overflow: auto !important;
  }
</style>
