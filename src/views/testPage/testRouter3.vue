<template>
  <div>
    <!--<v-tabs grow>-->
    <!--<v-tab>Item 1</v-tab>-->
    <!--<v-tab>Item 2</v-tab>-->
    <!--<v-tab>Item 3</v-tab>-->
    <!--</v-tabs>-->
    <!--<v-divider></v-divider>-->
    <div>test router 3 {{Math.random() * 1000}}</div>
    <!--<h1>//{{$vuetify.breakpoint.name}}//</h1>-->
    <v-btn @click="dialog = !dialog">trigger error</v-btn>
    <l-error-dialog v-model="dialog" error-title="手动触发错误" :error-message="'this is an error message'"></l-error-dialog>
    <l-success-dialog>
      <v-btn slot="activator">trigger success</v-btn>
    </l-success-dialog>
    <l-alert type="success snackbar dialog">
      <v-btn slot="activator">alert</v-btn>
    </l-alert>
  </div>
</template>

<script>
import LOperationDialog from '../../core/components/LOperationDialog'
import LErrorDialog from '../../core/components/Alerts/LErrorDialog'
import LSuccessDialog from '../../core/components/Alerts/LSuccessDialog'
import LAlert from '../../core/components/Alerts/LAlert'

export default {
  name: 'testRouter3',
  components: {LAlert, LSuccessDialog, LErrorDialog, LOperationDialog},
  data: () => ({
    dialog: false,
  })
}
</script>

<style scoped>

</style>
