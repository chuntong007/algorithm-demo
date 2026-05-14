# React 算法演示 & 数据可视化

> 演示地址：[https://inspition.github.io/demo-react/](https://inspition.github.io/demo-react/)
>
> **注意：Cesium 地图采用 BingMaps 卫星底图，未开启科学上网时地图将无法正常渲染。**

## 项目简介

基于 React 19 + TypeScript 构建的学习型演示项目，涵盖两个方向：

1. **数据结构算法可视化**：以交互式界面展示栈、队列等经典数据结构的运作过程。
2. **GIS 与数据可视化**：集成 Cesium 地图与 AntV G2 图表，实现点击地图区域获取天气数据并可视化展示。

## 快速上手

```bash
# 安装依赖
pnpm i

# 启动开发服务器
pnpm run dev

# 构建生产包
pnpm run build

# 部署到 GitHub Pages
pnpm run deploy
```

## 技术栈

| 类别       | 技术方案                          |
| -------- | ----------------------------- |
| 核心框架     | React 19 + TypeScript         |
| UI 组件库   | Ant Design 5                  |
| 可视化引擎    | AntV G2 5.0                   |
| 地理空间服务   | Cesium 1.x                    |
| 路由       | React Router 7                |
| HTTP 请求  | Axios                         |
| 数据服务     | Open-Meteo API + 高德天气 API     |
| 工程化      | Vite 6 + pnpm + ESLint        |
| 单元测试     | Vitest                        |

## 功能模块

### 数据结构

| 路由            | 说明              |
| ------------- | --------------- |
| `/`           | 栈（数组实现）可视化演示    |
| `/stack-obj`  | 栈（对象实现）可视化演示    |
| `/queue`      | 队列可视化演示         |

#### 已实现数据结构

- **StackArray**：基于数组实现的栈，支持 `push` / `pop` / `peek` / `clear` / `isEmpty`
- **StackObj**：基于对象（哈希索引）实现的栈，私有字段封装，支持 `toString`
- **Queue**：基于对象实现的队列，支持 `enqueue` / `dequeue` / `peek` / `size` / `clear`

### 地图与可视化

- **GIS 交互**：点击 Cesium 地图区域，自动获取该地区的实时天气数据
- **图表展示**：使用 AntV G2 渲染温度、湿度等气象指标折线图

## 项目结构

```
src/
├── algorithm/        # 数据结构实现（Stack、Queue）
├── api/              # 接口封装（Open-Meteo、高德天气）
├── components/       # 公共组件（Cesium 地图、G2 图表）
├── routes/           # 路由配置
├── views/            # 页面视图（Stack、Queue）
├── utils/            # 工具函数与请求封装
└── types/            # TypeScript 类型声明
```

## 开发背景

本项目作为从 Vue 技术栈向 React 迁移的技术验证平台，重点验证：

- React 19 + TSX 在复杂可视化场景下的组件架构模式
- Cesium 在 React 环境下的集成方案（via `vite-plugin-cesium`）
- 数据结构算法的交互式可视化实现思路
