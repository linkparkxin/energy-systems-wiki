import DefaultTheme from 'vitepress/theme'
import WalineComment from './WalineComment.vue'
import '@waline/client/style'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('WalineComment', WalineComment)
  }
}
