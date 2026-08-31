import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'HVAC & Energy Systems Wiki',
  titleTemplate: ':title | HVAC & Energy Systems Wiki',
  description: '面向暖通空调、制冷、热泵、能源与系统工程的开放工程知识库，覆盖基础理论、核心部件、机组系统、控制、仿真、工程案例与技术前沿。',
  base: '/energy-systems-wiki/',
  lastUpdated: true,
  head: [
    ['meta', { name: 'keywords', content: '暖通空调, HVAC, 制冷, 热泵, 建筑能源, 系统工程, 控制, CFD, EnergyPlus' }],
    ['meta', { property: 'og:title', content: 'HVAC & Energy Systems Wiki' }],
    ['meta', { property: 'og:description', content: '面向暖通空调、制冷、热泵、能源与系统工程的开放工程知识库。' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],

  themeConfig: {
    siteTitle: 'HVAC & Energy Systems Wiki',
    nav: [
      { text: '首页', link: '/' },
      { text: '知识体系', link: '/knowledge/' },
      { text: '设备与部件', link: '/components/' },
      { text: '机组与系统', link: '/products/' },
      { text: '仿真与设计', link: '/simulation/' },
      { text: '工程案例', link: '/cases/' },
      { text: '技术前沿', link: '/frontier/' },
      { text: '关于', link: '/about/publication-policy' }
    ],

    sidebar: {
      '/knowledge/': [
        {
          text: '知识体系',
          items: [
            { text: '总览', link: '/knowledge/' },
            { text: '01 基础科学', link: '/knowledge/fundamentals' },
            { text: '02 制冷与热泵', link: '/knowledge/refrigeration-cycle' },
            { text: '03 设备与部件', link: '/components/' },
            { text: '04 机组与系统', link: '/products/' },
            { text: '05 控制与智能', link: '/knowledge/control-intelligence' },
            { text: '06 仿真与设计', link: '/simulation/' },
            { text: '07 工程案例', link: '/cases/' },
            { text: '08 技术前沿', link: '/frontier/' }
          ]
        }
      ],
      '/components/': [
        {
          text: '设备与部件',
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
          text: '机组与系统',
          items: [
            { text: '机组与系统总览', link: '/products/' },
            { text: '双源模块式冷水热泵机组', link: '/products/dual-source-heat-pump' }
          ]
        }
      ],
      '/simulation/': [
        {
          text: '仿真与设计',
          items: [
            { text: '仿真与设计总览', link: '/simulation/' },
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
          text: '关于与规范',
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
      message: '公开、可验证、可追溯的暖通与能源系统工程知识。',
      copyright: 'Copyright © 2026 HVAC & Energy Systems Wiki'
    }
  }
})
