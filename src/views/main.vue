<template>
  <v-app :dark="dark">
    <v-navigation-drawer
      :class="dark? '':'blue-grey darken-4'"
      app
      dark
      fixed
      v-model="drawer"
    >
      <v-layout align-center class="headline" style="height: 96px">
        <v-flex>
          <span class="primary--text pl-3">LAdmin</span>
          <span class="px-2 font-weight-light white--text">|</span>
          <span class="font-weight-light subheading white--text">MATERIAL DESIGN</span>
        </v-flex>
      </v-layout>
      <v-list
        dense
      >
        <template v-for="(item, i) in items">
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
            @click=""
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
    <v-toolbar :color="dark ? '':'white'" app dense>
      <v-toolbar-side-icon @click="drawer = ! drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline">
        <v-flex class=" body-1">
          <v-icon small>mdi-home</v-icon>
          <span class="px-2">首页</span>
        </v-flex>

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn @click="dark = !dark" icon slot="activator">
          <v-icon>mdi-invert-colors</v-icon>
        </v-btn>
        <span>切换主题</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn icon slot="activator">
          <v-icon large>mdi-account-circle</v-icon>
        </v-btn>
        <span>用户</span>
      </v-tooltip>
    </v-toolbar>
    <v-content>
      <v-layout>
        <v-flex style="width: calc(100% - 64px)">
          <v-tabs :color="dark ? 'grey darken-4':'grey lighten-3'" show-arrows v-model="tab">
            <template v-for="(t, i) in tabItems">
              <v-tab :class="tab === i ? dark ? 'grey darken-3':'grey lighten-4':''" :key="i">
                <span class="pl-2">{{t.label}}</span>
                <v-btn :disabled="tabItems.length === 1" @click.stop="tabItems.splice(i,1)" class="ml-3 mr-0" icon
                       small>
                  <v-icon clickable small>mdi-close</v-icon>
                </v-btn>
              </v-tab>
              <v-divider :key="i + 'd'" vertical></v-divider>
            </template>
          </v-tabs>
        </v-flex>
        <div :class="dark ? 'grey darken-4':'grey lighten-3'" style="width: 64px">
          <v-menu bottom>
            <v-btn icon slot="activator">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-list dense>
              <v-list-tile @click="">
                关闭所有
              </v-list-tile>
              <v-list-tile @click="">
                关闭其他
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </v-layout>
      <v-layout :style="{height: (viewHeight - 136) + 'px', overflowY:'auto'}" v-resize="onResize">
        <router-view/>
      </v-layout>
    </v-content>
    <v-footer
      app
      class="footer"
      fixed
      height="auto"
      inset
    >
      <v-layout class="caption grey--text text-xs-center" justify-cetner>
        <v-flex>&copy;{{(new Date()).getFullYear()}} Design by LZ</v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Main',
  data: () => ({
    tab: 0,
    tabItems: [
      {key: 'tab1', label: 'tab1'},
      {key: 'tab2', label: 'tab2'},
      {key: 'tab3', label: 'tab3'},
      {key: 'tab4', label: 'tab4'},
      {key: 'tab5', label: 'tab5'},
      {key: 'tab6', label: 'tab6'},
      {key: 'tab7', label: 'tab7'},
    ],
    viewHeight: 0,
    dark: false,
    drawer: true,
    items: [
      {icon: 'mdi-lightbulb-outline', text: 'Notes'},
      {icon: 'mdi-reminder', text: 'Reminders'},
      {divider: true},
      {heading: 'Labels'},
      {icon: 'mdi-plus', text: 'Create new label'},
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
  methods: {
    onResize () {
      this.viewHeight = window.innerHeight
    }
  }
}
</script>

<style scoped>

</style>
