import React, { ReactElement, useState } from 'react';
import { useRequestData } from '../../Hooks/useRequestData';
import { themeStructure } from '../../types/themeStructure';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import Form from '../Form/Form';
import Input from '../Input/Input';

import { Container, TextOpenForm, Form as FormNewGenre } from './styles';
import { useForm } from '../../Hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/api';
import { genre } from '../../types/genre';

interface Props {
  theme: themeStructure;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentOptionsSelected: string[];
}

export default function SelectOrCreateGenre({
  theme,
  onChange,
  currentOptionsSelected,
}: Props): ReactElement {
  const [data, getData] = useRequestData<{ message: string; genres: genre[] }>(
    '/genres/',
    { message: '', genres: [] }
  );

  const [isNewGenre, setIsNewGenre] = useState(false);
  const [form, onChangeForm] = useForm<{ name: string }>({ name: '' });
  const [error, setError] = useState({ name: '' });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentError = { name: '' };
    let hashError = false;

    if (form.name.trim() === '') {
      currentError.name = 'empty name field';
      form.name = '';
      hashError = true;
    }

    if (!hashError) {
      const token = localStorage.getItem('token');
      axios
        .post(
          `${BASE_URL}/genres/`,
          { ...form },
          { headers: { Authorization: token } }
        )
        .then((res) => {
          form.name = '';
          getData();
          setIsNewGenre(false);
        })
        .catch((err) => {
          const errorMessage = err.response.data.error;
          let wasTreated = false;

          if (errorMessage.includes('name')) {
            currentError.name = 'Sorry, name already in use';
            wasTreated = true;
          }

          if (!wasTreated) alert(errorMessage);

          setError({ ...currentError });
        });
    } else {
      setError({ ...currentError });
    }
  };

  return (
    <Container>
      {data.genres.length > 0 &&
        data.genres.map((genre) => (
          <InputCheckbox
            groupName="genres_id"
            value={genre.id}
            label={genre.name}
            color={theme.font.tertiary}
            selectedColor={theme.font.primary}
            onChange={onChange}
            isSelected={
              currentOptionsSelected.find((option) => option === genre.id)
                ? true
                : false
            }
          />
        ))}

      <TextOpenForm
        onClick={() => setIsNewGenre(true)}
        fontColor={theme.font.secondary}
        linkColor={theme.font.primary}
      >
        Can't find the genre?<button>Create</button>
      </TextOpenForm>

      {isNewGenre && (
        <Form onSubmit={onSubmit} labelButtonSubmit="Create Genre">
          <Input
            label="Genre name"
            placeholder="name"
            value={form.name}
            onChange={onChangeForm}
            type="text"
            name="name"
            required={true}
            errorMessage={error['name']}
          />
        </Form>
      )}
    </Container>
  );
}
