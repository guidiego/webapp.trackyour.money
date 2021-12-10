import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Paper from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Paper",
  component: Paper,
} as ComponentMeta<typeof Paper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const DefaultCase = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultCase.args = {
  children: "Default Paper",
};

export const Rounded = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rounded.args = {
  children: "Rounded Paper",
  rounded: true,
};
