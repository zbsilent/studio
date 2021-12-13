const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //模式
  mode: "production", // "production" | "development" | "none" 指定开发模式
  //入口 打包开始起点 可可以是数组格式[./src/index.ts,./src/a.ts chunk只能是一个]
  entry: {
    app: "./src/index.ts",
  },
  //load配置
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/, //表示node_modules中的tsx文件不做处理
      },
    ],
  },
  //输出
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "build"),
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: true, //压缩去除空格
        removeComments:true
      },
    }),
  ],
};
