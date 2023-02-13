import { FC } from 'react';

import { observer } from 'mobx-react-lite';

import { useWeatherDays } from './useWeatherDays';
import { LoadingState } from '../../../../components';
import { WeatherList } from '../WeatherList';

export const WeatherDays: FC = observer(() => {
  const loadingState = useWeatherDays();

  return (
    <LoadingState {...loadingState}>
      <WeatherList weather={loadingState.data} />
    </LoadingState>
  );
});
