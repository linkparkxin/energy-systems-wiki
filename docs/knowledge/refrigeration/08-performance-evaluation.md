---
title: 制冷系统性能评价
description: 从制冷量、功率、COP、EER、IPLV和辅助设备功耗评价系统性能。
---

# 08 制冷系统性能评价

## 基本指标

制冷量是单位时间从低温侧移出的热量。性能系数（Coefficient of Performance，COP）定义为有用制冷量与输入功率之比：

$$
\mathrm{COP}
=
\frac{\dot{Q}_{\mathrm{cool}}}{P_{\mathrm{input}}}
$$

能效比（Energy Efficiency Ratio，EER）通常也表示制冷量与输入功率的比值，但必须明确单位和测试工况。综合部分负荷性能系数（Integrated Part Load Value，IPLV）或非标准部分负荷性能系数（Non-Standard Part Load Value，NPLV）用于描述多个负荷点的加权性能，具体权重必须以所采用标准或项目评价方法为准。

一般加权表达为：

$$
\mathrm{IPLV}
=
\sum_{i=1}^{n}w_i\mathrm{COP}_i
$$

其中：

$$
\sum_{i=1}^{n}w_i=1
$$

| 符号 | 含义 | 常用单位 |
| --- | --- | --- |
| $\dot{Q}_{\mathrm{cool}}$ | 有效制冷量 | kW |
| $P_{\mathrm{input}}$ | 评价边界内输入功率 | kW |
| $\mathrm{COP}_i$ | 第$i$个负荷点的性能系数 | 无量纲 |
| $w_i$ | 第$i$个负荷点的权重 | 无量纲 |
| $n$ | 负荷点数量 | 无量纲 |

### 加权性能示例

假设四个负荷点的COP分别为3.0、4.0、5.0、5.5，采用示例权重0.10、0.30、0.40、0.20，则：

$$
\mathrm{IPLV}
=
0.10\times3.0
+
0.30\times4.0
+
0.40\times5.0
+
0.20\times5.5
=
4.55
$$

该数值仅用于说明加权计算方法，不能替代任何具体标准中的额定评价。

## 单机效率与系统效率

压缩机COP只反映压缩机相关输入，整机COP还应纳入风机、泵、控制器和其他辅助设备：

$$
\mathrm{COP}_{\mathrm{sys}}
=
\frac{\dot{Q}_{\mathrm{cool}}}
{P_{\mathrm{comp}}
+
P_{\mathrm{fan}}
+
P_{\mathrm{pump}}
+
P_{\mathrm{aux}}}
$$

| 符号 | 含义 | 常用单位 |
| --- | --- | --- |
| $P_{\mathrm{comp}}$ | 压缩机输入功率 | kW |
| $P_{\mathrm{fan}}$ | 风机输入功率 | kW |
| $P_{\mathrm{pump}}$ | 水泵输入功率 | kW |
| $P_{\mathrm{aux}}$ | 控制和其他辅助设备功率 | kW |
| $\mathrm{COP}_{\mathrm{sys}}$ | 系统综合性能系数 | 无量纲 |

### 系统COP示例

若制冷量为 $\dot{Q}_{\mathrm{cool}}=100\ \mathrm{kW}$，压缩机、风机、水泵和辅助设备功率分别为28、3、1.2和0.8 kW，则：

$$
P_{\mathrm{input}}
=
28+3+1.2+0.8
=
33\ \mathrm{kW}
$$

$$
\mathrm{COP}_{\mathrm{sys}}
=
\frac{100}{33}
=
3.03
$$

如果评价边界扩大到整个冷冻站，还应继续考虑冷却塔、一次泵、二次泵和末端输配功耗。

## 评价前提

比较不同方案时必须统一：

- 室外温湿度；
- 进出水温度和流量；
- 负荷率；
- 制冷剂和设备边界；
- 测试稳定时间；
- 功率和制冷量的测量方法。

高额定效率不一定意味着全年系统能耗最低，部分负荷、启停、控制和辅助功耗往往决定实际运行结果。
