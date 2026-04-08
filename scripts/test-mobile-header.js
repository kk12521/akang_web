const fs = require('fs');
const path = require('path');

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

const root = process.cwd();
const sidebar = fs.readFileSync(path.join(root, 'layouts', 'partials', 'sidebar.html'), 'utf8');
const headersYml = fs.readFileSync(path.join(root, 'data', 'headers.yml'), 'utf8');

if (!/class="[^"]*\btop-menu\b[^"]*"/.test(sidebar)) {
  fail('手机端侧边栏缺少 top-menu 容器，顶部菜单不会在移动端显示。');
}

if (!/range\s+\.Site\.Data\.headers/.test(sidebar)) {
  fail('手机端侧边栏没有复用 data/headers.yml 渲染顶部菜单。');
}

const invalidHeaderLine = headersYml
  .split(/\r?\n/)
  .find((line) => /^-\s+item:.*\s{2,}icon:/.test(line));

if (invalidHeaderLine) {
  fail(`headers.yml 存在损坏菜单项格式: ${invalidHeaderLine.trim()}`);
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log('PASS: mobile header structure looks valid.');



