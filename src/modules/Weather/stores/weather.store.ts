import { makeAutoObservable } from 'mobx';

import { Nullable } from '../../../services/types';
import { ILocation } from '../interfaces';

export interface IWeatherStore {
  location: Nullable<ILocation>;
}

export class WeatherStore implements IWeatherStore {
  location: Nullable<ILocation> = null;

  constructor() {
    makeAutoObservable(this);
  }
}
