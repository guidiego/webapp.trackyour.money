import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tabs from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const DefaultCase = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultCase.args = {
  children: "Default Tabs",
  options: [
    { id: 1, text: "Test" },
    { id: 2, text: "Test 1" },
    { id: 3, text: "Test 2" },
  ],
};

export const Active = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Active.args = {
  children: "Default Tabs",
  options: [
    { id: 1, text: "Test" },
    { id: 2, text: "Test 1" },
    { id: 3, text: "Test 2" },
  ],
  activeId: 1,
};

export const Inverted = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Inverted.args = {
  children: "Default Tabs",
  options: [
    { id: 1, text: "Test" },
    { id: 2, text: "Test 1" },
    { id: 3, text: "Test 2" },
  ],
  activeId: 1,
  inverted: true,
};
