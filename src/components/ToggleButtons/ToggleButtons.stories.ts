import type { Meta, StoryFn } from '@storybook/vue3'
import { withActions } from '@storybook/addon-actions/decorator'

import P5ToggleButtons from "./ToggleButtons.vue";
import { ref } from 'vue';

const meta = {
  title: 'P5/Toggle Buttons',
  component: P5ToggleButtons,
  tags: ['autodocs'],
  argTypes: {},
  args: {}, // default value
  decorators: [withActions]
} satisfies Meta<typeof P5ToggleButtons>

export default meta;

const DefaultTabs: StoryFn = (args) => ({
    components: { P5ToggleButtons },
    setup: () => {
        const selected = ref(null)
        if (args.multiple) {
            selected.value = []
        }
        return { args, selected }
    },
    template: `
        <P5ToggleButtons v-model="selected" v-bind="args">
            
        </P5ToggleButtons>
        <pre class="mt-16">{{ selected }}</pre>
    `
})

export const Default = DefaultTabs.bind({})
Default.args = {
    options: [
        {
            label: 'First',
            value: 'first',
        },
        {
            label: 'Second',
            value: 'second',
        },
        {
            label: 'Third',
            value: 'third',
        },
        {
            label: 'Fourth',
            value: 'fourth',
        },
    ],
    multiple: false,
}

export const Multiple = DefaultTabs.bind({})
Multiple.args = {
    options: [
        {
            label: 'First',
            value: 'first',
        },
        {
            label: 'Second',
            value: 'second',
        },
        {
            label: 'Third',
            value: 'third',
        },
        {
            label: 'Fourth',
            value: 'fourth',
        },
    ],
    multiple: true,
}
