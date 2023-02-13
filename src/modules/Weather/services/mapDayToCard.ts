import { IWeatherDTO } from '../../../services/api';

export const mapDayToCard = (weather: IWeatherDTO, index: number) => ({
  day: weather.daily.time[index],
  precipitation_sum: weather.daily.precipitation_sum[index],
  rain_sum: weather.daily.rain_sum[index],
  showers_sum: weather.daily.showers_sum[index],
  snowfall_sum: weather.daily.snowfall_sum[index],
  sunrise: weather.daily.sunrise[index],
  sunset: weather.daily.sunset[index],
  temperature_2m_max: weather.daily.temperature_2m_max[index],
  temperature_2m_min: weather.daily.temperature_2m_min[index],
  uv_index_clear_sky_max: weather.daily.uv_index_clear_sky_max[index],
  uv_index_max: weather.daily.uv_index_max[index],
  windspeed_10m_max: weather.daily.windspeed_10m_max[index]
});
