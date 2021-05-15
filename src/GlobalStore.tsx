import { makeAutoObservable } from 'mobx';
import createStoreContext from './utils/createStoreContext';

export const [GlobalStoreProvider, useGlobalStore] = createStoreContext(
  class GlobalStore {
    public isLoggedIn: boolean = false;

    public constructor() {
      // NOTE: don't add anything else here  unless you know what you are doing
      // as the constructor will be executed twice due to `StrictMode`
      makeAutoObservable(this);
    }

    public toggleIsLoggedIn = () => {
      this.isLoggedIn = !this.isLoggedIn;
    };
  },
);

export type GlobalStore = ReturnType<typeof useGlobalStore>;
