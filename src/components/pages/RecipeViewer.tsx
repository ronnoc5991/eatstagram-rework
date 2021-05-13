import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAndSetRecipe } from '../../utils/firebaseFunctions';
import type { Recipe } from '../../types/Recipe';

type RecipeProps = {
  match: { params: { id: string } };
};

export default function RecipeViewer({ match }: RecipeProps): JSX.Element {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    getAndSetRecipe(match.params.id, setRecipe);
  }, []);

  return (
    <div>
      {recipe?.title}
      {recipe?.description}
      {recipe?.id && <Link to={`/update/${recipe.id}`}>Edit Recipe</Link>}
    </div>
  );
}
