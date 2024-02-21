<script setup lang="ts">
import TextField from './components/TextField.vue';
import BaseButton from './components/BaseButton.vue';
import { TResultValidation } from './types/validation';

import { ref } from 'vue';

import { greaterThan, lessThan, isEven, isNumber } from './utiles/validation';

const inputValue = ref<string>('');
const result = ref<TResultValidation | ''>('');

const rules = [greaterThan(0), lessThan(100), isEven, isNumber];

const validateResult = () => {
  const isValid = rules.every((rule) => rule(inputValue.value));
  result.value = isValid ? 'Valid' : 'Invalid';
};

const resetInput = () => {
  inputValue.value = '';
  result.value = '';
};
</script>

<template>
  <div class="bg-gray-100 p-4 h-screen">
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-col">
        <TextField
          v-model="inputValue"
          placeholder="Type an even number between 0 and 100"
        />
        <div class="grid grid-cols-2 gap-x-2">
          <BaseButton
            id="button"
            validate
            @click="validateResult"
          >
            Validate It!
          </BaseButton>
          <BaseButton
            id="button2"
            reset
            @click="resetInput"
          >
            Clear!
          </BaseButton>
        </div>
        <div
          class="text-lg mt-4"
          id="result"
        >{{ result }}</div>
      </div>
    </div>
  </div>
</template>
./utiles/validators
<style scoped></style>
