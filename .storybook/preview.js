import s from "!style-loader!css-loader!../app/assets/global.css"
import i from "!style-loader!css-loader!../app/assets/fonts/icons.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
