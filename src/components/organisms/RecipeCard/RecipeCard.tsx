/* eslint-disable react/no-array-index-key */
import {
  StyledRecipeCard,
  ImageContainer,
  TitleContainer,
  ParagraphContainer,
} from './RecipeCard.styles';
import type { Recipe } from '../../../types/Recipe';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph';

type RecipeCardProps = Partial<Recipe>;

export default function RecipeCard({
  title,
  description,
  imageUrl,
  tags,
  id,
}: RecipeCardProps): JSX.Element {
  return (
    <StyledRecipeCard to={`/recipes/${id}`}>
      <ImageContainer>
        <img src={imageUrl} alt={title} />
      </ImageContainer>
      <TitleContainer>
        <Heading type="h2">{title}</Heading>
      </TitleContainer>
      <ParagraphContainer>
        <Paragraph size="small">{description}</Paragraph>
      </ParagraphContainer>
      {tags && (
        <ParagraphContainer>
          {tags.map((tag, index) => {
            return (
              <Paragraph size="xsmall" key={index}>
                {index === tags.length - 1 ? tag : `${tag}, `}
              </Paragraph>
            );
          })}
        </ParagraphContainer>
      )}
    </StyledRecipeCard>
  );
}
