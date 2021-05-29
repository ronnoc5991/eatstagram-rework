/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledRecipeViewer,
  ParagraphContainer,
  TitleContainer,
  ImageContainer,
  IngredientsContainer,
  IngredientsList,
  IngredientListItem,
  StepsList,
  StepListItem,
} from './RecipeViewer.styles';
import { getAndSetRecipe } from '../../../utils/firebaseFunctions';
import type { Recipe } from '../../../types/Recipe';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';

type RecipeProps = {
  match: { params: { id: string } };
};

export default function RecipeViewer({ match }: RecipeProps): JSX.Element {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    getAndSetRecipe(match.params.id, setRecipe);
  }, []);

  return (
    <StyledRecipeViewer>
      {recipe && (
        <>
          {recipe.imageUrl && (
            <ImageContainer>
              <img src={recipe?.imageUrl} alt={recipe?.title} />
            </ImageContainer>
          )}
          {recipe.title && (
            <TitleContainer>
              <Heading type="h2">{recipe.title}</Heading>
            </TitleContainer>
          )}
          {recipe.duration && (
            <ParagraphContainer>
              <Paragraph size="small">{recipe.duration} minutes</Paragraph>
            </ParagraphContainer>
          )}
          {recipe.description && (
            <ParagraphContainer>
              <Paragraph>{recipe.description}</Paragraph>
            </ParagraphContainer>
          )}
          {recipe.ingredients && (
            <IngredientsContainer>
              <TitleContainer>
                <Heading type="h3">Ingredients</Heading>
              </TitleContainer>
              <IngredientsList>
                {recipe.ingredients.map((ingredient, index) => {
                  return (
                    <IngredientListItem key={`ingredient-${index}`}>
                      <Paragraph size="small">{ingredient}</Paragraph>
                    </IngredientListItem>
                  );
                })}
              </IngredientsList>
            </IngredientsContainer>
          )}
          {/* <div>name: {recipe?.name}</div> */}
          {/* <div>{recipe?.profilePicUrl}</div> */}
          {recipe.steps && (
            <>
              <TitleContainer>
                <Heading type="h3">Steps</Heading>
              </TitleContainer>
              <StepsList>
                {recipe.steps.map((step, index) => {
                  return (
                    <StepListItem key={`step-${index}`}>
                      <Paragraph>{step}</Paragraph>
                    </StepListItem>
                  );
                })}
              </StepsList>
            </>
          )}
          {recipe.tags && <div>tags: {recipe?.tags}</div>}
          {recipe?.id && <Link to={`/update/${recipe.id}`}>Edit Recipe</Link>}
        </>
      )}
    </StyledRecipeViewer>
  );
}
