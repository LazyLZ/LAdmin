<template>
  <v-navigation-drawer
    :class="dark? 'grey darken-3':'blue-grey darken-4'"
    :mini-variant="smallScreen ? false : !mainNavDrawer"
    :permanent="!smallScreen"
    app
    dark
    fixed
    v-model="drawerModel"
  >
    <!--系统logo区域-->
    <v-layout align-center class="headline" style="height: 96px">
      <v-flex align-center justify-center layout v-if="!smallScreen && !mainNavDrawer">
        <v-avatar>
          <img alt="logo" src="@/assets/lazylz_avatar.jpg"/>
        </v-avatar>
      </v-flex>
      <v-flex v-else>
        <span class="primary--text pl-3">LAdmin</span>
        <span class="px-2 font-weight-light white--text">|</span>
        <span class="font-weight-light subheading white--text">MATERIAL DESIGN</span>
      </v-flex>
    </v-layout>

    <v-divider></v-divider>

    <!--导航区域-->
    <v-list dense>
      <template v-for="(item, i) in navDrawerItem">
        <!--副标题-->
        <v-layout
          :key="i"
          align-center
          row
          v-if="item.heading"
        >
          <v-flex xs6>
            <v-subheader>{{ item.heading }}</v-subheader>
          </v-flex>
        </v-layout>

        <!--分隔线-->
        <v-divider
          :key="i"
          class="my-3"
          dark
          v-else-if="item.divider"
        ></v-divider>

        <!--一级直接跳转-->
        <v-list-tile
          :key="i"
          @click="go(item.to)"
          v-else-if="noChildren(item)"
        >
          <v-tooltip :disabled="!miniNavDrawer" open-delay="50" right>
            <v-list-tile-action slot="activator">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <span>{{item.text}}</span>
          </v-tooltip>
          <v-list-tile-content>
            <v-list-tile-title class="grey--text text--lighten-1">
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!--展开子标题-->
        <v-list-group
          :key="i"
          :prepend-icon="item.icon"
          no-action
          v-else-if="!miniNavDrawer"
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title class="grey--text text--lighten-1">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <template v-for="(subItem, j) in item.children">
            <v-list-tile
              :key="j"
              v-if="noChildren(subItem)"
            >
              <!--<v-tooltip :disabled="!miniNavDrawer" open-delay="50" right>-->
              <!--<v-list-tile-action slot="activator">-->
              <!--<v-icon>{{ subItem.icon }}</v-icon>-->
              <!--</v-list-tile-action>-->
              <!--<span>{{subItem.text}}</span>-->
              <!--</v-tooltip>-->
              <v-list-tile-content>
                <v-list-tile-title class="grey--text text--lighten-1">
                  {{ subItem.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-group :key="j" sub-group v-else>
              <v-list-tile slot="activator">
                <!--<v-list-tile-action>-->
                <!--<v-icon small>{{ subItem.icon }}</v-icon>-->
                <!--</v-list-tile-action>-->
                <v-list-tile-content>
                  <v-list-tile-title class="grey--text text--lighten-1">
                    {{ subItem.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile :key="k" v-for="(ssItem, k) in subItem.children">
                <v-list-tile-content>
                  <v-list-tile-title class="grey--text text--lighten-1">
                    {{ ssItem.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
          </template>
        </v-list-group>
        <v-list-tile :key="i" v-else>
          <drawer-menu :item="item" open-delay="50">
            <v-list-tile-action
              @mouseenter="click"
              slot="activator">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <span>{{item.text}}</span>
          </drawer-menu>
          <v-list-tile-content>
            <v-list-tile-title class="grey--text text--lighten-1">
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
import {navDrawerItems} from '@/router/navDrawerItems'
import DrawerMenu from './drawerMenu'

const {mapFields} = createHelpers({
  getterType: '$L/getField',
  mutationType: '$L/updateField',
})
export default {
  name: 'mainNavDrawer',
  components: {DrawerMenu},
  data: () => ({
    navDrawerItem: navDrawerItems
  }),
  computed: {
    noChildren () {
      return (item) => {
        return !item.children || item.children.length === 0
      }
    },
    miniNavDrawer () {
      return !this.mainNavDrawer && !this.smallScreen
    },
    smallScreen () {
      return this.$vuetify.breakpoint.smAndDown
    },
    mdScreen () {
      return this.$vuetify.breakpoint.mdOnly
    },
    largeScreen () {
      return this.$vuetify.breakpoint.lgAndUp
    },
    ...mapFields([
      'dark',
      'mainNavDrawer'
    ]),
    drawerModel: {
      get () {
        if (this.smallScreen) {
          return this.mainNavDrawer
        }
        else {
          return true
        }
      },
      set (val) {
        if (this.smallScreen) {
          this.mainNavDrawer = val
        }
      }
    }
  },
  watch: {
    largeScreen (val, oldVal) {
      if (val && !oldVal) {
        this.mainNavDrawer = true
      }
      if (!val && oldVal) {
        if (this.mdScreen) {
          this.mainNavDrawer = false
        }
      }
    }
  },
  methods: {
    click (e, delay = 0) {
      if (delay) {
        setTimeout(() => {
          e.target.click()
        }, delay)
      }
      else {
        e.target.click()
      }
    },
    test (e) {
      console.log('mouseleave', e)
    },
    go (p) {
      if (p) {
        this.$router.push(p)
      }
    }
  },
  created () {
    if (this.mdScreen) {
      this.mainNavDrawer = false
    }
  }
}
</script>

<style scoped>

</style>
