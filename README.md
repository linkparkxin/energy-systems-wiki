# HVAC & Energy Systems Wiki

> **暖通空调与能源系统工程知识库**  
> 以暖通空调为专业基础，以系统工程为方法，以能源优化为长期方向。

HVAC & Energy Systems Wiki 是一个面向暖通、制冷、能源与系统工程学习者的开放工程知识体系。项目从暖通空调、制冷热泵和建筑环境出发，逐步连接设备、机组、控制、仿真、节能实践、技术前沿以及工程组织管理。

## 项目定位

本项目的长期逻辑是：

**HVAC is the foundation, systems engineering is the method, energy optimization is the destination.**

中文对应：

**以暖通空调为专业基础，以系统工程为方法，以能源优化为长期方向。**

当前重点覆盖暖通空调、制冷、热泵、空气处理、建筑及工业节能；后续可根据公开资料和可验证研究，逐步扩展至建筑能源、综合能源、储能、可再生能源、数字孪生和智能控制。

## 知识主线

- **01 基础科学 Fundamentals**：工程热力学、传热学、流体力学、湿空气、质量与能量守恒、数值基础；
- **02 制冷与热泵 Refrigeration & Heat Pumps**：蒸汽压缩式制冷循环、制冷剂、蒸发、冷凝、节流、热泵、性能评价与工程答疑；
- **03 设备与部件 Components & Equipment**：压缩机、换热器、膨胀阀、风机、水泵、阀件、管路、传感器和执行机构；
- **04 机组与系统 Units & Systems**：冷水机组、热泵、空气处理、恒温恒湿、冷冻水、冷却水、热回收和模块化系统；
- **05 控制与智能 Control & Intelligence**：PID、PLC、BMS、设备联动、群控、IoT、CPS、边缘计算、数字孪生和AI优化；
- **06 仿真与设计 Simulation & Design**：CAD、SolidWorks、CFD、Fluent、OpenFOAM、EnergyPlus、OpenStudio、Rhino、Grasshopper和Python；
- **07 工程案例 Engineering Practice**：建筑、酒店、工业、恒温恒湿、节能改造、系统调试和故障诊断；
- **08 技术前沿 Frontier & Insights**：高效热泵、低GWP制冷剂、智能控制、数字孪生、AI for HVAC和综合能源系统；
- **管理专栏 Management**：人事管理与供应链管理的公开方法和工程协同框架。

每个主题尽量回答四类问题：是什么、为什么、怎么做、还能如何优化。

## 开放交流与问答

网站保留文章页的 Waline 上下文评论，并在 `/community/` 提供基于 Supabase 的实时开放问答区。访客通过匿名用户参与，不需要 GitHub 账户、邮箱或手机号；问题和回复直接进入数据库并实时同步给已打开页面。管理员只负责事后隐藏、恢复、删除或保留内容，不承担预审和日常答疑。Supabase 建表、行级安全策略（Row Level Security，RLS）、Realtime 和配置方法见 `supabase/README.md` 与 `supabase/migrations/20260901_community_qa.sql`。

## 信息公开与知识产权原则

本仓库是公开知识仓库，提交内容应默认可能被搜索引擎、同行和大语言模型长期读取与索引。

允许收录：

- 公开教材、国家或行业标准、公开论文和技术报告；
- 厂商已经公开发布的产品资料；
- 来源清楚的公开工程案例；
- 作者基于公开信息形成的原创分析、计算、表格和示意图；
- 经过充分匿名化、抽象化并确认可以公开的工程经验。

禁止收录：

- 企业内部PPT、PDF、图纸、BOM、代码、算法和控制阈值；
- 未公开设备参数、性能曲线、实验数据和调试记录；
- 客户名称、项目地址、联系人、合同和报价信息；
- 无法确认授权边界的原始企业资料。

工作资料只能作为知识理解来源。公开页面必须经过知识点提取、泛化、公开来源核验和自主重写。

具体要求见 docs/about/publication-policy.md、docs/about/copyright.md 和仓库根目录 SECURITY_REVIEW.md。

## 本地运行

~~~bash
npm install
npm run docs:dev
~~~

本地开发端口为 5173，构建和预览命令为：

~~~bash
npm run docs:build
npm run docs:preview
~~~

## 技术栈

- VitePress：静态技术文档与知识站点；
- Markdown：知识内容源文件；
- TypeScript / Vue：主题与配置扩展；
- Git / GitHub：版本管理、协作与审阅；
- GitHub Pages：公开网站部署。

## 语言规范

正文以中文工程技术读者为主要对象。专业术语首次出现时，采用“中文名称（English Full Name，Abbreviation）”形式；目录、文件名、URL和代码统一使用英文，以兼顾中文阅读与工程维护。

---

**HVAC & Energy Systems Wiki｜暖通空调与能源系统工程知识库**  
面向公开、可验证、可追溯的暖通与能源系统工程知识。
