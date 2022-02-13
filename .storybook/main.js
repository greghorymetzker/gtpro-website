const path = require("path")
module.exports = {
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.filter((f) => f.test.toString() !== "/\\.css$/")

    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: false,
          },
        },
      ],
      include: path.resolve(__dirname, "../app"),
    })

    return config
  },
  stories: ["../app/components/**/*.stories.mdx", "../app/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
}
