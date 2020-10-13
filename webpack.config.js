const path = require("path");
// resolve()は、絶対パスを生成するメソッド
// webpack.config.jsファイルが存在している現在のディレクトリ名と、distディレクトリを連結して絶対パスに変換している
const outputPath = path.resolve(__dirname, "dist");
const alias = path.resolve(__dirname, "src");

// const { HotModuleReplacementPlugin } = require('webpack');
const { VueLoaderPlugin } = require("vue-loader"); // vue-loaderの読み込み
const LiveReloadPlugin = require("webpack-livereload-plugin"); // LIVEリロードをするためのプラグイン
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // app.jsとapp.cssファイルに分割するためのプラグイン
const TerserPlugin = require("terser-webpack-plugin"); // JSのコメントをビルド時に削除する
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 別ファイルに出力したCSSファイルを圧縮するために必要
const WebpackBuildNotifierPlugin = require("webpack-build-notifier"); // 通知用プラグイン
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // プロダクションモードでバンドル時に、console.logを自動的に削除するプラグイン

console.log(`これがoutputPathです ：${outputPath}`);
console.log(`これがaliasです ：${alias}`);

// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = "production";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "production";

// モジュールにオブジェクトを設定する
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,
  performance: { hints: false },
  // エントリーポイントの設定：モジュールをバンドルするための対象物を設定している
  // babel-loader8 でasync/awaitを動作させるためには、@babel/polyfillが必要
  entry: ["@babel/polyfill", "./src/js/index.js"],
  output: {
    // 出力するファイル名を設定
    filename: "main.js",
    // 絶対パスを指定
    path: `${outputPath}/js`,
  },
  devServer: {
    contentBase: `${outputPath}`,
    hot: true,
    open: true,
    writeToDisk: true,
    watchContentBase: true,
    port: 8081,
  },
  // loaderを登録していく
  module: {
    // ruleは配列で登録する
    rules: [
      // {
      //   enforce: 'pre', // この設定を持たないローダーよりも、一番早くローダーが実行される（ローダーの配置を気にしなくて良くなる）
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // app.jsとapp.cssファイルに分割するためのプラグイン
          MiniCssExtractPlugin.loader,

          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // url()を変換しない
              url: false,
              // ソースマップを有効にする
              sourceMap: enabledSourceMap,
            },
          },
          {
            // Sassをバンドルするための機能
            loader: "sass-loader",
            options: {
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,
            },
          },
          {
            loader: "import-glob-loader",
          },
        ],
      },
      {
        // Vueファイルに対する設定
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              loaders: {
                js: "babel-loader",
              },
              options: {
                presets: [
                  // プリセットを指定することで、ES2020 を ES5 に変換
                  "@babel/preset-env",
                ],
              },
            },
          },
        ],
      },
      {
        // JSファイルに対する設定
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // プリセットを指定することで、ES2020 を ES5 に変換
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
      {
        // 拡張子の大文字も許容するように最後尾に i を加える
        // jpegとjpgの様にeがあるかないかを許容するのに、jpe?gという形式にする
        test: /\.(jpe?g|png|svg|gif|ico)$/i,
        loader: "url-loader",
        // optionsを指定することで、file-loaderを有効化することが出来る
        options: {
          // 指定のサイズを超過すると、画像が[name]で指定されたファイルに書き換わり独立する
          // あたかもimgディレクトリ配下に存在しているかのように、別ファイルとして出力できる（Developerツールでも確認済み）
          // 50KB以上だったらファイルとしてコピー（分離）する
          limit: 1 * 1024,
          name: "./../img/[name].[ext]",
        },
      },
    ],
  },
  // 各種プラグインを読み込む
  plugins: [
    // Vueを読み込めるようにするため
    new VueLoaderPlugin(),
    // LIVEリロードするためのプラグイン
    new LiveReloadPlugin(),
    // jsファイルとcssファイルを分割するためのプラグイン
    new MiniCssExtractPlugin({
      // ファイルの出力先。エントリーポイントのjsディレクトリが基準となるので出力先には注意
      // "./src/index.js"を起点に出力先を指定する
      filename: "../css/style.css",
    }),
    new WebpackBuildNotifierPlugin(),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["*hot*", "!main.js"],
    }),
  ],
  // 最適化（webpack4から導入された）
  optimization: {
    // optimizationの設定の中のminimizerという設定にUglifyJsPluginインスタンスを渡す
    minimizer: [
      new TerserPlugin({
        extractComments: "all",
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    // Webpackで利用するときの設定
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": `${alias}/js`,
    },
    extensions: ["*", ".js", ".vue", ".json"], // importするときのファイル名から拡張子部分を省略できるようになる
  },
  devtool: "eval-source-map",
};
