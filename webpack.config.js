const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src",
  output: {
    path: __dirname + "/dist",
    filename: "khchos_greatest_bundle.js"
  },
  plugins: [new HtmlWebpackPlugin()]
};
