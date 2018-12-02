<template>
  <div id="app">
    <v-slide-y-transition mode="out-in">
      <router-view></router-view>
    </v-slide-y-transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  created () {
    // this.$store.commit('login/recoveryLogin')
  }
}
</script>
<style>
  html, body {
    overflow: auto !important;
  }
</style>
