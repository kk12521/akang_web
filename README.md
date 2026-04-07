# 康康网站

`康康网站` 是我的个人导航项目，基于 `Hugo` 构建，用来整理科研办公、AI、阅读、影视和常用效率入口。

在线地址：

- 导航站：`https://likang.eu.cc`
- 博客：`https://akang9.eu.cc`
- 仓库：`https://github.com/kk12521/myweb`

## 项目特点

- 纯静态站点，部署简单，打开快。
- 导航数据集中在 `data/webstack.yml`，维护成本低。
- 首页已经按个人使用场景做了重排，偏简约、偏工作台风格。
- 支持自定义常用推荐、分区导航、搜索引擎切换、二维码卡片和友情链接。
- 支持部署到 GitHub Pages 和 Vercel。

## 目录说明

```text
.
├─ config.toml                  # Hugo 总配置
├─ content/
│  └─ about.md                  # 关于页
├─ data/
│  ├─ headers.yml               # 顶部菜单
│  ├─ friendlinks.yml           # 友情链接
│  └─ webstack.yml              # 导航数据主文件
├─ layouts/
│  ├─ index.html                # 首页入口
│  ├─ 404.html                  # 404 页面
│  ├─ _default/
│  │  └─ single.html            # 单页模板
│  └─ partials/                 # 页面局部模板
├─ static/
│  └─ assets/
│     ├─ css/                   # 样式文件
│     ├─ images/                # 图片与图标
│     ├─ js/                    # 运行时脚本
│     └─ fontawesome-5.15.4/    # 仅保留运行时真正用到的字体资源
└─ .github/workflows/
   └─ hugo.yml                  # GitHub Pages 构建流程
```

## 本地使用

### 1. 建议先整理文件夹名称

如果你是从 GitHub 下载压缩包，解压后通常会出现类似：

```text
myweb
```

建议把最外层目录改成更短、更清晰的名字，例如：

```text
kang-site
```

这样后续运行、提交和部署都会更方便。

### 2. 安装 Hugo

建议使用 `Hugo 0.122+`。

### 3. 本地预览

```bash
hugo server -D
```

默认预览地址：

```text
http://localhost:1313
```

### 4. 构建静态文件

```bash
hugo --gc --minify
```

构建结果输出到：

```text
public/
```

## 日常维护入口

- 改站点名称、Logo、背景图、版权、作者：
  `config.toml`
- 改顶部导航：
  `data/headers.yml`
- 改所有导航卡片内容：
  `data/webstack.yml`
- 改友情链接：
  `data/friendlinks.yml`
- 改关于页：
  `content/about.md`
- 改首页结构：
  `layouts/partials/*.html`
- 改视觉样式：
  `static/assets/css/custom-style.css`
- 改交互逻辑：
  `static/assets/js/site-enhancements.js`

## `data/webstack.yml` 怎么写

一级栏目示例：

```yml
- taxonomy: 常用推荐
  icon: far fa-star
  links:
    - title: GitHub
      logo: github.png
      url: https://github.com/
      description: GitHub 开源社区。
```

二级栏目示例：

```yml
- taxonomy: 科研办公
  icon: fas fa-flask fa-lg
  list:
    - term: 科研AI
      links:
        - title: ChatGPT
          logo: https://chatgpt.com/favicon.ico
          url: https://chatgpt.com/
          description: OpenAI 的对话式 AI 助手，适合问答、写作、代码与资料整理。
```

## 这个仓库这次做过的清理

- 删除了未引用的旧 logo、旧宣传图、旧压缩包和旧预览素材。
- 删除了未被模板加载的旧 JS 文件。
- 清理了 `fontawesome` 目录下不参与运行的源码、SVG、元数据和备用样式。
- 删除了与当前个人项目无关的旧镜像同步工作流。
- 保留了当前站点运行真正需要的模板、样式、脚本、字体和图片。

## 部署

### GitHub Pages

仓库内保留了 GitHub Pages 工作流：

```text
.github/workflows/hugo.yml
```

推送到 `main` 后会自动构建并发布。

### Vercel

当前项目也已经可部署到 Vercel，并且已经绑定：

```text
https://likang.eu.cc
```

## 说明
  
如果后续要继续扩展，建议优先保持：

1. `data` 驱动内容
2. `layouts/partials` 管结构
3. `custom-style.css` 管视觉
