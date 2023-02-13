import { uniqBy } from 'lodash';
import { useQuery } from 'react-query';
import { useDebounce } from 'use-debounce';

import { FETCH_GEO_LOCATIONS_REQUEST_NAME, fetchGeoLocations } from '../../../services/api';

export const useLocationsListApi = (name?: string) => {
  const [debouncedName] = useDebounce(name, 500);

  const loadingState = useQuery(
    [FETCH_GEO_LOCATIONS_REQUEST_NAME, debouncedName],
    async () => await fetchGeoLocations(debouncedName)
  );

  const data = loadingState.data;
  if (data) {
    data.results = uniqBy(data.results, 'name');
  }

  return { ...loadingState, data };
};
