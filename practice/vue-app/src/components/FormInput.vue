<script setup lang="ts">

    defineProps({
        placeholder: {
            type: String,
            required: true,
        },
    });

  const inputValue = defineModel()

</script>

<template>
    <input
        class="rounded-md p-4 shadow-lg w-100"
        type="text"
        v-model="inputValue"
        :placeholder="placeholder"
    />
</template>

