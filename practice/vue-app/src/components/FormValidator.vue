<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import FormInput from './FormInput.vue';
import { ref } from 'vue';
import type { Result } from '../types/form';
import { greaterThan, lessThan, isNumber, isEven } from '../utils/validators';

const inputValue = ref<string>('');
const result = ref<Result>('Invalid');
const showResult = ref<boolean>(false);
const rules = [greaterThan(0), lessThan(100), isNumber, isEven];

const validateResult = () => {
  const isInputValid = rules.every((rule) => {
    return rule(inputValue.value);
  });
  result.value = isInputValid ? 'Valid' : 'Invalid';
  showResult.value = true;
};

const clearResult = () => {
  inputValue.value = '';
  result.value = 'Invalid';
  showResult.value = false;
};
</script>

<template>
  <FormInput v-model="inputValue" placeholder="type number between 0 and 100" />
  <div class="grid grid-cols-2 gap-x-2">
    <BaseButton type="validate" @click="validateResult">
      Validate It!
    </BaseButton>
    <BaseButton type="reset" @click="clearResult"> Clear! </BaseButton>
  </div>
  <div v-if="showResult" class="text-lg mt-4" id="result">
    Result is {{ result }}
  </div>
</template>

<style scoped></style>
