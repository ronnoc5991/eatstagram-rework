import styled from 'styled-components';

export const InputLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: var(--default-border-radius);
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  border: 1px solid red;
`;

type InputProps = {
  hidden: boolean;
};

export const StyledInput = styled.input<InputProps>`
  &[type='text'],
  &[type='number'] {
    all: unset;
    border: 1px solid green;
    margin: 0.5rem;
    padding: 1rem;
    width: 100%;
    font-size: 1.2rem;
    box-sizing: border-box;
    display: ${(props) => (props.hidden ? 'none' : 'inline-block')};
  }
`;

export const SubmitButton = styled.input`
  font-size: 1.2rem;
`;

export const List = styled.ul`
  width: 100%;
`;

type ListItemProps = {
  isOrdered: boolean;
};

export const ListItem = styled.li<ListItemProps>`
  list-style-type: ${(props) => (props.isOrdered ? 'upper-roman' : 'circle')};

  &::marker {
    font-size: 1.5rem;
  }
`;
