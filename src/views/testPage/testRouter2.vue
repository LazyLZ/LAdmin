<template>
  <div>
    <div>test router 2 {{Math.random() * 1000}}</div>
    <v-btn @click="goDetails">test query</v-btn>
    <v-btn @click="goDetailsParams">test params</v-btn>
  </div>
</template>

<script>
export default {
  name: 'testRouter2',
  methods: {
    goDetails () {
      this.$router.push({name: 'TestDetails', query: {id: Math.round(Math.random() * 1000) + ''}})
    },
    goDetailsParams () {
      this.$router.push({name: 'TestDetailsParams', params: {id: Math.round(Math.random() * 1000) + ''}})
    }
  }
}
</script>

<style scoped>

</style>
