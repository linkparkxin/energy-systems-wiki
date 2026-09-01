# Supabase 开放问答实验

本目录保存 `HVAC & Energy Systems Wiki` 的 Supabase 数据库初始化脚本。前端页面位于 `docs/community/`，当前方案保持文章页的 Waline 评论不变，仅将 `/community/` 作为 Supabase 实时开放问答实验区。

## 一次性配置

1. 在 Supabase 创建 Free 项目。
2. 在 Authentication → Providers 中开启 Anonymous Sign-Ins。
3. 打开 SQL Editor，执行 `migrations/20260901_community_qa.sql` 的完整内容。
4. 在 Project Settings → API 中复制 Project URL 和公开的 `anon`/publishable key。
5. 在 GitHub 仓库 `Settings → Secrets and variables → Actions` 中新增：

   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

   也可以在 Variables 中配置同名变量。公开的 Project URL 和 anon key 会进入前端构建结果；`service_role key`、数据库密码和其他管理密钥不得配置到 `VITE_` 变量，也不得提交到 Git。

6. 手动触发 GitHub Actions，或向 `main` 分支提交一次不相关的安全修改，等待 Pages 构建完成。

## 验证顺序

1. 打开 `/community/`，确认状态显示“实时已连接”。
2. 用普通浏览器发布一个测试问题。
3. 用无痕窗口打开相同页面，确认问题能够读取。
4. 在两个窗口分别发布回复，确认另一窗口无需刷新即可出现新内容。
5. 在 Supabase Table Editor 中把测试问题的 `status` 改为 `hidden`，确认前端实时消失。
6. 将 `status` 恢复为 `visible`，确认问题重新出现。
7. 检查 `community_questions`、`community_answers` 和 `community_moderation_log` 的权限，确认普通匿名用户无法读取治理日志或修改状态。

## 管理员治理

管理员不参与预审，也不承担日常答疑。管理员只在发现广告、攻击、泄密、隐私或安全风险时，通过 Dashboard 对内容执行隐藏、恢复、删除或归档。建议优先将 `status` 改为 `hidden`，确认后再决定是否删除。

当前前端不提供管理员入口，因此没有任何管理员密钥暴露到浏览器。正式知识归档仍通过 Markdown 和 Git 完成，实时讨论数据只作为讨论记录，不会自动改写知识库正文。

## 免费版边界

该实验依赖 Supabase Free 额度。留言内容通常很小，适合当前规模；但免费项目存在额度、停用和服务策略变化的可能性。应定期从 Dashboard 导出数据，重要问答整理回 Git。匿名用户账号也应定期检查，避免长期积累无效身份。

