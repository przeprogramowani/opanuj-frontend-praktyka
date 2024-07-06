<script setup lang="ts">
import { Country } from '../types/Country';

defineProps({
  country: {
    type: Object as () => Country,
    required: true,
  },
});
</script>

<template>
  <article class="country-card">
    <h2>{{ country.name.common }}</h2>
    <img :src="country.flags.svg" :alt="country.flags.alt" />
  </article>
</template>

<style scoped>
.country-card {
  --border-style: 1px solid #3a3a3a;
  --border-radius: 8px;
  border: var(--border-style);
  border-radius: var(--border-radius);
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (prefers-color-scheme: light) {
    border-color: #e5e5e5;
  }

  img {
    width: 100%;
    height: auto;
    border: var(--border-style);
    border-radius: var(--border-radius);
  }
}
</style>
