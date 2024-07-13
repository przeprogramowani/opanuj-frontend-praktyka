<script setup lang="ts">
type BasicButtonProps = {
  disabled?: boolean;
}
const props = defineProps<BasicButtonProps>();

const emit = defineEmits(['click']);


const handleButtonClick = (): void => {
  emit('click');
};
</script>

<template>
  <button
    :disabled="props.disabled"
    :class="props.disabled ? 'bg-gray-400 cursor-not-allowed' : 'cursor-pointer bg-blue-200 hover:bg-blue-500 focus-visible:outline-4 focus-visible:ring-4 focus:outline-4 focus:ring-4 hover:text-white rounded-md'"
    class="transition-border-color duration-25  font-medium rounded-lg  px-2 py-4 text-lg"
    @click="handleButtonClick"
  >
    <slot></slot>
  </button>
</template>

<style scoped>


</style>
