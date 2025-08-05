# 主题切换重构说明

## 概述

本项目已从手动主题切换实现迁移到使用 `next-themes` 库，提供了更稳定和功能丰富的主题切换体验。

## 主要变更

### 1. 依赖更新
- 新增 `next-themes` 依赖包

### 2. 新增组件
- `src/components/ThemeProvider.tsx` - 主题提供者组件
- `src/components/ThemeToggle.tsx` - 主题切换按钮组件

### 3. 修改的文件
- `src/app/layout.tsx` - 添加 ThemeProvider 包装
- `src/components/Header.tsx` - 使用新的 ThemeToggle 组件
- `src/app/globals.css` - 移除手动过渡效果，由 next-themes 处理

## 功能特性

### ✅ 已实现
- 浅色/深色主题切换
- 主题状态持久化（localStorage）
- 避免水合不匹配
- 平滑的主题切换动画
- 不跟随系统主题（`enableSystem={false}`）

### ❌ 已移除
- 跟随系统主题功能
- 手动 localStorage 管理
- 手动 DOM 操作
- 手动过渡效果

## 使用方法

### 在组件中使用主题
```tsx
import { useTheme } from "next-themes";

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme("dark")}>
      切换到深色主题
    </button>
  );
}
```

### 使用主题切换按钮
```tsx
import { ThemeToggle } from "@/components/ThemeToggle";

function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  );
}
```

## 验证

主题切换功能已经集成到 Header 组件中，你可以直接在主页面测试主题切换按钮的功能。

## 配置说明

ThemeProvider 配置：
- `attribute="class"` - 使用 class 属性切换主题
- `defaultTheme="light"` - 默认使用浅色主题
- `enableSystem={false}` - 不跟随系统主题
- `disableTransitionOnChange` - 禁用切换时的过渡动画（由 CSS 处理）

## 注意事项

1. 所有使用主题的组件都需要在 ThemeProvider 内部
2. 使用 `useTheme` hook 的组件需要添加 `"use client"` 指令
3. 主题状态会自动保存到 localStorage
4. 避免了服务端渲染时的水合不匹配问题 