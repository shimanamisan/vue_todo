# Vue.js で作成した TODO リスト

## 概要

- Vue.js を使用した DOM 操作になれるために作成しました。
- その他**webpack や babel**を使用した開発環境の構築も行いました。

[https://vue-task-app.shimanamisan.com/](https://vue-task-app.shimanamisan.com/)

## 機能

1. タスクの追加
2. タスクの削除
3. タスク完了の切り替え
4. 完了したタスクの一括削除
5. 追加したタスクの編集
6. タスクの検索機能
7. ドラッグ&ドロップで並び替え
8. ローカルストレージに現状のタスクを保存
9. その他の FW・ライブラリで作成した TODO アプリへのリンクを表示

## 制作記録

- [Vue.js で TODO リストを作成](https://blog.shimanamisan.com/archives/180)

# Install package

```sh
yarn add -D webpack webpack-cli webpack-dev-server webpack-livereload-plugin

yarn add vue

# .vueファイルを読み込むために必須
yarn add -D vue-loader vue-template-compiler

# CSS関係
yarn add -D css-loader style-loader sass node-sass sass-loader node-sass-glob-importer autoprefixer postcss-loader

# JS系ローダー
yarn add -D babel-loader @babel/core @babel/preset-env

# ファイル
yarn add -D file-loader

# その他
yarn add -D mini-css-extract-plugin uglifyjs-webpack-plugin webpack-build-notifier prettier
yarn add -D  optimize-css-assets-webpack-plugin terser-webpack-plugin
```

## 参考

- [リンク](https://www.white-space.work/webpack-4-settings/)
- [リンク](https://log.pocka.io/posts/vue-webpack-tutorial/)
