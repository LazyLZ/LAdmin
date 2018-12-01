<template>
  <v-app :dark="dark">
    <main-nav-drawer></main-nav-drawer>
    <main-toolbar></main-toolbar>
    <v-content>
      <v-divider></v-divider>
      <l-fixed-window
        :offset-top.sync="offsetTop"
        :to-bottom="$route.meta.showFooter ? 36: 0"
        ref="fixedWindow"
      >
        <template slot="fixed-top">
          <v-progress-linear class="py-0 my-0" height="2" indeterminate v-if="pageLoading"></v-progress-linear>
          <main-tabs></main-tabs>
        </template>
        <keep-alive :exclude="noCachePage">
          <router-view/>
        </keep-alive>
      </l-fixed-window>
    </v-content>
    <v-footer
      app
      class="footer"
      fixed
      height="36px"
      inset
      v-if="$route.meta.showFooter"
    >
      <v-layout class="caption grey--text text-xs-center" justify-cetner>
        <v-flex>&copy;{{(new Date()).getFullYear()}} Design by LZ</v-flex>
        <div class="px-2">Ver. 0.1.0</div>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import LFixedWindow from '../LFixedWindow'
import MainNavDrawer from './mainNavDrawer'
import MainToolbar from './mainToolbar'
import MainTabs from './mainTabs'
import {createHelpers} from 'vuex-map-fields'

const {mapFields} = createHelpers({
  getterType: '$L/getField',
  mutationType: '$L/updateField',
})
export default {
  name: 'Main',
  components: {MainTabs, MainToolbar, MainNavDrawer, LFixedWindow},
  data: () => ({
    offsetTop: 0,
    viewHeight: 0,
  }),
  computed: {
    ...mapFields([
      'dark',
      'floatingTabs',
      'mainTabItems',
      'pageLoading',
    ]),
    noCachePage () {
      let pages = []
      return pages
    }
  },
  watch: {
    offsetTop (val, oldVal) {
      if (val && !oldVal) {
        this.floatingTabs = true
      }
      if (!val && oldVal) {
        this.floatingTabs = false
      }
    },
    '$route' (to, from) {
      console.log('$route change', to.fullPath, from.fullPath)
      // this.$refs.fixedWindow.refresh(false)
      this.$refs.fixedWindow.refresh()
      let t = this.mainTabItems.find(item => item.to === to.fullPath)
      if (t) {
        // this.tab = this.tabItems.indexOf(t)
      }
      else {
        this.$store.commit('$L/addTab', this.$route)
        // this.tabItems.push({key: route.name, label: route.name, to: route.path})
      }
    },
    mainTabItems (val) {
      if (val.length === 0) {
        this.$router.replace('/')
        this.$store.commit('$L/addTab', this.$route)
      }
    }
  },
  methods: {
    onResize () {
      this.viewHeight = window.innerHeight
    },
    go (p) {
      if (p) {
        this.$refs.fixedWindow.refresh()
        this.$router.push(p)
      }
    }
  },
  created () {
    console.log('in main', this.$route)
    this.$store.commit('$L/recoverTab', this.$route)
  },
}
</script>

<style scoped>

</style>
