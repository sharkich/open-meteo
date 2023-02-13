import { makeAutoObservable } from 'mobx';

import { Nullable } from '../../../services/types';
import { ILocation } from '../interfaces';

export interface ILocationStore {
  location: Nullable<ILocation>;
  setLocation: (location: Nullable<ILocation>) => void;
}

export class LocationStore implements ILocationStore {
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
