---
title: 节流部件
description: 理解节流部件如何调节压力、流量和蒸发器供液状态。
---

# 节流部件

## 一句话理解

节流部件（Expansion Device）通过改变流动阻力，使高压液体降压并进入低压侧，同时调节供液量，影响蒸发器利用率和压缩机吸气状态。

常见形式包括毛细管、热力膨胀阀（Thermostatic Expansion Valve，TXV）和电子膨胀阀（Electronic Expansion Valve，EEV）。

## 过热度与过冷度

蒸发器出口过热度（Superheat，SH）为：

$$
\mathrm{SH}
=
T_{\mathrm{suction}}
-
T_{\mathrm{sat}}\left(P_{\mathrm{suction}}\right)
$$

液管过冷度（Subcooling，SC）为：

$$
\mathrm{SC}
=
T_{\mathrm{sat}}\left(P_{\mathrm{liquid}}\right)
-
T_{\mathrm{liquid}}
$$

| 符号 | 含义 | 常用单位 |
| --- | --- | --- |
| $\mathrm{SH}$ | 过热度 | K |
| $\mathrm{SC}$ | 过冷度 | K |
| $T_{\mathrm{suction}}$ | 吸气管实际温度 | °C 或 K |
| $T_{\mathrm{liquid}}$ | 液管实际温度 | °C 或 K |
| $P_{\mathrm{suction}}$ | 吸气压力 | kPa、MPa或bar |
| $P_{\mathrm{liquid}}$ | 液管压力 | kPa、MPa或bar |
| $T_{\mathrm{sat}}(P)$ | 给定压力下由物性关系得到的饱和温度 | °C 或 K |

### 计算示例

假设由制冷剂压力物性表得到：

- 吸气压力对应的饱和温度为 $-2^\circ\mathrm{C}$；
- 吸气管实际温度为 $6^\circ\mathrm{C}$。

则：

$$
\mathrm{SH}
=
6-(-2)
=
8\ \mathrm{K}
$$

若液管压力对应饱和温度为 $35^\circ\mathrm{C}$，液管实际温度为 $30^\circ\mathrm{C}$，则：

$$
\mathrm{SC}
=
35-30
=
5\ \mathrm{K}
$$

温差用K或°C表示时，数值相同。目标范围必须根据制冷剂、压缩机、换热器和厂家公开要求确定，不能套用单一经验值。

## 典型控制过程

1. 采集吸气压力和吸气温度；
2. 根据同一制冷剂物性关系计算饱和温度；
3. 计算实际过热度；
4. 比较实测过热度与目标值；
5. 调整阀门开度；
6. 检查压缩机保护、流量和换热器状态。

过热度过小可能增加回液风险，过热度过大则可能导致蒸发器有效面积利用不足。实际系统还需考虑启动、除霜、低温、通讯异常和传感器故障。
