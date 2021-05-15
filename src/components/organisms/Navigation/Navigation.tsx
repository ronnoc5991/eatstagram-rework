import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useAnimation } from 'framer-motion';
import { StyledNav, StyledNavItem, Logo, HamburgerMenuContainer, Line } from './Navigation.styles';
import { menuLine } from './Navigation.transitions';
import Heading from '../../atoms/Heading';
import { useGlobalStore } from '../../../GlobalStore';

export default observer(function Navigation(): JSX.Element {
  // const store = useGlobalStore();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuState = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const menuControls = useAnimation();

  const menuOpenSequence = async () => {
    await menuControls.start('condensed');
    await menuControls.start('opened');
  };

  const menuCloseSequence = async () => {
    await menuControls.start('condensed');
    await menuControls.start('closed');
  };

  useEffect(() => {
    if (menuIsOpen) {
      menuOpenSequence();
    } else {
      menuCloseSequence();
    }
  }, [menuIsOpen]);

  useEffect(() => {
    menuControls.start('shown');
  }, []);

  return (
    <StyledNav>
      <Logo>Eatstagram</Logo>
      <HamburgerMenuContainer onClick={toggleMenuState}>
        <Line variants={menuLine} custom={1} initial={{ opacity: 0 }} animate={menuControls} />
        <Line variants={menuLine} custom={2} initial={{ opacity: 0 }} animate={menuControls} />
        <Line variants={menuLine} custom={3} initial={{ opacity: 0 }} animate={menuControls} />
      </HamburgerMenuContainer>
      {/* <ul>
        <li>
          <StyledNavItem to="/">
            <Heading type="h6">Home</Heading>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/create">
            <Heading type="h6">Create</Heading>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/recipes">
            <Heading type="h6">Recipes</Heading>
          </StyledNavItem>
        </li>
      </ul> */}
      {/* <span>counter: {store.count}</span> */}
    </StyledNav>
  );
});
