# 星界力官网项目

北京星界力科技有限公司企业官网项目，采用 Monorepo 管理，当前为 V1 静态官网版本，聚焦 AI Agent 产品与工作流场景。

## 技术栈

- 前端：Next.js 15（App Router）+ TypeScript
- 工程：pnpm workspace + Turborepo
- 风格：品牌化深色科技风，响应式多端适配
- 部署：Cloudflare Pages（V1 静态导出）

## 项目结构

- `apps/web` 官网前端应用（V1 已实现）
- `apps/api` NestJS 后端预留目录（V2）
- `apps/admin` 后台管理端预留目录（V2）
- `packages/*` 共享能力预留目录
- `docs` 需求、背景、技术实现文档
- `.trae/skills/official-site-context` 官网上下文技能与计划文档

## 本地开发

```bash
pnpm install
pnpm --filter @singularity/web dev
```

默认访问：`http://localhost:3000`

## 质量校验

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## 构建产物

- `apps/web/next.config.ts` 已启用 `output: "export"`
- 执行 `pnpm build` 后静态产物输出到 `apps/web/out`
- `apps/web/public/robots.txt` 与 `apps/web/public/sitemap.xml` 用于 SEO 基础能力

## Cloudflare Pages 部署建议

- Build command：`pnpm build`
- Build output directory：`apps/web/out`
- Node 版本建议：20+
- 包管理器：pnpm
- Framework preset：`None`

## Cloudflare 报错修复（nodejs_compat）

若访问线上域名出现：
`no nodejs_compat compatibility flag set`

按以下顺序处理：

1. 进入 Cloudflare Pages 项目设置，确认构建配置：
   - Build command：`pnpm build`
   - Build output directory：`apps/web/out`
   - Framework preset：`None`
2. 在 `Functions -> Compatibility flags` 中，为 Production 和 Preview 同时添加：
   - `nodejs_compat`
3. 重新触发部署

仓库内已提供 `wrangler.toml`，用于统一 Pages 输出目录与兼容标记：
- `pages_build_output_dir = "apps/web/out"`
- `compatibility_flags = ["nodejs_compat"]`

## 文档索引

- [需求文档](./docs/需求文档.md)
- [公司背景文档](./docs/公司背景文档.md)
- [技术实现文档](./docs/技术实现文档.md)
- [开发计划](./.trae/skills/official-site-context/plan.md)
