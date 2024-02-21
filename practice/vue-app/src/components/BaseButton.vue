<script setup lang="ts">

import { defineProps } from 'vue';

 defineProps({
    type: {
        type: String,
        required: true,
        validator: (value: string) => {
            return value === 'validate' || value === 'reset';
        },
    },
});

</script>

<template>
    <button
        class="rounded-md h-[48px] text-lg hover:text-white mt-4"
        :class="{
            'bg-blue-200 hover:bg-blue-800': type === 'validate',
            'bg-red-200 hover:bg-red-800': type === 'reset',
        }"
        id="button"
    >
        <slot></slot>
    </button>
</template>

