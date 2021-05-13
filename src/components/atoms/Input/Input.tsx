import type { ChangeEvent } from 'react';
import { InputLabel, StyledInput } from './Input.styles';

type InputType = 'text' | 'number' | 'button';

export type InputProps = {
  type: InputType;
  name?: string;
  value?: string;
  autoComplete?: 'on' | 'off';
  label?: string;
  hasSubmitButton?: boolean;
  onClick?: () => void;
  onSubmit?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

// When the user hits the submit button for the array types,
// focus should be auto returned to the input element that they
// are currently working on instead of having to refocus everytime

export default function Input({
  type,
  name,
  value,
  autoComplete,
  label,
  hasSubmitButton,
  onClick,
  onSubmit,
  onChange,
}: InputProps): JSX.Element {
  return (
    <InputLabel htmlFor={name}>
      {label}
      <StyledInput
        type={type}
        id={name}
        name={name}
        value={value}
        autoComplete={autoComplete || 'off'}
        onClick={onClick}
        onChange={onChange}
      />
      {hasSubmitButton && <Input type="button" onClick={onSubmit} value={`Add ${name}`} />}
    </InputLabel>
  );
}
