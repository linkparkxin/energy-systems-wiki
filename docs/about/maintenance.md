---
title: 维护与贡献指南
description: 说明如何新增、审核和持续维护能源系统工程知识页面。
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

status可使用draft、reviewed、verified和deprecated。

## 发布流程

主题提出 → 来源和公开边界确认 → 独立撰写与制图 → 技术复核 → 版权与脱敏复核 → 构建检查 → 合并发布

无法确认来源或公开授权边界的内容，不进入公开仓库。

## 版本维护

- 小幅修正使用清晰的提交说明；
- 新增主题时同步更新侧边栏；
- 软件、标准和法规更新时修改last_reviewed；
- 每季度检查链接、页面状态和过期内容；
- 重要页面保留修订原因；
- 不直接覆盖历史事实，必要时增加版本说明。

## 问题反馈

Issue可以用于报告技术错误、公式单位问题、失效链接、图片来源不清、版权风险、工程案例补充和软件版本更新。

Pull Request说明中应写明修改范围、来源、是否涉及图示或第三方内容，以及是否完成公开安全审查。

## 本地运行

~~~bash
npm install
npm run docs:dev
~~~

构建检查：

~~~bash
npm run docs:build
~~~

GitHub Pages工作流会在main分支更新后自动构建和部署。
