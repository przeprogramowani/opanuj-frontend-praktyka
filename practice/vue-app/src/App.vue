<script setup lang="ts">
import FormValidator from './components/FormValidator.vue';
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="flex flex-col">
      <FormValidator />
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
