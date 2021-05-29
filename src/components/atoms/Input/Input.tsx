/* eslint-disable react/no-array-index-key */
import { ChangeEvent, ForwardedRef, useRef } from 'react';
import { InputLabel, StyledInput, SubmitButton, List, ListItem } from './Input.styles';
import Paragraph from '../Paragraph/Paragraph';

type InputType = 'text' | 'number' | 'button' | 'file';

export type InputProps = {
  type: InputType;
  name?: string;
  value?: string;
  autoComplete?: 'on' | 'off';
  label?: string;
  disabled?: boolean;
  hasSubmitButton?: boolean;
  list?: { listItems: Array<string>; isOrdered: boolean };
  accept?: string;
  hidden?: boolean;
  forwardRef?: ForwardedRef<HTMLInputElement>;
  onClick?: () => void;
  onSubmit?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type,
  name,
  value,
  autoComplete,
  label,
  disabled,
  hasSubmitButton,
  list,
  accept,
  forwardRef,
  hidden = false,
  onClick,
  onSubmit,
  onChange,
}: InputProps): JSX.Element {
  const inputRef = useRef(document.createElement('input'));

  const handleSubmit = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
    if (onSubmit) onSubmit();
  };

  return (
    <InputLabel htmlFor={name}>
      <Paragraph size="small">{label}</Paragraph>
      {list && (
        <List>
          {list.listItems.map((listItem, index) => {
            return (
              <ListItem isOrdered={list.isOrdered} key={index}>
                <Paragraph size="xsmall">{listItem}</Paragraph>
              </ListItem>
            );
          })}
        </List>
      )}
      <StyledInput
        type={type}
        id={name}
        name={name}
        value={value}
        disabled={disabled}
        autoComplete={autoComplete || 'off'}
        onClick={onClick}
        onChange={onChange}
        accept={accept}
        ref={forwardRef || inputRef}
        hidden={hidden}
      />
      {hasSubmitButton && (
        <SubmitButton type="button" onClick={handleSubmit} value={`Add ${name}`} />
      )}
    </InputLabel>
  );
}
