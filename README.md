# NextNav - 网站导航

一个使用 Next.js 和 shadcn/ui 构建的现代化网站导航平台，收集整理个人常用的网站资源。

## ✨ 特性

- 🌙 **深色模式**: 支持浅色/深色主题切换
- 📱 **响应式设计**: 完美适配桌面端和移动端
- 🔍 **智能搜索**: 快速搜索网站和分类
- 📂 **分类管理**: 按类别组织网站资源
- ⚡ **性能优化**: 基于 Next.js 14 构建，性能优异
- 🎯 **丰富图标**: 使用 react-icons 提供丰富的图标库
- 🎨 **精美动画**: 流畅的悬停效果和过渡动画
- 📋 **侧边栏控制**: 支持侧边栏展开收缩，收缩后只显示图标

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **UI 组件**: shadcn/ui
- **样式**: Tailwind CSS
- **图标**: React Icons
- **类型安全**: TypeScript

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 环境变量配置

创建 `.env.local` 文件并配置以下环境变量：

```bash
# Umami Analytics
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your_umami_website_id_here
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 📁 项目结构

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局
│   └── page.tsx        # 主页面
├── components/         # React 组件
│   ├── ui/            # shadcn/ui 组件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── input.tsx
│   ├── Header.tsx     # 页面头部
│   ├── Sidebar.tsx    # 侧边栏
│   ├── SearchBar.tsx  # 搜索栏
│   ├── CategoryCard.tsx # 分类卡片
│   ├── SiteCard.tsx   # 网站卡片
│   └── DynamicIcon.tsx # 动态图标组件
├── data/              # 数据文件
│   └── sites.ts       # 网站数据
└── lib/               # 工具函数
    └── utils.ts       # shadcn/ui 工具函数
```

## 🎨 设计系统

- **颜色系统**: 支持浅色/深色主题的 CSS 变量
- **组件库**: Button、Card、Dialog、Input 等基础组件
- **响应式**: 基于 Tailwind CSS 的响应式设计
- **无障碍**: 符合 WCAG 标准的无障碍设计
- **图标系统**: 使用 React Icons 提供丰富的图标选择
- **动画效果**: 流畅的悬停和过渡动画

## 🎯 图标系统

项目使用 React Icons 作为图标库，支持多种图标集：

- **Feather Icons (Fi)**: 简洁的线性图标
- **Flat Color Icons (Fc)**: 彩色扁平图标
- **Font Awesome (Fa)**: 经典图标集
- **Material Design (Md)**: Google Material Design 图标
- **Simple Icons (Si)**: 品牌和产品图标

### 添加新图标

在 `src/data/sites.ts` 中，可以为网站和分类指定图标：

```typescript
{
  id: "google",
  name: "Google",
  icon: "FcGoogle", // 使用 Google 官方彩色图标
  // ...
}
```

## 🎨 样式特点

### 设计风格
- **简洁现代**: 采用简洁的设计语言，突出内容
- **卡片布局**: 使用卡片式布局，信息层次清晰
- **渐变元素**: 适当使用渐变色彩，增加视觉层次
- **毛玻璃效果**: 头部使用毛玻璃效果，提升质感

### 交互效果
- **悬停动画**: 卡片悬停时有轻微上移和阴影效果
- **颜色过渡**: 主色调在悬停时突出显示
- **平滑过渡**: 所有交互都有平滑的过渡动画

### 响应式设计
- **移动端优化**: 侧边栏在移动端转为对话框
- **网格布局**: 自适应网格布局，适配不同屏幕
- **触摸友好**: 按钮和交互元素适合触摸操作

### 侧边栏功能
- **展开收缩**: 桌面端支持侧边栏展开收缩
- **图标模式**: 收缩后只显示图标，节省空间
- **工具提示**: 收缩状态下鼠标悬停显示分类名称
- **平滑动画**: 展开收缩过程有平滑的过渡动画
- **自适应布局**: 主内容区域根据侧边栏状态自动调整

## 🔧 自定义配置

### 添加新的 shadcn/ui 组件

```bash
npx shadcn@latest add [component-name]
```

### 修改主题颜色

编辑 `src/app/globals.css` 中的 CSS 变量来自定义主题颜色。

### 添加新的图标

1. 在 [React Icons](https://react-icons.github.io/react-icons/) 网站查找所需图标
2. 在 `src/data/sites.ts` 中使用图标名称
3. 图标会自动通过 `DynamicIcon` 组件渲染
4. 网站 favicon 可以从 https://www.google.com/s2/favicons?domain=google.com&sz=32 获取

### 自定义样式

项目提供了多个 CSS 类用于自定义样式：

- `.site-card`: 网站卡片样式
- `.category-card`: 分类卡片样式
- `.search-input`: 搜索框样式
- `.tag`: 标签样式
- `.gradient-bg`: 渐变背景
- `.glass`: 毛玻璃效果

## 🚀 部署

### Vercel 部署

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Add environment variables support"
   git push origin main
   ```

2. **在 Vercel 中配置环境变量**
   - 登录 [Vercel Dashboard](https://vercel.com/dashboard)
   - 选择你的项目
   - 进入 **Settings** → **Environment Variables**
   - 添加以下环境变量：
     ```
     Name: NEXT_PUBLIC_UMAMI_WEBSITE_ID
     Value: 
     Environment: Production, Preview, Development
     ```
   - 点击 **Save**

3. **重新部署**
   - 在 Vercel Dashboard 中点击 **Redeploy**
   - 或者推送新的代码变更

### 环境变量说明

- `NEXT_PUBLIC_UMAMI_WEBSITE_ID`: Umami 统计的网站 ID
  - 以 `NEXT_PUBLIC_` 开头，表示在客户端可用
  - 在本地开发时，创建 `.env.local` 文件
  - 在生产环境（如 Vercel）中，通过平台的环境变量配置

## 📝 许可证

MIT License

## 🙏 致谢

- 设计灵感来自 [webstack.cc](https://webstack.cc/)
- 使用 [Next.js](https://nextjs.org/) 构建
- 样式使用 [Tailwind CSS](https://tailwindcss.com/)
- 图标来自 [React Icons](https://react-icons.github.io/)
