import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Recipes from './Recipes';
import RecipeViewer from './RecipeViewer';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/recipes" component={Recipes} />
      <Route exact path="/recipes/:id" component={RecipeViewer} />
      <Route exact path="/update/:id" component={Update} />
    </Switch>
  );
}
