<template>
  <h1>details page {{this.$route.query.id}}</h1>
</template>

<script>
export default {
  name: 'detailsPage',
  created () {
    console.log('in details', this.$route)
  }
}
</script>

<style scoped>

</style>
