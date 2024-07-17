<script setup lang="ts">
import { type PropType } from 'vue'
import { CountryData } from '../types/country.types.ts';

const emit = defineEmits('rerenderData')

defineProps({
  countryData: {
    type: Array as PropType<CountryData[]>,
    required: true
  }
})
</script>

<template>
  <div class="countryListContainer">
    <div v-for="(country, index) in countryData"
         :key='index'>

      {{ country.name }} {{ country.flag }}
    </div>
  </div>
</template>

<style scoped>
.countryListContainer{
  display: flex;
  flex-wrap: wrap;

  div {
    background-color: #1a1a1a;
    border-radius: 10px;
    margin: 5px;
    padding: 10px;
  }
}
</style>
