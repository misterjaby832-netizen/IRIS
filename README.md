# IRIS 免费测试部署

此目录是现有 Sites 作品集的独立副本。原站不受此部署影响。

## 页面

- `/` 首页
- `/kfc/` KFC（React，保留交互）
- `/panerai.html` Panerai
- `/cluebie.html` Cluebie

所有内部跳转使用当前域名。无服务器接口、数据库或第三方字体 CDN 依赖。

## 构建

Node.js 22.13 或更高版本；使用 pnpm 与已提交的 pnpm-lock.yaml。

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm build
```

输出为 `dist/`。构建会检查 Cloudflare 的单文件 25 MiB 限制。

## Cloudflare Workers 免费静态部署

- Worker 名称：`iris-portfolio-preview`
- 已创建测试网址：https://iris-portfolio-preview.misterjaby832.workers.dev/
- 首次部署：Cloudflare Ready；当前浏览器 HTTPS 握手失败，外网可访问性尚未通过验证
- 静态目录：`dist`
- 配置：`wrangler.jsonc`
- 不需要数据库、付费套餐或自购域名

命令行部署（由拥有账号权限的用户完成 Wrangler 登录）：

```sh
pnpm exec wrangler login
pnpm build
pnpm exec wrangler deploy
```

## 后续连接 GitHub 自动部署

将本目录作为独立私有仓库的根目录。在 Cloudflare 中连接该仓库，生产分支设为 main，构建命令设为 `pnpm build`，部署命令设为 `pnpm exec wrangler deploy`。先让用户完成 Cloudflare GitHub App 的仓库授权。未连接前，推送 GitHub 不会自动更新线上站点。

## 更新源代码

- 此仓库内：直接编辑 `home/` 与 `kfc/app/`，然后构建。
- 原作品集工作区同步：运行 `python3 scripts/sync-local.py`，再构建。该同步脚本依赖原工作区相邻的 Sites 工程；云端构建不运行它。

## 移动端验收

浏览器侧已验证独立构建与案例切换。仍须用真实手机检查：iOS Safari / Android Chrome，菜单开关和三项跳转、页尾 next、Panerai 展开与折叠、Cluebie 播放/静音/全屏和图片比较、KFC 图片查看与暂停动效。检查竖屏与横屏是否横向溢出，并分别用大陆 Wi-Fi 和手机流量验证直连。

免费全球测试域名不保证中国大陆各运营商的连通性、速度或持续可用性。无大陆线路保证，不能把本地加载速度当作真实大陆访问速度。
