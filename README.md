# Algorithm Demo

基于 React + TypeScript + Vite 的数据结构与算法可视化学习项目，通过交互式界面演示常见数据结构的工作原理。

## 在线预览

[https://inspition.github.io/demo-react](https://inspition.github.io/demo-react)

## 功能模块

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 栈 - 数组实现 | 使用数组实现栈，演示 push / pop / peek / clear 操作 |
| `/stack-obj` | 栈 - 对象实现 | 使用对象（哈希）实现栈，演示相同操作 |
| `/queue` | 队列 & 双端队列 | 演示 Queue 和 Deque 的入队、出队、首尾操作 |

## 数据结构 API

### `StackArray<T>`

基于数组实现的栈。

| 方法 | 说明 |
|------|------|
| `push(...el)` | 入栈（支持多个元素） |
| `pop()` | 出栈，返回栈顶元素 |
| `peek()` | 查看栈顶元素（不移除） |
| `isEmpty()` | 是否为空 |
| `size()` | 元素数量 |
| `clear()` | 清空栈 |
| `values()` | 返回底层数组 |

### `StackObj<T>`

基于对象（私有字段）实现的栈。

| 方法 | 说明 |
|------|------|
| `push(el)` | 入栈 |
| `pop()` | 出栈，返回栈顶元素 |
| `peek()` | 查看栈顶元素 |
| `isEmpty()` | 是否为空 |
| `size()` | 元素数量 |
| `clear()` | 清空栈 |
| `toString()` | 返回逗号分隔的字符串 |

### `Queue<T>`

基于对象实现的队列（FIFO）。

| 方法 | 说明 |
|------|------|
| `enqueue(el)` | 入队 |
| `dequeue()` | 出队，返回队首元素 |
| `peek()` | 查看队首元素 |
| `isEmpty()` | 是否为空 |
| `size()` | 元素数量 |
| `clear()` | 清空队列 |
| `getItems()` | 返回所有元素数组 |
| `toString()` | 返回逗号分隔的字符串 |

### `Deque<T>`

双端队列，支持从两端添加/移除元素。

| 方法 | 说明 |
|------|------|
| `addFront(el)` | 从队首添加 |
| `addBack(el)` | 从队尾添加 |
| `removeFront()` | 移除队首元素 |
| `removeBack()` | 移除队尾元素 |
| `peekFront()` | 查看队首元素 |
| `peekBack()` | 查看队尾元素 |
| `isEmpty()` | 是否为空 |
| `size()` | 元素数量 |
| `clear()` | 清空 |
| `getItems()` | 返回所有元素数组 |
| `toString()` | 返回逗号分隔的字符串 |

### `decimalToBase(decNumber, base?)`

十进制转任意进制（2~36）。

```ts
decimalToBase(255)     // "11111111"（二进制）
decimalToBase(255, 16) // "FF"（十六进制）
decimalToBase(100, 8)  // "144"（八进制）
```

## 技术栈

- **框架**：React 19 + TypeScript
- **构建**：Vite 6
- **UI**：Ant Design 5
- **图表**：AntV G2
- **地图**：CesiumJS
- **路由**：React Router 7
- **HTTP**：Axios
- **样式**：Sass
- **测试**：Vitest

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 部署

项目配置了 GitHub Pages 自动部署：

```bash
pnpm deploy
```

执行后会自动构建并将 `dist` 目录推送到 `gh-pages` 分支。
