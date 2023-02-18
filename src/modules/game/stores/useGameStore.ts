import { useRootStore } from '../../../services/stores';

export const useGameStore = () => {
  const { gameStore } = useRootStore();

  return gameStore;
};
