/* eslint-disable react/no-array-index-key */
import { ChangeEvent, useEffect, useState } from 'react';
import firebase from 'firebase';
import { StyledForm } from './Form.styles';
import Input from '../../atoms/Input/Input';
import type { Recipe } from '../../../types/Recipe';
import ImageCropper from '../../organisms/ImageCropper/ImageCropper';

type FormProps = {
  recipe?: Recipe;
  onSubmit: (recipe: Recipe) => void;
};

// for update form, need the ability to delete tags/ingredients/steps

export default function Form({ recipe, onSubmit }: FormProps): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [duration, setDuration] = useState<number>();
  const [currentIngredient, setCurrentIngredient] = useState<string>('');
  const [ingredients, setIngredients] = useState<Array<string>>([]);
  const [currentStep, setCurrentStep] = useState<string>('');
  const [steps, setSteps] = useState<Array<string>>([]);
  const [currentTag, setCurrentTag] = useState<string>('');
  const [tags, setTags] = useState<Array<string>>([]);
  const [id, setId] = useState<string>('');

  const name = 'fake name';
  const profilePicUrl = 'fake url';
  const storageUri = 'fakestorageuri';

  const formIsComplete = (): boolean => {
    return (
      !!title && !!description && !!imageUrl && !!duration && !!ingredients && !!steps && !!tags
    );
  };

  const handleSubmit = () => {
    onSubmit({
      name,
      profilePicUrl,
      storageUri,
      title,
      description,
      imageUrl,
      duration,
      ingredients,
      steps,
      tags,
      id,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() as unknown as string,
    });
  };

  useEffect(() => {
    if (recipe) {
      if (recipe.title) setTitle(recipe.title);
      if (recipe.description) setDescription(recipe.description);
      if (recipe.imageUrl) setImageUrl(recipe.imageUrl);
      if (recipe.ingredients) setIngredients(recipe.ingredients);
      if (recipe.steps) setSteps(recipe.steps);
      if (recipe.duration) setDuration(recipe.duration);
      if (recipe.tags) setTags(recipe.tags);
      if (recipe.id) setId(recipe.id);
    }
  }, [recipe]);

  return (
    <StyledForm>
      <Input
        type="text"
        name="title"
        autoComplete="off"
        label="What's it called?"
        value={title}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)}
      />
      <Input
        type="text"
        name="description"
        autoComplete="off"
        label="Describe it!"
        value={description}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setDescription(event.currentTarget.value)
        }
      />
      <Input
        type="number"
        name="duration"
        autoComplete="off"
        label="How long does it take to make?"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setDuration(parseInt(event.currentTarget.value, 10))
        }
      />
      <Input
        type="text"
        name="ingredient"
        autoComplete="off"
        label="What are the ingredients?"
        value={currentIngredient}
        list={{ listItems: ingredients, isOrdered: false }}
        hasSubmitButton
        onSubmit={() => {
          if (currentIngredient) {
            setIngredients([...ingredients, currentIngredient]);
            setCurrentIngredient('');
          }
        }}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setCurrentIngredient(event.currentTarget.value)
        }
      />
      <Input
        type="text"
        name="step"
        autoComplete="off"
        label="How do you make it?"
        value={currentStep}
        list={{ listItems: steps, isOrdered: true }}
        hasSubmitButton
        onSubmit={() => {
          if (currentStep) {
            setSteps([...steps, currentStep]);
            setCurrentStep('');
          }
        }}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setCurrentStep(event.currentTarget.value)
        }
      />
      <Input
        type="text"
        name="tag"
        autoComplete="off"
        label="Add some tags! (ie: Italian)"
        value={currentTag}
        list={{ listItems: tags, isOrdered: false }}
        hasSubmitButton
        onSubmit={() => {
          if (currentTag) {
            setTags([...tags, currentTag]);
            setCurrentTag('');
          }
        }}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setCurrentTag(event.currentTarget.value)
        }
      />
      <ImageCropper setCroppedImageUrl={setImageUrl} />
      <Input type="button" value="Submit" disabled={!formIsComplete()} onClick={handleSubmit} />
    </StyledForm>
  );
}
