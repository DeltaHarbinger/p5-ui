import type { Meta, StoryFn } from '@storybook/vue3';
import { withActions } from "@storybook/addon-actions/decorator";

import P5Button from './P5Button.vue';
import { ref } from 'vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'P5/Button',
  component: P5Button,
  tags: ['autodocs'],
  argTypes: {
  },
  args: { }, // default value
  parameters: {
    actions: {
      handles: ['mouseover', 'click', 'dblclick']
    }
  },
  decorators: [withActions],
} satisfies Meta<typeof P5Button>;

export default meta;

const DefaultButton: StoryFn = (args) => ({
    components: { P5Button },
    setup: () => {
        return { args }
    },
    template: `
        <P5Button v-bind="args" v-on="args.eventHandlers">Hello</P5Button>
        
    `
})

const ToggleButton: StoryFn = (args) => ({
  components: { P5Button },
  setup: () => {
      const toggleState = ref(false)
      return { args, toggleState }
  },
  template: `
      <P5Button v-bind="args" v-model="toggleState">Hello</P5Button>
      <br class="mb-8" />
      <pre class="transition-colors duration-500" :class="{'text-green-600': toggleState, 'text-red-600': !toggleState}">Toggle State: {{ toggleState ? 'On' : 'Off' }}</pre>
  `
})

export const Default = DefaultButton.bind({})

export const Active = DefaultButton.bind({})
Active.args = {
  active: true,
}

export const Toggle = ToggleButton.bind({})
Toggle.args = {
  toggle: true
}

