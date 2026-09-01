import DefaultTheme from 'vitepress/theme'
import SupabaseDiscussion from './SupabaseDiscussion.vue'
import WalineComment from './WalineComment.vue'
import '@waline/client/style'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SupabaseDiscussion', SupabaseDiscussion)
    app.component('WalineComment', WalineComment)
  }
}
