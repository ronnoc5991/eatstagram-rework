/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Recipe } from '../../types/Recipe';
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
          <div key={index}>
            {recipe.title}
            {recipe.description}
            {recipe.ingredients}
            <Link to={`/recipes/${recipe.id}`}>Check it out!</Link>
          </div>
        );
      })}
    </div>
  );
}
