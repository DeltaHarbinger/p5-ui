<script setup lang="ts">
import P5Button from "../Button/P5Button.vue";

interface Props {
    options: {
        label: string,
        value: any,
        disabled?: boolean,
    }[],
    multiple?: boolean,
}

const props = defineProps<Props>()

const selected = defineModel<any | any[] | null>({ default: null, required: false })

const toggleValue = (value: any) => {
    if (props.multiple) {
        if (selected.value === null || !Array.isArray(selected.value)) {
            selected.value = []
        }
        if (Array.isArray(selected.value)) {
            if (selected.value.includes(value)) {
                const targetIndex = selected.value.indexOf(value)
                selected.value.splice(targetIndex, 1)
                return
            }
            selected.value.push(value)
        }
        return
    }
    if (selected.value === value) {
        selected.value = null
        return
    }
    selected.value = value
}
</script>

<template>
    <div class="w-fit text-nowrap whitespace-nowrap">
        <P5Button
            v-for="(option, index) in options"
            :key="`option${index}_${option.value}`"
            :disabled="option.disabled"
            :active="selected === option.value || (Array.isArray(selected) && selected.includes(option.value))"
            @click="toggleValue(option.value)"
        >
            <slot
                :name="option.value"
                :active="selected === option.value || (Array.isArray(selected) && selected.includes(option.value))"
            >
                {{ option.label }}
            </slot>
        </P5Button>
    </div>
</template>