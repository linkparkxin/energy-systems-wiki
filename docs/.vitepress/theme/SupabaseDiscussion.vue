<template>
  <section class="supabase-discussion" aria-label="Supabase 实时开放问答区">
    <header class="supabase-discussion__header">
      <div>
        <p class="supabase-discussion__eyebrow">OPEN COMMUNITY Q&amp;A · REALTIME</p>
        <h2>开放式问答区</h2>
        <p class="supabase-discussion__intro">
          匿名参与、即时显示。所有读者都可以提问和回复，管理员只负责事后隐藏、删除或保留内容。
        </p>
      </div>
      <span class="supabase-discussion__status" :class="`is-${connectionState}`" role="status">
        {{ connectionLabel }}
      </span>
    </header>

    <div v-if="!isConfigured" class="supabase-discussion__notice">
      <strong>Supabase 服务尚未配置</strong>
      <p>
        页面组件已经加入项目，但当前构建没有读取到 Supabase Project URL 和公开 anon key。
        配置完成后，访客即可匿名提问并实时回复。
      </p>
      <a href="/energy-systems-wiki/community/maintenance">查看配置与治理说明</a>
    </div>

    <template v-else>
      <div class="supabase-discussion__notice supabase-discussion__notice--soft">
        <strong>参与规则</strong>
        <span>请使用公开、可验证的工程信息；不要填写客户资料、内部图纸、报价、未公开参数或个人隐私。</span>
      </div>

      <form class="supabase-discussion__composer" @submit.prevent="submitQuestion">
        <label>
          <span>问题标题</span>
          <input
            v-model.trim="questionTitle"
            type="text"
            maxlength="160"
            placeholder="例如：蒸发温度降低后，为什么压缩机功耗会上升？"
            required
          />
        </label>
        <label>
          <span>问题描述</span>
          <textarea
            v-model.trim="questionContent"
            maxlength="5000"
            rows="5"
            placeholder="请补充现象、已知条件、单位、测点位置和你已经尝试过的判断。"
            required
          ></textarea>
        </label>
        <div class="supabase-discussion__composer-footer">
          <small>匿名用户 · {{ questionContent.length }}/5000 字</small>
          <button type="submit" :disabled="isSubmittingQuestion">
            {{ isSubmittingQuestion ? '提交中…' : '发布问题' }}
          </button>
        </div>
      </form>

      <p v-if="errorMessage" class="supabase-discussion__error" role="alert">{{ errorMessage }}</p>
      <p v-if="isLoading" class="supabase-discussion__loading">正在加载讨论内容…</p>
      <p v-else-if="questions.length === 0" class="supabase-discussion__empty">
        这里还没有问题。欢迎从一个具体的 HVAC（Heating, Ventilation and Air Conditioning，暖通空调）工程现象开始。
      </p>

      <div v-else class="supabase-discussion__list">
        <article v-for="question in questions" :key="question.id" class="supabase-discussion__question">
          <div class="supabase-discussion__question-meta">
            <span>匿名提问</span>
            <time :datetime="question.created_at">{{ formatDate(question.created_at) }}</time>
          </div>
          <h3>{{ question.title }}</h3>
          <p class="supabase-discussion__content">{{ question.content }}</p>

          <div class="supabase-discussion__answers">
            <h4>回复（{{ question.answers.length }}）</h4>
            <p v-if="question.answers.length === 0" class="supabase-discussion__empty supabase-discussion__empty--small">
              暂无回复，欢迎补充你的分析、计算过程或公开资料。
            </p>
            <div v-for="answer in question.answers" :key="answer.id" class="supabase-discussion__answer">
              <div class="supabase-discussion__question-meta">
                <span>匿名回复</span>
                <time :datetime="answer.created_at">{{ formatDate(answer.created_at) }}</time>
              </div>
              <p class="supabase-discussion__content">{{ answer.content }}</p>
            </div>
          </div>

          <form class="supabase-discussion__reply" @submit.prevent="submitAnswer(question.id)">
            <label>
              <span>补充回复</span>
              <textarea
                v-model.trim="answerDrafts[question.id]"
                maxlength="5000"
                rows="3"
                placeholder="可以补充原理、公式、计算示例、适用边界或不同意见。"
                required
              ></textarea>
            </label>
            <div class="supabase-discussion__composer-footer">
              <small>采用追加回复，保留讨论过程</small>
              <button type="submit" :disabled="submittingAnswerId === question.id">
                {{ submittingAnswerId === question.id ? '提交中…' : '发布回复' }}
              </button>
            </div>
          </form>
        </article>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { RealtimeChannel, SupabaseClient } from '@supabase/supabase-js'

type Answer = {
  id: string
  question_id: string
  content: string
  created_at: string
  status: string
}

type Question = {
  id: string
  title: string
  content: string
  created_at: string
  updated_at: string
  status: string
  answers: Answer[]
}

const supabaseURL = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''
const isConfigured = Boolean(supabaseURL && supabaseAnonKey)

