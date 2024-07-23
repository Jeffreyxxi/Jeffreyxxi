---
prev: ./linux
next: ./modules
---

## Node 学习和笔记整理

### nvs

node 包版本管理工具

### npx

项目下的包管理工具

### mac切换node版本后，yarn 命令 not found

```
1. npm config get prefix
//- /Users/stavinli/.nvm/versions/node/v14.8.0

2. npm config set prefix /Users/stavinli/.nvm/versions/node/【你切换后的版本】

3. npm i yarn -g

4. yarn -v
//-1.22.18
```
