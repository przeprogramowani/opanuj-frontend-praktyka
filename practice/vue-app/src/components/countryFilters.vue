<script setup lang="ts">
import { type PropType } from 'vue'
import { CountryFilters } from '../types/country.types.ts';

const emit = defineEmits('rerenderData')

defineProps({
  filters: {
    type: Object as PropType<CountryFilters>,
    required: true
  }
})
</script>

<template>
  <div class='filterContainer'>
    <div>
      <label class="label"
             for='currency'>Currency: </label>

      <input type='text'
             id='currency'
             v-model="filters.currency">
    </div>

    <select v-model="filters.sort">
      <option value="">Default</option>
      <option value="population">Population</option>
      <option value="alphabetical">Alphabetical</option>
    </select>

    <button class="searchButton"
            @click="emit('rerenderData')">Search</button>
  </div>
</template>

<style scoped>
.filterContainer {
  display: flex;
  align-items: end;
  width: fit-content;
  margin: auto auto 40px;
}
.label{
  display: block;
}
.searchButton {
  margin-left: 10px;
}
</style>
