import { GameStore, IGameStore } from '../../modules/game/stores';

export interface IRootStore {
  readonly gameStore: IGameStore;
}

export class RootStore {
  readonly gameStore = new GameStore();
}
