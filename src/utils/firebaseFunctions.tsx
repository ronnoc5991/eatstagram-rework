import firebase from '../firebase';
import type { Recipe } from '../types/Recipe';

// CRUD functions for recipes

// Create
export const createRecipe = (recipe: Recipe): void => {
  const database = firebase.firestore();
  database.collection('recipes').add({ ...recipe });
};

// Read
export const getRecipes = async (): Promise<Array<Recipe>> => {
  const database = firebase.firestore();
  const data = await database.collection('recipes').get();
  return data.docs.map((document) => {
    return { ...document.data(), id: document.id } as unknown as Recipe;
  });
};

export const getAndSetRecipes = async (
  setStateFunction: (recipes: Array<Recipe>) => void,
): Promise<void> => {
  const newRecipes = await getRecipes();
  setStateFunction(newRecipes);
};

export const getAndSetRecipe = async (
  id: string,
  setStateFunction: (recipe: Recipe) => void,
): Promise<void> => {
  const database = firebase.firestore();
  const documentReference = database.collection('recipes').doc(id);
  documentReference.get().then((document) => {
    if (document.exists) {
      setStateFunction({ ...(document.data() as Recipe), id: document.id });
    }
  });
};

// Update
export const updateRecipe = (recipe: Recipe): void => {
  const database = firebase.firestore();
  database
    .collection('recipes')
    .doc(recipe.id)
    .set({ ...recipe });
};

// Delete
export const deleteRecipe = (recipe: Recipe): void => {
  const database = firebase.firestore();
  database.collection('recipes').doc(recipe.id).delete();
};
