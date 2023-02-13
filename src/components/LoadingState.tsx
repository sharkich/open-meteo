import React, { FC, ReactNode } from 'react';

import { ErrorBox } from './ErrorBox';
import { LoadingBox } from './LoadingBox';

interface Props {
  children: ReactNode;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  error: Error | null | unknown;
}

export const LoadingState: FC<Props> = ({ children, isSuccess, isLoading, isError, error }) => {
  if (isLoading) {
    return <LoadingBox />;
  }

  if (isError || !isSuccess) {
    return <ErrorBox error={error ?? 'Something went wrong'} />;
  }

  return <>{children}</>;
};
