import type { Meta, StoryFn } from '@storybook/vue3'
import { withActions } from '@storybook/addon-actions/decorator'

import { ref } from 'vue'

import P5Tabs from "./P5Tabs.vue";

const meta = {
  title: 'P5/Tabs',
  component: P5Tabs,
  tags: ['autodocs'],
  argTypes: {},
  args: {}, // default value
  decorators: [withActions]
} satisfies Meta<typeof P5Tabs>

export default meta;

const DefaultTabs: StoryFn = (args) => ({
    components: { P5Tabs },
    setup: () => {
        return { args }
    },
    template: `
        <P5Tabs v-bind="args">
            <template #first>
                <div class="font-semibold bg-white space-y-8 p-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum metus. Curabitur dictum ante nec venenatis convallis. Nunc consectetur vulputate tortor. Nullam auctor nisl vel lectus vestibulum lacinia. Ut ultrices et orci in egestas. Aliquam erat volutpat. Nullam nunc tortor, venenatis at dolor euismod, tincidunt viverra odio. Etiam blandit arcu vel lacus ornare, non placerat eros malesuada. Cras bibendum massa et dui malesuada, rhoncus semper felis iaculis. Maecenas tristique et leo eget porttitor. Phasellus aliquam sem est, vitae rutrum diam rhoncus nec. Duis ac ante risus.
                    </p>
                    <p>
                        Nam tortor dui, interdum non facilisis at, vulputate fermentum leo. Sed nec congue mauris. Nam eu felis lacus. Aliquam suscipit neque ut accumsan porta. Phasellus ac dui hendrerit, hendrerit velit et, congue nisi. In hac habitasse platea dictumst. Nunc aliquam blandit odio sit amet rhoncus. Proin quis suscipit lacus. Quisque finibus, orci id blandit porttitor, massa eros molestie tellus, sed ullamcorper tellus ipsum sit amet lorem. Duis ut semper lacus. Sed tincidunt et mi at dignissim. Donec volutpat gravida est nec iaculis. Sed quis felis id ex ultricies consectetur. Sed turpis felis, consectetur viverra urna sit amet, tincidunt faucibus diam.
                    </p>
                    <p>
                        Aliquam cursus lorem quam, non venenatis orci rutrum ut. Maecenas elit nisi, malesuada ut nisl pharetra, ullamcorper fermentum dui. Nullam dapibus urna sed urna viverra, vitae fringilla lacus luctus. Vivamus malesuada a enim in pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis est at arcu lacinia venenatis. Donec urna felis, efficitur ut rhoncus at, cursus et massa. Sed quis blandit tortor. Vivamus sit amet elit a ante interdum lacinia vel at eros. Mauris tristique ante consectetur quam mattis, non rhoncus nisi iaculis. 
                    </p>
                </div>
            </template>
            <template #second>
                <div class="font-semibold bg-white space-y-8 p-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et porta nibh. Ut ut venenatis elit, ac lacinia enim. Integer justo sapien, finibus ac turpis ac, fermentum feugiat sapien. Vestibulum hendrerit lacinia placerat. Maecenas maximus bibendum sem sed fringilla. Proin nunc nulla, tempor commodo dui vitae, porttitor accumsan odio. Donec quis enim ac urna sagittis imperdiet eget efficitur erat. Aenean quis pulvinar ipsum, sed tempor purus. Sed laoreet libero consequat tellus blandit luctus. Maecenas nec dictum lorem, quis facilisis nulla.
                    </p>
                    <p>
                        Integer non congue orci. Proin pellentesque, lorem vitae efficitur bibendum, lacus mi tristique lectus, sit amet luctus felis leo ornare libero. Nunc neque metus, pharetra et neque id, pretium convallis urna. Aliquam ut felis vestibulum, tincidunt metus et, ultricies nisl. Suspendisse consectetur sollicitudin est, a molestie magna dignissim eu. Nunc porta mauris eu arcu mattis, sed scelerisque sem congue. Donec eu est nisl. Quisque interdum lorem dolor, a consectetur nibh aliquam vitae. Morbi sapien eros, egestas non bibendum eget, efficitur ac tortor. Proin eget viverra purus, id viverra purus. Donec imperdiet ante non dui luctus, sit amet lacinia arcu elementum. Cras feugiat libero non finibus porta. Donec cursus accumsan dignissim. Nam eu leo id justo auctor bibendum. 
                    </p>
                </div>
            </template>
        </P5Tabs>
    `
})

export const Default = DefaultTabs.bind({})
Default.args = {
    tabs: [
        {
            label: 'First',
            value: 'first',
        },
        {
            label: 'Second',
            value: 'second',
        },
    ]
}
