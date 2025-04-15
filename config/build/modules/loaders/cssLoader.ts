import { RuleSetRule } from "webpack";
import { BuildOptions } from "../../types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const getCssLoader = ({ isDev }: BuildOptions): RuleSetRule => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.s[ac]ss$/i,
            namedExport: false,
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };
};
