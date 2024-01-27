<script setup lang="ts">

defineProps<{ active?: boolean }>()
</script>

<template>
    <button
        class="shimmer-base relative bg-white font-semibold p-4 text-xl hover:scale-110"
        :class="{ 'shimmer-active': active }"
    >
        <slot />
        <span class="shimmer bg-white absolute p-4 inset-0 m-auto">
            <slot />
        </span>
    </button>
</template>
