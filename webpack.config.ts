const path = require("path");

module.exports = {
  webpack: (config: any, { defaultLoaders }: {defaultLoaders: any}) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: "sass-loader",
          options: {
            implementation: require("node-sass"),
          },
        },
      ],
    });

    return config;
  },
};
