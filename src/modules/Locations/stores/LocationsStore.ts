import { makeAutoObservable } from 'mobx';

import { Nullable } from '../../../services/types';
import { ILocation } from '../interfaces';

export interface ILocationsStore {
  location: Nullable<ILocation>;
  setLocation: (location: Nullable<ILocation>) => void;
  locations: ILocation[];
  setLocations: (locations: ILocation[]) => void;
  addLocation: (location: Nullable<ILocation>) => void;
}

export class LocationsStore implements ILocationsStore {
  private _location: Nullable<ILocation> = null;
  private _locations: ILocation[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get location(): Nullable<ILocation> {
    return this._location;
  }

  setLocation(location: Nullable<ILocation>) {
    this._location = location;
    this.addLocation(location);
  }

  get locations(): ILocation[] {
    return this._locations;
  }

  setLocations(locations: ILocation[]) {
    this._locations = locations;
  }

  private isLocationExists(location: ILocation) {
    return this._locations.find(({ name }) => name === location.name);
  }

  addLocation(location: Nullable<ILocation>) {
    if (!location || this.isLocationExists(location)) {
      return;
    }
    this._locations.push(location);
  }
}
