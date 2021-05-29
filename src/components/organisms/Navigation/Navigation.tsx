import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useAnimation } from 'framer-motion';
import {
  StyledNav,
  StyledNavItem,
  Logo,
  HamburgerMenuContainer,
  Line,
  MenuLinksWrapper,
  LinksList,
  ListItem,
} from './Navigation.styles';
import { menuLine, menuWrapper, fadeInOut } from './Navigation.transitions';
import Heading from '../../atoms/Heading';
import { useGlobalStore } from '../../../GlobalStore';

export default observer(function Navigation(): JSX.Element {
  // const store = useGlobalStore();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuIsDisabled, setMenuIsDisabled] = useState(true);

  const toggleMenuState = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const hamburgerMenuControls = useAnimation();
  const menuBackgroundControls = useAnimation();
  const listItemControls = useAnimation();
  const logoControls = useAnimation();

  const hamburgerMenuOpenSequence = async () => {
    await hamburgerMenuControls.start('condensed');
    await hamburgerMenuControls.start('opened');
  };

  const hamburgerMenuCloseSequence = async () => {
    await hamburgerMenuControls.start('condensed');
    await hamburgerMenuControls.start('closed');
  };

  const menuBackgroundOpenSequence = async () => {
    setMenuIsDisabled(false);
    await menuBackgroundControls.start('shown');
  };

  const menuBackgroundCloseSequence = async () => {
    await menuBackgroundControls.start('hidden');
    setMenuIsDisabled(true);
  };

  useEffect(() => {
    if (menuIsOpen) {
      hamburgerMenuOpenSequence();
      menuBackgroundOpenSequence();
      listItemControls.start('shown');
      logoControls.start('shown');
    } else {
      hamburgerMenuCloseSequence();
      menuBackgroundCloseSequence();
      listItemControls.start('hidden');
      logoControls.start('hidden');
    }
  }, [menuIsOpen]);

  useEffect(() => {
    hamburgerMenuControls.start('shown');
  }, []);

  return (
    <StyledNav>
      <Logo
        isDisabled={menuIsDisabled}
        variants={fadeInOut}
        initial="hidden"
        animate={logoControls}
      >
        <StyledNavItem to="/">
          <Heading type="h2">Meez On Plos</Heading>
        </StyledNavItem>
      </Logo>
      <HamburgerMenuContainer onClick={toggleMenuState}>
        <Line
          variants={menuLine}
          custom={1}
          initial={{ opacity: 0 }}
          animate={hamburgerMenuControls}
        />
        <Line
          variants={menuLine}
          custom={2}
          initial={{ opacity: 0 }}
          animate={hamburgerMenuControls}
        />
        <Line
          variants={menuLine}
          custom={3}
          initial={{ opacity: 0 }}
          animate={hamburgerMenuControls}
        />
      </HamburgerMenuContainer>
      <MenuLinksWrapper
        variants={menuWrapper}
        initial="hidden"
        animate={menuBackgroundControls}
        isDisabled={menuIsDisabled}
      >
        <LinksList>
          <ListItem
            onClick={toggleMenuState}
            variants={fadeInOut}
            initial="hidden"
            animate={listItemControls}
          >
            <StyledNavItem to="/">
              <Heading type="h2">Home</Heading>
            </StyledNavItem>
          </ListItem>
          <ListItem
            onClick={toggleMenuState}
            variants={fadeInOut}
            initial="hidden"
            animate={listItemControls}
          >
            <StyledNavItem to="/create">
              <Heading type="h2">Create</Heading>
            </StyledNavItem>
          </ListItem>
          <ListItem
            onClick={toggleMenuState}
            variants={fadeInOut}
            initial="hidden"
            animate={listItemControls}
          >
            <StyledNavItem to="/recipes">
              <Heading type="h2">Recipes</Heading>
            </StyledNavItem>
          </ListItem>
        </LinksList>
      </MenuLinksWrapper>
      {/* <span>counter: {store.count}</span> */}
    </StyledNav>
  );
});
