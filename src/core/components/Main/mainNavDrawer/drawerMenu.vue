<template>
  <v-menu
    close-delay="200"
    nudge-right="16px"
    nudge-top="8px"
    offset-x
    open-on-hover
    right
    transition="slide-x-transition"
    v-model="value_"
  >
    <slot name="activator" slot="activator"></slot>
    <v-card class="d-inline-block elevation-1" width="256px">
      <v-list dense>
        <template v-for="(t, i) in item.children">
          <v-list-tile
            :key="i"
            @click=""
            v-if="noChildren(t)"
          >
            <v-list-tile-action>
              <v-icon>{{t.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="font-weight-medium">
                <!--<v-icon class="pr-3">{{ t.icon }}</v-icon>-->
                {{ t.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-group
            :key="i"
            :value="true"
            @click.stop
            no-action
            v-else
          >
            <v-list-tile slot="activator">
              <v-list-tile-action>
                <v-icon>{{t.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content class="pr-3">
                <v-list-tile-title class="font-weight-medium">
                  <!--<v-icon class="pr-3">{{ t.icon }}</v-icon>-->
                  {{ t.text }}
                </v-list-tile-title>
              </v-list-tile-content>
              <!--<v-list-tile-action v-if="!noChildren(t)">-->
              <!--<v-icon>mdi-chevron-right</v-icon>-->
              <!--</v-list-tile-action>-->
            </v-list-tile>
            <v-list-tile
              :key="j"
              @click=""
              v-for="(subT, j) in t.children"
            >
              <v-list-tile-content>
                <v-list-tile-title class="font-weight-medium">
                  {{ subT.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <!--<v-menu transition="slide-x-transition" :key="i" v-else close-delay="100" offset-x open-on-hover right>-->
          <!--<v-list-tile slot="activator">-->
          <!--<v-list-tile-content class="pr-3">-->
          <!--<v-list-tile-title class="font-weight-medium">-->
          <!--<v-icon class="pr-3">{{ t.icon }}</v-icon>-->
          <!--{{ t.text }}-->
          <!--</v-list-tile-title>-->
          <!--</v-list-tile-content>-->
          <!--<v-list-tile-action v-if="!noChildren(t)">-->
          <!--<v-icon>mdi-chevron-right</v-icon>-->
          <!--</v-list-tile-action>-->
          <!--</v-list-tile>-->
          <!--<v-card>-->
          <!--<v-list dense>-->
          <!--<v-list-tile-->
          <!--:key="i"-->
          <!--@click=""-->
          <!--v-for="(subT, i) in t.children"-->
          <!--&gt;-->
          <!--<v-list-tile-content>-->
          <!--<v-list-tile-title class="font-weight-medium">-->
          <!--<v-icon class="pr-3">{{ subT.icon }}</v-icon>-->
          <!--{{ subT.text }}-->
          <!--</v-list-tile-title>-->
          <!--</v-list-tile-content>-->
          <!--</v-list-tile>-->
          <!--</v-list>-->
          <!--</v-card>-->
          <!--</v-menu>-->
        </template>

      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'DrawerMenu',
  props: {
    value: {},
    item: {type: Object, default: () => ({})}
  },
  computed: {
    noChildren () {
      return (item) => {
        return !item.children || item.children.length === 0
      }
    },
    value_: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    test (e) {
      console.log('mouseleave', e)
    },
  },
  watch: {
    // value_ (val) {
    //   console.log('status change')
    //   if (this.val) {
    //     this.item.children.forEach(s => {
    //       if (s.children && s.children.length > 0) {
    //         s.active = true
    //       }
    //     })
    //   }
    // }
  }
}
</script>

<style scoped>

</style>
