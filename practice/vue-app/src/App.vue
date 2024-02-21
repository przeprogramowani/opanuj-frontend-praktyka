<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { validate } from './validator';
import Input from './components/Input.vue';
import { useField } from './use-field.ts';

type Config = {
  label: string
  operationFn: (a: number, b: number) => number
}

type OperationFn = Config['operationFn']

const { value: firstValue, isValid: isFirstValueValid } = useField(validate)
const { value: secondValue, isValid: isSecondValueValid } = useField(validate)

const result = ref(0)

const config: Config[] = [
  {
    label: '+',
    operationFn: (a: number, b: number) => a + b,
  },
  {
    label: '-',
    operationFn: (a: number, b: number) => a - b,
  },
  {
    label: '*',
    operationFn: (a: number, b: number) => a * b,
  },
  {
    label: '/',
    operationFn: (a: number, b: number) => a / b,
  }
]

function handleOperatorClick(operationFn: OperationFn) {
  if (!isFirstValueValid.value || !isSecondValueValid.value) {
    return
  }
  result.value = operationFn(firstValue.value, secondValue.value)
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="grid grid-cols-2 gap-x-4">
      <Input v-model.number="firstValue" :is-valid="isFirstValueValid" />
      <Input v-model.number="secondValue" :is-valid="isSecondValueValid" />
    </div>
    <div class="grid grid-cols-4 gap-x-4 my-4">
      <button
        v-for="{ label, operationFn } in config"
        :key="label"
        class="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
        @click="handleOperatorClick(operationFn)"
      >
        {{ label }}
      </button>
    </div>
    <div>Result: {{ result }}</div>
  </div>
</template>
