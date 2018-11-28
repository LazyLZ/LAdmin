import Vue from 'vue'
import Vuetify from 'vuetify/lib'

// import 'vuetify/src/stylus/app.styl'
import zhHans from 'vuetify/es5/locale/zh-Hans'
// import colors from 'vuetify/es5/util/colors'
import directives from 'vuetify/lib/directives'
Vue.use(Vuetify, {
  theme: {
    primary: '#00C4A4', // 170, 100, 77
    // secondary: '#424242',
    accent: '#00EDC6',
    // error: '#FF5252',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FFC107'
  },
  customProperties: true,
  iconfont: 'mdi',
  lang: {
    locales: {zhHans},
    current: 'zh-Hans'
  },
  directives: directives
})
