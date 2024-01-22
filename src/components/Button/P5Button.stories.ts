import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';

import P5Button from './P5Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'P5/Button',
  component: P5Button,
  tags: ['autodocs'],
  argTypes: {
  },
  args: { }, // default value
} satisfies Meta<typeof P5Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultButton: StoryFn = () => ({
    components: { P5Button },
    setup: () => {
        return {}
    },
    template: `
        <P5Button>Hello</P5Button>
    `
})

export const Default = DefaultButton.bind({})


export const Primary: Story = {
  args: {
  },
};

export const Secondary: Story = {
  args: {
  },
};

export const Large: Story = {
  args: {
  },
};

export const Small: Story = {
  args: {
  },
};
