import { createContext, ReactNode, useContext } from 'react';

import { IRootStore, RootStore } from './root.store';
import { isUndefined, Undefined } from '../types';

let store: IRootStore;

const StoreContext = createContext<Undefined<IRootStore>>(undefined);
StoreContext.displayName = 'RootStoreContext';

export const useRootStore = () => {
  const context = useContext(StoreContext);
  if (isUndefined(context)) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
};

const initializeStore = (): IRootStore => {
  const _store = store ?? new RootStore();

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') {
    return _store;
  }
  // Create the store once in the client
  if (!store) {
    store = _store;
  }

  return _store;
};

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  const _store = initializeStore();

  return <StoreContext.Provider value={_store}>{children}</StoreContext.Provider>;
};
