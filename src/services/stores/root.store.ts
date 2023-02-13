import { IWeatherStore, WeatherStore } from '../../modules/Weather/stores/weather.store';

export interface IRootStore {
  readonly weatherStore: IWeatherStore;
}

export class RootStore {
  readonly weatherStore = new WeatherStore();
}
