/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8081/",
  },
  devServer: {
    port: 8081, //cada webpack build é escutado em uma porta no local
    historyApiFallback: {
      index: "/index.html",
    },
  },
  devtool: "eval-source-map",
  plugins: [
    new ModuleFederationPlugin({
      name: "components", //mudar nome do remote
      filename: "remoteEntry.js",
      exposes: {
        "./ComponentsApp": "./src/bootstrap", //mudar nome do remote
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
