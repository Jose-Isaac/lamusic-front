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

export default function InputCheckbox({
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
        type="checkbox"
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
