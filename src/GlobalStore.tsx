import { makeAutoObservable } from 'mobx';
import type { Recipe } from './types/Recipe';
import createStoreContext from './utils/createStoreContext';

export const [GlobalStoreProvider, useGlobalStore] = createStoreContext(
  class GlobalStore {
    // public count: number = 0;
    public recipe: Recipe | null = null;

    public constructor() {
      // NOTE: don't add anything else here  unless you know what you are doing
      // as the constructor will be executed twice due to `StrictMode`
      makeAutoObservable(this);
    }

    // public increment = () => {
    //   this.count += 1;
    // };

    // public decrement = () => {
    //   this.count -= 1;
    // };

    public setRecipe = (recipe: Recipe) => {
      this.recipe = recipe;
    };

    public eraseRecipe = () => {
      this.recipe = null;
    };
  },
);

export type GlobalStore = ReturnType<typeof useGlobalStore>;
