import { makeAutoObservable } from 'mobx';

import { IPlayer } from '../interfaces/game';

export interface IGameStore {
  players: IPlayer[];
}

export class GameStore implements IGameStore {
  players: IPlayer[] = [];

  constructor() {
    makeAutoObservable(this);
  }
}
