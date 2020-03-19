const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    contentBase: "dist",
    port: 3000
  },
  devtool: "inline-source-map",
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/images",
        to: "images"
      }
    ]),
    new HTMLWebpackPlugin({
      title: "Slots"
    })
  ]
};
