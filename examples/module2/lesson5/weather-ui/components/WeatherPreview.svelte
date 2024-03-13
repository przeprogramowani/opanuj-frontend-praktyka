<script lang="ts">
  import { LocationWeather } from '../models/LocationWeather';
  import DailyWeather from './DailyWeather.svelte';

  export let weather: LocationWeather;
</script>

<div>
  <h2 class="text-2xl py-4">
    {weather.city}, {weather.country}
  </h2>
  <ul class="space-y-4">
    {#each weather.weatherDetails as details}
      <DailyWeather dailyWeather={details} />
    {/each}
  </ul>
</div>
