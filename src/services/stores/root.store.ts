import { IGeoStore, GeoStore } from '../../modules/Geo/stores/geoStore';

export interface IRootStore {
  readonly geoStore: IGeoStore;
}

export class RootStore {
  readonly geoStore = new GeoStore();
}
