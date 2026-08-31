import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Energy Systems Wiki',
  description: '面向工程师与科研人员的能源系统工程知识库，聚焦基础理论、暖通制冷、建筑能源、系统控制、工程实践与技术前沿。',
  base: '/energy-systems-wiki/',
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'Energy Systems Wiki',
    nav: [
      { text: '首页', link: '/' },
      { text: '知识体系', link: '/knowledge/' },
      { text: '核心部件', link: '/components/' },
      { text: '产品与系统', link: '/products/' },
      { text: '仿真方法', link: '/simulation/' },
      { text: '工程案例', link: '/cases/' },
      { text: '关于与规范', link: '/about/publication-policy' }
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
            { text: '控制与智能', link: '/knowledge/control-intelligence' },
            { text: '从制冷循环开始', link: '/knowledge/refrigeration-cycle' }
          ]
        }
      ],
      '/components/': [
        {
          text: '核心部件',
          items: [
            { text: '部件总览', link: '/components/' },
            { text: '压缩机', link: '/components/compressor' },
            { text: '换热器', link: '/components/heat-exchanger' },
            { text: '节流部件', link: '/components/expansion-device' },
            { text: '制冷剂', link: '/components/refrigerant' }
          ]
        }
      ],
      '/products/': [
        {
          text: '产品与系统',
          items: [
            { text: '产品与系统总览', link: '/products/' },
            { text: '双源模块式冷水热泵机组', link: '/products/dual-source-heat-pump' }
          ]
        }
      ],
      '/simulation/': [
        {
          text: '仿真与优化',
          items: [
            { text: '仿真方法总览', link: '/simulation/' },
            { text: '换热器建模与优化', link: '/simulation/heat-exchanger-modeling' }
          ]
        }
      ],
      '/cases/': [
        {
          text: '工程案例',
          items: [{ text: '案例总览', link: '/cases/' }]
        }
      ],
      '/frontier/': [
        {
          text: '技术前沿',
          items: [{ text: '前沿与思考', link: '/frontier/' }]
        }
      ],
      '/about/': [
        {
          text: '项目规范',
          items: [
            { text: '信息公开与发布规范', link: '/about/publication-policy' },
            { text: '版权与权属说明', link: '/about/copyright' },
            { text: '维护与贡献指南', link: '/about/maintenance' }
          ]
        }
      ]
    },

    search: { provider: 'local' },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/linkparkxin/energy-systems-wiki' }
    ],
    footer: {
      message: '公开、可验证、可追溯的能源系统工程知识。',
      copyright: 'Copyright © 2026 Energy Systems Wiki'
    }
  }
})
