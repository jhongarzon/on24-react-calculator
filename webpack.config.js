const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/entry.tsx",
  output: {
    path: path.resolve(__dirname, "output/"),
    // publicPath: "/output/",
    filename: "main.js",
  },
  module: {
    rules: [
      //   {
      //     test: /\.css$/,
      //     use: ["style-loader", "postcss-loader"],
      //   },
      //   {
      //     test: /\.(js|jsx)$/,
      //     exclude: /(node_modules)/,
      //     use: ["babel-loader", "astroturf/loader"],
      //     options: { presets: ["@babel/env"] },
      //   },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    historyApiFallback: true,
    port: 3000,
    publicPath: "http://localhost:3000/",
    https: false,
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
