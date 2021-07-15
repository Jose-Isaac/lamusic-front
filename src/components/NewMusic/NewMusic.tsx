import React, { ReactElement, useState } from 'react';
import { NewMusicData } from '../../types/music';
import { themeStructure } from '../../types/themeStructure';
import SubTitleSign from '../SubTitleSign/SubTitleSign';
import TitleSign from '../TitleSign/TitleSign';
import Form from '../Form/Form';
import Input from '../Input/Input';

import { Container, BoxMain, BoxTitles } from './styles';
import { useForm } from '../../Hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/api';
import { useHistory } from 'react-router-dom';
import SelectOrCreateAlbum from '../SelectOrCreateAlbum/SelectOrCreateAlbum';

interface Props {
  theme: themeStructure;
}

export default function NewMusic({ theme }: Props): ReactElement {
  const initialState: NewMusicData = {
    title: '',
    album_id: '',
    genres_id: [],
  };

  const history = useHistory();
  const [newMusicForm, onChange] = useForm<NewMusicData>(initialState);
  const [error, setError] = useState(initialState);

  //TODO pesquisar como tipar o history do react-router
  // Após pesquisa refatorar esse trecho
  const onSubmitNewMusic = (event: React.FormEvent) => {
    event.preventDefault();
    const currentError = { ...initialState };
    let hashError = false;

    if (newMusicForm.title.trim() === '') {
      currentError.title = 'empty name field';
      newMusicForm.title = '';
      hashError = true;
    }

    if (!hashError) {
      axios
        .post(`${BASE_URL}/users/signup`, newMusicForm)
        .then((res) => {
          history.push('/dashboard');
        })
        .catch((err) => {
          const errorMessage = err.response.data.message;
          let wasTreated = false;

          if (errorMessage.includes('title')) {
            currentError.title = 'Sorry, title already in use';
            wasTreated = true;
          }

          if (!wasTreated) alert(errorMessage);

          setError({ ...currentError });
        });
    } else {
      setError({ ...currentError });
    }
  };

  console.log(newMusicForm);
  return (
    <Container>
      <BoxMain>
        <BoxTitles>
          <TitleSign fontColor={theme.font.primary}>New Music</TitleSign>
          <SubTitleSign fontColor={theme.font.secondary}>
            Add a new song to your library
          </SubTitleSign>
        </BoxTitles>
        <Form onSubmit={onSubmitNewMusic} labelButtonSubmit="Create music">
          <Input
            label="Title"
            placeholder="Title"
            value={newMusicForm.title}
            onChange={onChange}
            type="text"
            name="title"
            required={true}
            errorMessage={error['title']}
          />
          <SelectOrCreateAlbum
            currentOptionSelected={newMusicForm.album_id}
            onChange={onChange}
            theme={theme}
          />
        </Form>
      </BoxMain>
    </Container>
  );
}
