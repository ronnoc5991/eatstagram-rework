import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/update" component={Update} />
    </Switch>
  );
}
