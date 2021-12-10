import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultCase = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultCase.args = {
  children: "Default Button (Primary)",
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  children: "Secondary Button",
  color: "secondary",
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Danger.args = {
  children: "Danger Button",
  color: "danger",
};
