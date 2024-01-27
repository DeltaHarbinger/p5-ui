import type { Meta, StoryFn } from '@storybook/vue3';
import { withActions } from "@storybook/addon-actions/decorator";

import P5Toggle from './P5Toggle.vue';
import { ref } from 'vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'P5/Toggle',
  component: P5Toggle,
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
} satisfies Meta<typeof P5Toggle>;

export default meta;

const DefaultButton: StoryFn = (args) => ({
    components: { P5Toggle },
    setup: () => {
        const state = ref(false)
        return { args, state }
    },
    template: `
        <P5Toggle v-model="state" />
        <pre class="mt-16">{{ state }}</pre>
    `
})

export const Default = DefaultButton.bind({})

