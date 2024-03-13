<script lang="ts">
  import { WeatherType } from '../models/LocationWeather';

  export let type: WeatherType;

  let weatherIcon: string;

  $: {
    switch (type) {
      case WeatherType.Sunny:
        weatherIcon = '☀️';
        break;
      case WeatherType.Cloudy:
        weatherIcon = '☁️';
        break;
      case WeatherType.Rainy:
        weatherIcon = '🌧️';
        break;
      case WeatherType.Snowy:
        weatherIcon = '❄️';
        break;
      default:
        weatherIcon = '❓';
        break;
    }
  }
</script>

<div>
  {weatherIcon}
</div>
