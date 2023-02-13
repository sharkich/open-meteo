import { ILocationStore, LocationStore } from '../../modules/Locations/stores/LocationStore';

export interface IRootStore {
  readonly locationStore: ILocationStore;
}

export class RootStore {
  readonly locationStore = new LocationStore();
}
