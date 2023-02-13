import { useRootStore } from '../../../services/stores';

export const useGeoStore = () => {
  const { geoStore } = useRootStore();

  return geoStore;
};
