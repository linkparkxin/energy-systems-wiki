import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Energy Systems Wiki',
  description: '面向工程师与科研人员的能源系统工程知识库，聚焦基础理论、暖通制冷、建筑能源、系统控制、工程实践与技术前沿。',
  base: '/energy-systems-wiki/',

  themeConfig: {
    siteTitle: 'Energy Systems Wiki',
    nav: [
      { text: '首页', link: '/' },
      { text: '知识体系', link: '/knowledge/' },
      { text: '工程案例', link: '/cases/' },
      { text: '技术前沿', link: '/frontier/' },
      { text: '发布规范', link: '/about/publication-policy' }
    ],

    sidebar: {
      '/knowledge/': [
        {
          text: '知识体系',
          items: [
            { text: '总览', link: '/knowledge/' },
            { text: '基础科学', link: '/knowledge/fundamentals' },
            { text: '暖通与制冷', link: '/knowledge/hvac' },
            { text: '能源系统', link: '/knowledge/energy-systems' },
            { text: '控制与智能', link: '/knowledge/control-intelligence' }
          ]
        }
      ],
      '/cases/': [
        {
          text: '工程案例',
          items: [
            { text: '案例总览', link: '/cases/' }
          ]
        }
      ],
      '/frontier/': [
        {
          text: '技术前沿',
          items: [
            { text: '前沿与思考', link: '/frontier/' }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/linkparkxin/energy-systems-wiki' }
    ],

    footer: {
      message: '公开、可验证、可追溯的能源系统工程知识。',
      copyright: 'Energy Systems Wiki'
    }
  }
})
