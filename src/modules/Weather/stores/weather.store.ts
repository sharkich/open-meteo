import { makeAutoObservable } from 'mobx';

import { Nullable } from '../../../services/types';
import { ILocation } from '../interfaces';

export interface IWeatherStore {
  location: Nullable<ILocation>;
}

export class WeatherStore implements IWeatherStore {
  private _location: Nullable<ILocation> = null;

  constructor() {
    makeAutoObservable(this);
  }

  get location(): Nullable<ILocation> {
    return this._location;
  }

  setLocation(location: Nullable<ILocation>) {
    this._location = location;
  }
}
