<script setup lang="ts">
import CountrySearchContainer from './containers/CountrySearchContainer.vue';
const currentYear = new Date().getFullYear();
</script>

<template>
  <header>
    <h1>Countries API</h1>
  </header>

  <main>
    <CountrySearchContainer />
  </main>

  <footer>
    Copyright &copy; {{ currentYear }}
    <a href="https://github.com/bronisMateusz">bronisMateusz</a>
  </footer>
</template>
