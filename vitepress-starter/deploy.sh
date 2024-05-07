#!/usr/bin/env sh
###
 # @Description: 
 # @Author: 李泽诚
 # @Date: 2024-03-28 16:28:27
 # @LastEditors: 李泽诚
 # @LastEditTime: 2024-03-30 17:15:25
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 意思为将master构建后的代码合并到gh-pages分支上，然后在gh-pages分支上部署~
git push -f git@github.com:leehiiu/lzc-docs.git master:gh-pages

cd -