import React, { ReactElement, useState } from 'react';
import { useRequestData } from '../../Hooks/useRequestData';
import { album } from '../../types/album';
import { themeStructure } from '../../types/themeStructure';
import InputRadio from '../InputRadio/InputRadio';
import Form from '../Form/Form';
import Input from '../Input/Input';

import { Container, TextOpenForm, ContainerForm } from './styles';
import { useForm } from '../../Hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/api';

interface Props {
  theme: themeStructure;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentOptionSelected: string;
}

export default function SelectOrCreateAlbum({
  theme,
  onChange,
  currentOptionSelected,
}: Props): ReactElement {
  const [data, getData] = useRequestData<{ message: string; albums: album[] }>(
    '/albums/',
    { message: '', albums: [] }
  );

  const [isNewAlbum, setIsNewAlbum] = useState(false);
  const [form, onChangeForm] = useForm<{ name: string }>({ name: '' });
  const [error, setError] = useState({ name: '' });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('entrou');

    event.preventDefault();
    const currentError = { name: '' };
    let hashError = false;

    if (form.name.trim() === '') {
      currentError.name = 'empty name field';
      form.name = '';
      hashError = true;
    }

    if (!hashError) {
      axios
        .post(`${BASE_URL}/albums/`, form)
        .then((res) => {
          getData();
          setIsNewAlbum(false);
        })
        .catch((err) => {
          const errorMessage = err.response.data.message;
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
      {data.albums.length > 0 &&
        data.albums.map((album) => (
          <InputRadio
            groupName="album_id"
            value={album.id}
            label={album.name}
            color={theme.font.tertiary}
            selectedColor={theme.font.primary}
            onChange={onChange}
            isSelected={currentOptionSelected === album.id}
          />
        ))}

      <TextOpenForm
        onClick={() => setIsNewAlbum(true)}
        fontColor={theme.font.secondary}
        linkColor={theme.font.primary}
      >
        Can't find the album?<button>Create</button>
      </TextOpenForm>

      <ContainerForm>
        {isNewAlbum && (
          <Form onSubmit={onSubmit} labelButtonSubmit="Create Album">
            <Input
              label="Album name"
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
      </ContainerForm>
    </Container>
  );
}
