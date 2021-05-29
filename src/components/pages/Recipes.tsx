/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import type { Recipe } from '../../types/Recipe';
import RecipeCard from '../organisms/RecipeCard/RecipeCard';
import { getAndSetRecipes } from '../../utils/firebaseFunctions';

export default function Recipes(): JSX.Element {
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);

  useEffect(() => {
    getAndSetRecipes(setRecipes);
  }, []);

  return (
    <div>
      {recipes.map((recipe, index) => {
        return (
          <RecipeCard
            key={index}
            title={recipe.title}
            description={recipe.description}
            imageUrl={recipe.imageUrl}
            tags={recipe.tags}
            id={recipe.id}
          ></RecipeCard>
        );
      })}
    </div>
  );
}
