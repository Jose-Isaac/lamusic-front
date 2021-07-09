import React, { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { Themes } from '../../Themes/Themes';
import { globalContext } from '../../types/globalContext';
import { InputField, BoxInput, LabelInput, Container, Error } from './styles';

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  required: boolean;
  errorMessage: string;
}
const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type,
  name,
  required,
  errorMessage,
}) => {
  const globalContext = useContext(GlobalStateContext) as globalContext;
  const { isDark } = globalContext.states;
  const theme = Themes[isDark ? 'dark' : 'light'];

  return (
    <Container hashError={errorMessage.length > 0}>
      <BoxInput borderColor={theme.font.primary}>
        <LabelInput
          bgColor={theme.background.primary}
          fontColor={theme.font.secondary}
        >
          {label}:
        </LabelInput>
        <InputField
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
          name={name}
          required={required}
          bgColor={theme.background.primary}
          fontColor={theme.font.secondary}
        />
      </BoxInput>
      {errorMessage && (
        <Error fontColor={theme.error.primary}>{errorMessage}</Error>
      )}
    </Container>
  );
};

export default Input;
