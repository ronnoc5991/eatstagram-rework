import { observer } from 'mobx-react-lite';
import { StyledNav, StyledNavItem } from './Navigation.styles';
import Heading from '../../atoms/Heading';
import { useGlobalStore } from '../../../GlobalStore';

export default observer(function Navigation(): JSX.Element {
  // const store = useGlobalStore();
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledNavItem to="/">
            <Heading type="h1">Home</Heading>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/create">
            <Heading type="h1">Create</Heading>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/recipes">
            <Heading type="h1">Recipes</Heading>
          </StyledNavItem>
        </li>
      </ul>
      {/* <span>counter: {store.count}</span> */}
    </StyledNav>
  );
});
