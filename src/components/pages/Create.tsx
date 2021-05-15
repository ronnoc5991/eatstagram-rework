import Form from '../molecules/Form/Form';
import { createRecipe } from '../../utils/firebaseFunctions';
import type { Recipe } from '../../types/Recipe';

export default function Create(): JSX.Element {
  const onSubmit = (recipe: Recipe) => {
    // createRecipe(recipe);
    console.log({ ...recipe, imageUrl: 'LOADING IMAGE URL' });
  };

  return (
    <div>
      Create a new Recipe
      <Form onSubmit={onSubmit} />
    </div>
  );
}
