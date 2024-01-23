<script setup lang="ts">
import P5Button from "../Button/P5Button.vue";
withDefaults(defineProps<{ tabs: { label?: string, value: string }[], shimmer?: boolean }>(), {
    tabs: () => [],
    shimmer: true
})

const activeTab = defineModel({ default: 0, type: Number })

const setActiveTab = (index: number) => {
    activeTab.value = index
}
</script>

<template>
    <div class="bg-white">
        <nav class="w-fit pb-4 shimmer-shadow">
            <P5Button
                v-for="(tab, index) in tabs"
                :key="`tab-${index}-label-${tab.value}`"
                class="shimmer-shadow-disabled"
                :class="{'shimmer-active': activeTab === index}"
                @click="setActiveTab(index)">
                <slot :name="`label:${tab.value}`">
                    {{ tab.label }}
                </slot>
            </P5Button>
        </nav>
        <div
            v-for="(tab, index) in tabs"
            :key="`tab-${index}-label-${tab.value}`"
            :class="{'shimmer-base shimmer-active': shimmer || shimmer === undefined}"
        >
            <div :class="{'shimmer': shimmer || shimmer === undefined}">
                <Transition name="grow">
                    <div v-if="activeTab === index">
                        <slot :name="tab.value" />
                    </div>
                </Transition>
                </div>
            </div>
    </div>
</template>

<style scoped>

.grow-enter-active {
    animation: growing 0.2s ease-in-out 0s;
}

.grow-leave-active {
    position: absolute;
}

@keyframes growing {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>