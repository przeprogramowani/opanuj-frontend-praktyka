<script lang="ts">
  import { WeatherType } from '../models/LocationWeather';

  interface Props {
    type: WeatherType;
  }

  let { type }: Props = $props();
  let weatherIcon: string = $state('');

  $effect(() => {
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
  });
</script>

<div>
  {weatherIcon}
</div>
