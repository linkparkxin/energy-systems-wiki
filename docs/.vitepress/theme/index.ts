import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import WalineComment from './WalineComment.vue'
import '@waline/client/style'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'not-found': () => h('div')
    })
  },
  enhanceApp({ app }) {
    app.component('WalineComment', WalineComment)
  }
}
