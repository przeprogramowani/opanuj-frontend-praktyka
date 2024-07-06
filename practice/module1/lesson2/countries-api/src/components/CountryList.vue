<script setup lang="ts">
import CountryCard from './CountryCard.vue';
import { Country } from '../types/Country';

defineProps({
  countries: {
    type: Array as () => Country[],
    required: true,
  },
});
</script>

<template>
  <ol>
    <li v-for="country in countries" :key="country.cca3">
      <CountryCard :country="country" />
    </li>
  </ol>
</template>

<style scoped>
ol {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  list-style: none;
  padding: 20px 0;
  margin: 0;

  li {
    display: flex;
    width: 300px;
  }
}
</style>
