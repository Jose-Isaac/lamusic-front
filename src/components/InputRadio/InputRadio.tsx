import React, { ReactElement } from 'react';

import { BoxInput, Input, Label } from './styles';

interface Props {
  label: string;
  value: string;
  groupName: string;
  color: string;
  selectedColor: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSelected: boolean;
}

export default function InputRadio({
  color,
  selectedColor,
  label,
  value,
  groupName,
  onChange,
  isSelected,
}: Props): ReactElement {
  return (
    <BoxInput borderColor={isSelected ? selectedColor : color}>
      <Input
        onChange={onChange}
        type="radio"
        id={value}
        name={groupName}
        value={value}
      />
      <Label fontColor={isSelected ? selectedColor : color} htmlFor={value}>
        {label}
      </Label>
    </BoxInput>
  );
}
