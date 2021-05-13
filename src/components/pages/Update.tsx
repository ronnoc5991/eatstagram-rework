import Form from '../molecules/Form/Form';
import { updateRecipe } from '../../utils/firebaseFunctions';
import type { Recipe } from '../../types/Recipe';
import { useGlobalStore } from '../../GlobalStore';

export default function Update(): JSX.Element {
  const store = useGlobalStore();

  const onSubmit = (recipe: Recipe) => {
    updateRecipe(recipe);
  };

  return (
    <div>
      Update your Recipe
      <Form recipe={store.recipe as Recipe} onSubmit={onSubmit} />
    </div>
  );
}
