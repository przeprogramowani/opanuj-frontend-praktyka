<script setup lang="ts">
import { ref } from 'vue';
type Result = 'Valid' | 'Invalid' | 'Not a number';

const inputValue = ref<string>('');
const result = ref<Result>('Invalid');
const showResult = ref<boolean>(false);

const validateResult = () => {
  const parsedResult = Number(inputValue.value);
  if (isNaN(parsedResult)) {
    result.value = 'Not a number';
    showResult.value = true;
    return;
  }
  if (parsedResult > 0 && parsedResult < 100 && parsedResult % 2 === 0) {
    result.value = 'Valid';
  } else {
    result.value = 'Invalid';
  }
  showResult.value = true;
};

const clearResult = () => {
  inputValue.value = '';
  result.value = 'Invalid';
  showResult.value = false;
};
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="flex flex-col">
      <input
        class="rounded-md p-4 shadow-lg w-100"
        type="string"
        placeholder="Enter a number between 0 and 100"
        v-model.number="inputValue"
      />
      <div class="grid grid-cols-2 gap-x-2">
        <button
          class="rounded-md text-lg bg-blue-200 hover:bg-blue-800 hover:text-white p-4 mt-4"
          id="button"
          @click="validateResult"
        >
          Validate It!
        </button>
        <button
          class="rounded-md text-lg bg-red-200 hover:bg-red-800 hover:text-white p-4 mt-4"
          id="button2"
          @click="clearResult"
        >
          Clear!
        </button>
      </div>
      <div v-if="showResult" class="text-lg mt-4" id="result">
        Result is {{ result }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
