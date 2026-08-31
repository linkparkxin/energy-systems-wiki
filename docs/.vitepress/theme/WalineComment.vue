<template>
  <section class="community-discussion" aria-label="开放式讨论区">
    <div ref="commentRoot" class="waline-container"></div>
    <div v-if="!serverURL" class="community-discussion-placeholder">
      <strong>讨论区服务尚未配置</strong>
      <p>当前页面结构已经准备完成。管理员配置 Waline 服务端地址后，访客即可无需 GitHub 账户参与提问和回复。</p>
      <a href="/energy-systems-wiki/community/maintenance">查看管理员配置说明</a>
    </div>
    <div v-else-if="errorMessage" class="community-discussion-error">
      {{ errorMessage }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const commentRoot = ref<HTMLElement | null>(null)
const errorMessage = ref('')
const serverURL = import.meta.env.VITE_WALINE_SERVER_URL || ''
let walineInstance: { destroy?: () => void } | null = null

onMounted(async () => {
  if (!serverURL || !commentRoot.value) return

  try {
    const { init } = await import('@waline/client')
    walineInstance = init({
      el: commentRoot.value,
      serverURL,
      path: window.location.pathname,
      lang: 'zh-CN',
      login: 'disable',
      meta: ['nick'],
      requiredMeta: ['nick'],
      pageSize: 10,
      wordLimit: [1, 2000],
      copyright: false,
      dark: 'html.dark'
    })
  } catch (error) {
    console.error(error)
    errorMessage.value = '讨论区暂时无法连接，请稍后刷新页面或联系维护者。'
  }
})

onBeforeUnmount(() => {
  walineInstance?.destroy?.()
})
</script>
