<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';

import CountryList from '../components/CountryList.vue';
import TextInput from '../components/TextInput.vue';
import SelectInput from '../components/SelectInput.vue';

import { Country } from '../types/Country';
import { fetchCountries } from '../utils/fetchCountries';
import { filterCountries } from '../utils/filterCountries';
import { sortCountries } from '../utils/sortCountries';

const name = ref('');
const sortOption = ref('alphabetical');
const countries = ref<Country[]>([]);

const filteredAndSortedCountries = computed(() => {
  let result = countries.value;
  if (name.value) result = filterCountries([...result], name.value);
  return sortCountries([...result], sortOption.value);
});

onMounted(async () => (countries.value = await fetchCountries()));
</script>

<template>
  <div class="filters">
    <TextInput
      :label="'Name'"
      :placeholder="'Country name'"
      @onChange="(value) => (name = value)"
    />
    <SelectInput
      :label="'Sort by'"
      :options="[
        {
          value: 'alphabetical',
          label: 'Alphabetical',
        },
        {
          value: 'population',
          label: 'Population',
        },
      ]"
      @onChange="(value) => (sortOption = value)"
    />
  </div>
  <CountryList :countries="filteredAndSortedCountries" />
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: sticky;
  background-color: #242424;
  border-block-end: 0.0625rem solid #3a3a3a;
  inset-block-start: 0;
}
</style>
