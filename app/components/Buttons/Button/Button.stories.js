import React from "react"
import Button from "./Button"

export default {
  title: "Button",
  component: Button,
  argTypes: {
    type: {
      options: ["default", "alert"],
      control: { type: "radio" },
    },
  },
}
const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: "TITLE",
 type:"default"
}
