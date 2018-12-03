<template>
  <v-dialog :max-width="width || maxWidth" :persistent="persistent" :scrollable="scrollable" v-model="value_">
    <slot slot="activator" name="activator"></slot>
    <v-card :max-width="width ||maxWidth">
      <v-card-title class="title">{{title}}</v-card-title>
      <v-card-text class="py-2 body-1">
        <v-flex justify-center layout row v-if="text.length">
          <div class="subheading" style="word-wrap: break-word; word-break: break-all">{{text}}</div>
        </v-flex>
        <v-flex justify-center layout row>
          <!--<v-container>-->
          <slot></slot>
          <!--</v-container>-->
        </v-flex>
      </v-card-text>
      <v-divider v-if="scrollable"></v-divider>
      <v-card-text :style="{'maxHeight': scrollHeight, 'overflowY': 'auto'}" class="py-0">
        <slot name="scroll"></slot>
      </v-card-text>
      <v-divider v-if="scrollable"></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :loading="cancelLoading"
          @click.native="cancel"
          color="grey"
          flat
          v-if="!disableCancel"
        >
          {{cancelText}}
        </v-btn>
        <v-btn
          :loading="confirmLoading"
          @click.native="save"
          color="primary"
          flat
          v-if="!disableConfirm"
        >
          {{confirmText}}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LOperationDialog',
  props: {
    scrollable: {
      type: Boolean,
      default: false,
    },
    persistent: {
      type: Boolean,
      default: true,
    },
    scrollHeight: {
      type: String,
      default: '150px'
    },
    maxWidth: {
      type: String,
      default: '350px'
    },
    width: {
      type: String,
      default: '350px'
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    value: {},
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    operation: {
      type: String,
      default: ''
    },
    itemText: {
      type: String,
      default: ''
    },
    afterItem: {
      type: String,
      default: ''
    },
    disableConfirm: {
      type: Boolean,
      default: false,
    },
    disableCancel: {
      type: Boolean,
      default: false,
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    confirmText: {
      type: String,
      default: '确定',
    },
  },
  data: () => ({
    activate: false,
    cancelLoading: false,
    confirmLoading: false,
  }),
  computed: {
    value_: {
      get () {
        if (this.value === undefined) {
          return this.activate
        }
        else {
          return this.value
        }
      },
      set (val) {
        if (this.value === undefined) {
          this.activate = val
        }
        else {
          this.$emit('input', val)
        }
      }
    }
  },
  watch: {
    value_ () {
      if (!this.value_) {
        this.cancelLoading = false
        this.confirmLoading = false
      }
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
      this.cancelLoading = true
      if (this.autoClose) {
        this.value_ = false
      }
    },
    save () {
      this.$emit('confirm')
      this.confirmLoading = true
      if (this.autoClose) {
        this.value_ = false
      }
    }
  }
}
</script>

<style scoped>

</style>
