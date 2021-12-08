import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TestComponent from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/TestComponent",
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TestComponent> = (args) => (
  <TestComponent {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
