import { makeAutoObservable } from 'mobx';

export class WeatherStore {
  constructor() {
    makeAutoObservable(this);
  }
}
