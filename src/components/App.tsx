import { useEffect, useState } from 'react';
import Routes from './pages/Routes';
import Navigation from './organisms/Navigation';
import { StyledMainContent } from './App.styles';
import type { Recipe } from '../types/Recipe';
import { getAndSetRecipes } from '../utils/firebaseFunctions';

export default function App(): JSX.Element {
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);

  useEffect(() => {
    // getAndSetRecipes(setRecipes);
  }, []);

  useEffect(() => {
    if (recipes) console.log(recipes);
  }, [recipes]);

  return (
    <>
      <Navigation />
      <StyledMainContent>
        <Routes />
      </StyledMainContent>
    </>
  );
}
