import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

let GlobalData = new Vue({
  data: {
    $formStrings: {}
  }
})

// 2. mixin でグローバル変数をラッピングする
Vue.mixin({
  methods: {
    // 2-1. 各コンポーネント内の<script>タグ内でグローバル変数を参照するための関数
    $_formString(id) {
      return GlobalData.$data.$formStrings[id]
    },
    $_setFormString(id, formString) {
      GlobalData.$data.$formStrings[id] = formString
    }
  }
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
