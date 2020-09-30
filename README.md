```sh
echo "# vue_todo" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/shimanamisan/vue_todo.git
git push -u origin master
```

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