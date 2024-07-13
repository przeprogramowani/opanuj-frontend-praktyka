<script setup lang="ts">

import { useSolver } from '../composables/useSolver.ts';
import { useValidator } from '../composables/useValidator.ts';
import BasicButton from '../components/BasicButton.vue';
import BasicInput from '../components/BasicInput.vue';
import { computed, ref } from 'vue';

const { numA, numB, result, handleAdd, handleSubtract, handleMultiply, handleDivide } = useSolver();

const valResult = ref({ numA: '', numB: '' });

const { handleValidation } = useValidator(valResult);

const isValid = computed(() => !(valResult.value.numA || valResult.value.numB));


</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Solver</h1>
    <div class="w-full">
      <div class="grid grid-cols-2 gap-x-4">
        <BasicInput
          type="number"
          v-model="numA"
          required
          @on-blur="(value) => handleValidation(value, 'numA')"
        >
          <p v-if="valResult.numA" class="text-red-600">{{ valResult.numA }}</p>
        </BasicInput>
        <BasicInput
          type="number"
          v-model="numB"
          required
          @on-blur="(value) => handleValidation(value, 'numB')"
        >
          <p v-if="valResult.numB" class="text-red-600">{{ valResult.numB }}</p>
        </BasicInput>
      </div>
      <div class="grid grid-cols-4 gap-x-4 my-4">
        <BasicButton @click="handleAdd" :disabled="!isValid">+</BasicButton>
        <BasicButton @click="handleSubtract" :disabled="!isValid">-</BasicButton>

        <BasicButton @click="handleMultiply" :disabled="!isValid">*</BasicButton>
        <BasicButton @click="handleDivide" :disabled="!isValid">/</BasicButton>
      </div>
      <div>Result: {{ result }}</div>
    </div>
  </div>
</template>

<style scoped>
</style>
