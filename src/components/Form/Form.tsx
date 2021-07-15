import React, { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { Themes } from '../../Themes/Themes';
import { globalContext } from '../../types/globalContext';
import { BoxForm } from './styles';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

interface FormProps {
  children: React.ReactNode;
  labelButtonSubmit: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({
  children,
  labelButtonSubmit,
  onSubmit,
}) => {
  const globalContext = useContext(GlobalStateContext) as globalContext;
  const { isDark } = globalContext.states;
  const theme = Themes[isDark ? 'dark' : 'light'];
  return (
    <BoxForm onSubmit={onSubmit}>
      {children}
      <ButtonSubmit
        bgColor={theme.font.primary}
        fontColor={theme.font.secondary}
      >
        {labelButtonSubmit}
      </ButtonSubmit>
    </BoxForm>
  );
};

export default Form;
