<template>
  <l-main>
    <template slot="logo" slot-scope="{mini}">
      <v-layout align-center class="headline text-truncate" style="height: 96px">
        <v-flex align-center justify-center layout v-if="mini">
          <v-avatar>
            <img alt="logo" src="@/assets/lazylz_avatar.jpg"/>
          </v-avatar>
        </v-flex>
        <v-flex v-else>
          <span class="primary--text pl-3">{{$L.cfg.appName.full}}</span>
          <span class="px-2 font-weight-light white--text">|</span>
          <span class="font-weight-light white--text">{{$L.cfg.appName.subTitle}}</span>
        </v-flex>
      </v-layout>
    </template>
  </l-main>
</template>

<script>
import LMain from '../components/Main/LMain'

export default {
  name: 'Main',
  components: {LMain}
}
</script>

<style scoped>

</style>
