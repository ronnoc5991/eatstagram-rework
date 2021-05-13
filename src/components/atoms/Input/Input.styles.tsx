import styled from 'styled-components';

export const InputLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: var(--default-border-radius);
  padding: 0.5rem;
  width: 100%;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  &[type='text'] {
    all: unset;
    border: 1px solid green;
    margin: 0.5rem;
    padding: 0.5rem;
    width: 100%;
    box-sizing: border-box;
    background-color: rgb(237, 237, 237);
    border-radius: var(--default-border-radius);
    display: inline-block;
  }
`;
