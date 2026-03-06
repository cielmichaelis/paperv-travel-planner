# 旅行计划生成器

一个基于React和TypeScript的旅行计划生成器，根据用户的旅行风格偏好生成个性化的旅行计划。

## 功能特点

- **旅行风格选择**：支持冒险探索、休闲度假、文化体验、美食品鉴四种旅行风格
- **个性化计划**：根据目的地、旅行天数和预算生成详细的每日行程
- **费用明细**：自动计算每日和总费用
- **数据持久化**：使用localStorage存储用户偏好和生成的计划
- **响应式设计**：适配不同屏幕尺寸
- **美观界面**：现代化的UI设计和流畅的动画效果

## 技术栈

- React 18
- TypeScript
- Vite
- CSS3

## 如何使用

1. 克隆仓库
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run dev`
4. 在浏览器中打开应用
5. 选择旅行风格、输入目的地、旅行天数和预算
6. 点击"生成旅行计划"按钮
7. 查看生成的详细旅行计划

## 项目结构

```
├── src/
│   ├── components/
│   │   ├── TravelStyleForm.tsx        # 旅行风格偏好收集表单
│   │   ├── TravelPlanGenerator.tsx     # 旅行计划生成器
│   │   ├── TravelPlanDisplay.tsx       # 旅行计划展示
│   │   └── TravelStyleForm.test.tsx    # 测试用例
│   ├── App.tsx                         # 主应用组件
│   ├── App.css                         # 应用样式
│   ├── index.css                       # 全局样式
│   └── main.tsx                        # 应用入口
├── index.html                          # HTML模板
├── package.json                        # 项目配置
├── tsconfig.json                       # TypeScript配置
├── tsconfig.node.json                  # Node.js TypeScript配置
├── vite.config.ts                      # Vite配置
└── .gitignore                          # Git忽略文件
```

## 旅行风格说明

- **冒险探索**：适合喜欢户外活动和刺激体验的旅行者
- **休闲度假**：适合想要放松身心、享受慢生活的旅行者
- **文化体验**：适合对当地历史文化感兴趣的旅行者
- **美食品鉴**：适合热爱美食、想要品尝当地特色的旅行者

## 未来计划

- 集成地图API，显示行程地点
- 添加天气信息
- 支持多人旅行计划
- 导出旅行计划为PDF或其他格式
- 连接旅行预订API，提供实时价格和预订功能

## 许可证

MIT