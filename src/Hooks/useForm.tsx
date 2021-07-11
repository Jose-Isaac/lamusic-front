import React, { useState } from 'react';

export const useForm = function <type>(
  initialState: type
): [type, (event: React.ChangeEvent<HTMLInputElement>) => void] {
  const [form, setForm] = useState<type>(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  return [form, onChange];
};
