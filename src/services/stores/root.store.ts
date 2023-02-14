import { ILocationsStore, LocationsStore } from '../../modules/Locations/stores/LocationsStore';

export interface IRootStore {
  readonly locationsStore: ILocationsStore;
}

export class RootStore {
  readonly locationsStore = new LocationsStore();
}
