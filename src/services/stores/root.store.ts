import { WeatherStore } from '../../modules/Weather/stores/weather.store';

export class RootStore {
  weatherStore = new WeatherStore();
}
