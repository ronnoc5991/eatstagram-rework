import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledRecipeViewer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  box-sizing: border-box;
`;

export const ImageContainer = styled.div`
  width: 25rem;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
  margin: 1rem auto;

  img {
    min-width: 100%;
    min-height: 100%;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 2rem 1rem 2rem;
`;

export const ParagraphContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;

export const IngredientsContainer = styled.div`
  margin: 4rem 0;
`;

export const IngredientsList = styled.ul`
  all: unset;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
  padding: 1rem 0;
  text-align: left;
`;

export const IngredientListItem = styled.li`
  list-style-type: circle;
  padding: 0.5rem;
  width: 40%;
`;

export const StepsList = styled.ol`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export const StepListItem = styled.li`
  list-style-type: upper-roman;
  list-style-position: inside;
  width: 100%;
  text-align: center;

  &::marker {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    margin: 1rem 1rem 2rem 1rem;
  }
`;
