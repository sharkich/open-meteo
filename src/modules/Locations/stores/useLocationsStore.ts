import { useRootStore } from '../../../services/stores';

export const useLocationsStore = () => {
  const { locationsStore } = useRootStore();

  return locationsStore;
};
