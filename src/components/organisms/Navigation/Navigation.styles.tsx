import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const StyledNav = styled.nav`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
`;

type GeneralMenuProps = {
  isDisabled: boolean;
};

export const Logo = styled(motion.div)<GeneralMenuProps>`
  font-weight: 400;
  font-size: 1.8rem;
  display: ${(props) => (props.isDisabled ? 'none' : 'block')};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 2rem;
  }
`;

export const StyledNavItem = styled(Link)`
  all: unset;
  color: black;
  font-weight: 500;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const HamburgerMenuContainer = styled.div`
  margin-left: auto;
  height: 1.4rem;
  width: 2rem;
  position: relative;
`;

export const Line = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MenuLinksWrapper = styled(motion.div)<GeneralMenuProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffc905;
  border-radius: 50%;
  display: ${(props) => (props.isDisabled ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

export const LinksList = styled(motion.ul)`
  height: calc(100vh - 72px);
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled(motion.li)`
  padding: 5vh;
  text-align: left;
`;
