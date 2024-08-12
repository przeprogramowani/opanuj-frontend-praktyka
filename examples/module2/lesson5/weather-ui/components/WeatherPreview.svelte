<script lang="ts">
  import { LocationWeather, DailyWeather, WeatherType } from '../models/LocationWeather';
  import DailyWeatherComponent from './DailyWeather.svelte';

  export let weather: LocationWeather;

  let details: DailyWeather[] = [];

  if (weather.weatherDetails.hasOwnProperty('Weather')) {
    details = (weather.weatherDetails as any).Weather.map((detail: any) => {
      return {
        averageTemperature: detail.average_temperature,
        date: detail.date,
        type: detail.type as WeatherType
      };
    });
  } else {
    details = weather.weatherDetails as DailyWeather[];
  }
</script>

<div>
  <h2 class="text-2xl py-4">
    {weather.city}, {weather.country}
  </h2>
  <ul class="space-y-4">
    {#each details as detail}
      <DailyWeatherComponent dailyWeather={detail} />
    {/each}
  </ul>
</div>