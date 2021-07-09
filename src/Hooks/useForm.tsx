import React, { useState } from 'react';
import { signinFormField, signupFormField } from '../types/form';

export const useForm = (
  initialState: signupFormField & signinFormField
): {
  form: signupFormField & signinFormField;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} => {
  const [form, setForm] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  return { form, onChange };
};
