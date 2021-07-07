import React, { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { Themes } from '../../Themes/Themes';
import { globalContext } from '../../types/globalContext';
import { BoxForm, ButtonSubmit } from './styles';

interface FormProps {
  children: React.ReactNode;
  labelButtonSubmit: string;
}

const Form: React.FC<FormProps> = ({ children, labelButtonSubmit }) => {
  const globalContext = useContext(GlobalStateContext) as globalContext;
  const { isDark } = globalContext.states;
  const theme = Themes[isDark ? 'dark' : 'light'];
  return (
    <BoxForm onSubmit={(event) => event.preventDefault()}>
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
