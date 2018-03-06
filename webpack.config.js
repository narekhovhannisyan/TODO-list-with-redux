const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src",
  output: {
    path: __dirname + "/dist",
    filename: "source.js",
  },
  plugins: [new HtmlWebpackPlugin()]
};
