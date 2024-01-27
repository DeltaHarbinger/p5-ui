<script setup lang="ts">
import { computed, onBeforeMount } from "vue";

import P5ToggleButtons from "../ToggleButtons/ToggleButtons.vue";

const props = withDefaults(
    defineProps<{ onLabel?: string, offLabel?: string, onValue?: any, offValue?: any }>(),
    { onLabel: "On", onValue: true, offLabel: "Off", offValue: false }
)

const active = defineModel<any>({ default: false, required: false })

const options = computed<{ label: string, value: any }[]>(() => {
    return [
        {
            label: props.onLabel,
            value: props.onValue,
        },
        {
            label: props.offLabel,
            value: props.offValue
        },
    ]
})

onBeforeMount(() => {
    if (props.offValue !== false && active.value === false) {
        active.value = props.offValue
    }
})
</script>

<template>
    <div class="w-fit text-nowrap whitespace-nowrap">
        <P5ToggleButtons v-model="active" :options="options"></P5ToggleButtons>
    </div>
</template>