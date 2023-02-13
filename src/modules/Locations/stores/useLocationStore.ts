import { useRootStore } from '../../../services/stores';

export const useLocationStore = () => {
  const { locationStore } = useRootStore();

  return locationStore;
};
