<script lang="ts">
  import type { LocationWeather } from '../models/LocationWeather';
  import DailyWeather from './DailyWeather.svelte';

  interface Props {
    weather: LocationWeather;
  }

  let { weather }: Props = $props();
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
