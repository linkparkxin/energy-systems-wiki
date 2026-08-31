---
title: 维护与贡献指南
description: 说明如何新增、审核和持续维护HVAC与能源系统工程知识页面。
---

# 维护与贡献指南

## 内容维护原则

每个页面应围绕一个清晰的工程问题展开，并尽量回答：

- 它是什么；
- 为什么会这样；
- 在什么条件下成立；
- 如何计算、测试或仿真；
- 可能有哪些失效模式；
- 结论的适用边界是什么。

页面应区分公开事实、文献结论、厂商公开声明、作者分析和待验证假设。

## 文件与目录

- 首页：docs/index.md；
- 知识体系：docs/knowledge/；
- 设备与部件：docs/components/；
- 机组与系统：docs/products/；
- 仿真与设计：docs/simulation/；
- 工程案例：docs/cases/；
- 技术前沿：docs/frontier/；
- 关于与规范：docs/about/；
- 导航与侧边栏：docs/.vitepress/config.mts。

新增一般文章只需创建一个 Markdown 文件；如果希望出现在导航或侧边栏，再同步修改 config.mts。

## 页面元数据

新文章建议使用：

~~~yaml
---
title: 页面标题
description: 页面摘要
status: draft
author: 作者或团队
source_type: public_reference_and_original_analysis
sensitivity: public
last_reviewed: 2026-08-31
---
~~~

status 可使用 draft、reviewed、verified 和 deprecated。

## 推荐维护流程

主题提出 → 来源和公开边界确认 → 独立撰写与制图 → 技术复核 → 版权与脱敏复核 → 本地预览 → 构建检查 → Pull Request → 合并发布

日常小修订可以直接修改 main；新增主题、结构调整和涉及产品或工程案例的内容，建议通过分支和 Pull Request 完成。

## 版本与质量检查

- 小幅修正使用清晰的提交说明；
- 新增主题时同步更新侧边栏；
- 软件、标准和法规更新时修改 last_reviewed；
- 每季度检查链接、页面状态和过期内容；
- 重要页面保留修订原因；
- 不直接覆盖历史事实，必要时增加版本说明；
- 不修改 docs/.vitepress/dist，该目录属于构建产物；
- 不修改 base: /energy-systems-wiki/，以避免 Pages 路径失效。

## 问题反馈

Issue 可以用于报告技术错误、公式单位问题、失效链接、图片来源不清、版权风险、工程案例补充和软件版本更新。

Pull Request 说明中应写明修改范围、来源、是否涉及图示或第三方内容，以及是否完成公开安全审查。

## 本地运行与构建

~~~bash
npm install
npm run docs:dev
npm run docs:build
npm run docs:preview
~~~

本地开发端口为 5173，预览端口为 4173。GitHub Pages 工作流会在 main 分支更新后自动构建和部署。