const questions = ref<Question[]>([])
const questionTitle = ref('')
const questionContent = ref('')
const answerDrafts = ref<Record<string, string>>({})
const isLoading = ref(false)
const isSubmittingQuestion = ref(false)
const submittingAnswerId = ref('')
const errorMessage = ref('')
const connectionState = ref<'idle' | 'connecting' | 'connected' | 'error'>('idle')

let supabase: SupabaseClient | null = null
let currentUserId = ''
let realtimeChannel: RealtimeChannel | null = null

const connectionLabel = computed(() => ({
  idle: '未连接',
  connecting: '连接中',
  connected: '实时已连接',
  error: '连接异常'
}[connectionState.value]))

function setError(error: unknown, fallback: string) {
  const message = error && typeof error === 'object' && 'message' in error
    ? String((error as { message?: string }).message || '')
    : ''
  errorMessage.value = message || fallback
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(value))
}

async function ensureAnonymousSession() {
  if (!supabase) return false

  const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
  if (sessionError) throw sessionError
  if (sessionData.session?.user) {
    currentUserId = sessionData.session.user.id
    return true
  }

  const { data, error } = await supabase.auth.signInAnonymously()
  if (error) throw error
  if (!data.user) throw new Error('匿名用户会话创建失败')
  currentUserId = data.user.id
  return true
}

async function loadQuestions() {
  if (!supabase) return
  isLoading.value = true
  errorMessage.value = ''

  try {
    const { data: questionData, error: questionError } = await supabase
      .from('community_questions')
      .select('id,title,content,created_at,updated_at,status')
      .eq('status', 'visible')
      .order('created_at', { ascending: false })
      .limit(100)
    if (questionError) throw questionError

    const rows = (questionData || []) as Omit<Question, 'answers'>[]
    const questionIds = rows.map((question) => question.id)
    const answersByQuestion = new Map<string, Answer[]>()

    if (questionIds.length > 0) {
      const { data: answerData, error: answerError } = await supabase
        .from('community_answers')
        .select('id,question_id,content,created_at,status')
        .in('question_id', questionIds)
        .eq('status', 'visible')
        .order('created_at', { ascending: true })
      if (answerError) throw answerError

      for (const answer of (answerData || []) as Answer[]) {
        const list = answersByQuestion.get(answer.question_id) || []
        list.push(answer)
        answersByQuestion.set(answer.question_id, list)
      }
    }

    questions.value = rows.map((question) => ({
      ...question,
      answers: answersByQuestion.get(question.id) || []
    }))
  } catch (error) {
    setError(error, '讨论内容暂时无法加载，请检查 Supabase 数据表、RLS 和网络连接。')
  } finally {
    isLoading.value = false
  }
}

function subscribeToRealtime() {
  if (!supabase) return
  connectionState.value = 'connecting'
  realtimeChannel = supabase
    .channel('community-qa-live')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'community_questions' }, loadQuestions)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'community_answers' }, loadQuestions)
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') connectionState.value = 'connected'
      if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
        connectionState.value = 'error'
        errorMessage.value = '实时订阅未建立，页面仍可手动刷新读取数据。'
      }
    })
}

async function submitQuestion() {
  if (!supabase || !currentUserId || isSubmittingQuestion.value) return
  if (questionTitle.value.length < 4 || questionContent.value.length < 1) {
    errorMessage.value = '请至少填写 4 个字的问题标题和问题描述。'
    return
  }

  isSubmittingQuestion.value = true
  errorMessage.value = ''
  try {
    const { error } = await supabase.from('community_questions').insert({
      title: questionTitle.value,
      content: questionContent.value,
      author_id: currentUserId
    })
    if (error) throw error
    questionTitle.value = ''
    questionContent.value = ''
    await loadQuestions()
  } catch (error) {
    setError(error, '问题提交失败，请稍后重试。')
  } finally {
    isSubmittingQuestion.value = false
  }
}

async function submitAnswer(questionId: string) {
  if (!supabase || !currentUserId || submittingAnswerId.value) return
  const content = (answerDrafts.value[questionId] || '').trim()
  if (!content) return

  submittingAnswerId.value = questionId
  errorMessage.value = ''
  try {
    const { error } = await supabase.from('community_answers').insert({
      question_id: questionId,
      content,
      author_id: currentUserId
    })
    if (error) throw error
    answerDrafts.value[questionId] = ''
    await loadQuestions()
  } catch (error) {
    setError(error, '回复提交失败，请稍后重试。')
  } finally {
    submittingAnswerId.value = ''
  }
}

onMounted(async () => {
  if (!isConfigured) return

  try {
    const { createClient } = await import('@supabase/supabase-js')
    supabase = createClient(supabaseURL, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false
      }
    })
    await ensureAnonymousSession()
    await loadQuestions()
    subscribeToRealtime()
  } catch (error) {
    connectionState.value = 'error'
    setError(error, 'Supabase 初始化失败，请确认已开启匿名登录并执行数据库脚本。')
  }
})

onBeforeUnmount(() => {
  if (supabase && realtimeChannel) {
    void supabase.removeChannel(realtimeChannel)
  }
})
</script>
