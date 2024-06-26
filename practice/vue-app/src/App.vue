<script setup lang="ts">
import cCountryFilters from './components/countryFilters.vue'
import cCountryList from './components/countryList.vue'
import { reactive, ref, type Ref } from 'vue'
import { CountryData, CountryFilters } from './types/country.types.ts';


const filters: CountryFilters = reactive({
  currency: 'usd',
  sort: ''
})

const countryData: Ref<CountryData> = ref([])
const getData = () => {
  fetch(`https://restcountries.com/v3.1/currency/${filters.currency}`)
    .then((response) => response.json())
    .then((data) => transformData(data))
    .catch((error) => {
      console.error('Error fetching data:', error)
      countryData.value = []
    });
}

const transformData = (data) => {
  const filteredCountry = ref(data)

  if(filters.sort === 'population'){
    filteredCountry.value.sort((a, b) => b.population - a.population);
  }
  if(filters.sort === 'alphabetical'){
    filteredCountry.value.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }

  countryData.value = filteredCountry.value.map(country => ({ name: country.name.common, flag: country.flag }));
}

getData()
</script>

<template>
  <div>
    <h2>Countries</h2>
    <cCountryFilters :filters="filters"
                     @rerenderData="getData" />

    <cCountryList :country-data="countryData" />
  </div>
</template>

<style scoped>
</style>
