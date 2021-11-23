const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/payment/latest/", //mudar nome do remote
  },
  devtool: "source-map",
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
  ],
};

module.exports = merge(commonConfig, prodConfig);
