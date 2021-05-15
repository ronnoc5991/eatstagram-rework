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
  padding: 0 1.5rem;
  background-color: #fff;
  border-bottom: 1px solid black;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    li {
      padding: 1rem;
    }
  }
`;

export const Logo = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
`;

export const StyledNavItem = styled(Link)`
  all: unset;
  color: black;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;

export const HamburgerMenuContainer = styled.div`
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
