<script setup lang="ts">
const props = defineProps<{ active?: boolean, toggle?: boolean }>()

const emit = defineEmits(['click'])

const toggleState = defineModel({ default: false, type: Boolean, required: false })

const onClick = () => {
    props.toggle && (toggleState.value = !toggleState.value)
    emit('click')
}
</script>

<template>
    <button
        class="shimmer-base relative bg-white font-semibold p-4 text-xl hover:scale-110"
        :class="{ 'shimmer-active': active || (toggle && toggleState), 'toggle-hover': toggle }"
        @click="onClick"
    >
        <slot />
        <span class="shimmer bg-white absolute p-4 inset-0 m-auto">
            <slot />
        </span>
    </button>
</template>
