import { useEffect, useState } from 'react';
import Form from '../molecules/Form/Form';
import { updateRecipe, getAndSetRecipe } from '../../utils/firebaseFunctions';
import type { Recipe } from '../../types/Recipe';

type UpdateProps = {
  match: { params: { id: string } };
};

export default function Update({ match }: UpdateProps): JSX.Element {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    getAndSetRecipe(match.params.id, setRecipe);
  }, []);

  const onSubmit = (recipeToUpdate: Recipe) => {
    updateRecipe(recipeToUpdate);
  };

  return (
    <div>
      {recipe && (
        <>
          <p>Update your Recipe</p>
          <Form recipe={recipe as Recipe} onSubmit={onSubmit} />
        </>
      )}
    </div>
  );
}
