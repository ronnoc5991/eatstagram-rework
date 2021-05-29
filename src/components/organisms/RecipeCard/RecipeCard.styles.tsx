import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledRecipeCard = styled(Link)`
  all: unset;
  color: #000;
  display: block;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  margin: 5rem 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  box-sizing: border-box;
  max-width: 30rem;
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
  padding: 2rem;
`;

export const ParagraphContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;
