<script lang="ts">
  import { DailyWeather } from '../models/LocationWeather';
  import WeatherIcon from './WeatherIcon.svelte';

  export let dailyWeather: DailyWeather;
</script>

<div class="bg-white rounded-xl p-4 shadow-lg">
  <h2 class="flex flex-row items-center space-x-2">
    <WeatherIcon type={dailyWeather.type} />
    <span>{dailyWeather.date}</span>
  </h2>
  <p class="text-xl font-bold mt-4">{dailyWeather.averageTemperature} *(C)</p>
</div>
