<template>
  <v-navigation-drawer
    :class="dark? 'grey darken-3':'blue-grey darken-4'"
    app
    dark
    fixed
    v-model="mainNavDrawer"
  >
    <v-layout align-center class="headline" style="height: 96px">
      <v-flex>
        <span class="primary--text pl-3">LAdmin</span>
        <span class="px-2 font-weight-light white--text">|</span>
        <span class="font-weight-light subheading white--text">MATERIAL DESIGN</span>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-list
      dense
    >
      <template v-for="(item, i) in navDrawerItem">
        <v-layout
          :key="i"
          align-center
          row
          v-if="item.heading"
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
        </v-layout>
        <v-divider
          :key="i"
          class="my-3"
          dark
          v-else-if="item.divider"
        ></v-divider>
        <v-list-tile
          :key="i"
          @click="go(item.to)"
          v-else
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="grey--text">
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {createHelpers} from 'vuex-map-fields'

const {mapFields} = createHelpers({
  getterType: '$L/getField',
  mutationType: '$L/updateField',
})
export default {
  name: 'mainNavDrawer',
  data: () => ({
    navDrawerItem: [
      {icon: 'mdi-lightbulb-outline', text: 'Notes'},
      {icon: 'mdi-reminder', text: 'Reminders'},
      {divider: true},
      {heading: 'Labels'},
      {icon: 'mdi-plus', text: 'Test Router 1', to: '/test-router-parent/test-router-1'},
      {icon: 'mdi-plus', text: 'Test Router 2', to: '/test-router-parent/test-router-2'},
      {icon: 'mdi-plus', text: 'Test Router 3', to: '/test-router-parent/test-router-3'},
      {divider: true},
      {icon: 'mdi-archive', text: 'Archive'},
      {icon: 'mdi-delete', text: 'Trash'},
      {divider: true},
      {icon: 'mdi-settings', text: 'Settings'},
      {icon: 'mdi-thought-bubble', text: 'Trash'},
      {icon: 'mdi-help', text: 'Help'},
      {icon: 'mdi-cellphone-link', text: 'App downloads'},
      {icon: 'mdi-keyboard', text: 'Keyboard shortcuts'}
    ]
  }),
  computed: {
    ...mapFields([
      'dark',
      'mainNavDrawer'
    ])
  },
  methods: {
    go (p) {
      if (p) {
        this.$router.push(p)
      }
    }
  }
}
</script>

<style scoped>

</style>
