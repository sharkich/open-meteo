import { useQuery } from 'react-query';
import { useDebounce } from 'use-debounce';

import { FETCH_GEO_LOCATIONS_REQUEST_NAME, fetchGeoLocations } from '../../../services/api/geo.api';

export const useLocationsList = (name?: string) => {
  const [debouncedName] = useDebounce(name, 500);

  return useQuery(
    [FETCH_GEO_LOCATIONS_REQUEST_NAME, debouncedName],
    async () => await fetchGeoLocations(debouncedName),
    {
      staleTime: Infinity
    }
  );
};
