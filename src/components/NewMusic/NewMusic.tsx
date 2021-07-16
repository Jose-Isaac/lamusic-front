import React, { ReactElement, useState } from 'react';
import { NewMusicData } from '../../types/music';
import { themeStructure } from '../../types/themeStructure';
import SubTitleSign from '../SubTitleSign/SubTitleSign';
import TitleSign from '../TitleSign/TitleSign';
import Input from '../Input/Input';

import { Container, BoxMain, BoxTitles, Form } from './styles';
import { useForm } from '../../Hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/api';
import { useHistory } from 'react-router-dom';
import SelectOrCreateAlbum from '../SelectOrCreateAlbum/SelectOrCreateAlbum';
import SelectOrCreateGenre from '../SelectOrCreateGenre/SelectOrCreateGenre';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

interface Props {
  theme: themeStructure;
}

export default function NewMusic({ theme }: Props): ReactElement {
  const history = useHistory();
  const [musicTitle, setMusicTitle] = useState('');
  const [albumId, setAlbumId] = useState('');
  const [genresId, setGenresId] = useState<{ genres: string[] }>({
    genres: [],
  });
  const [error, setError] = useState({ albumId: '', title: '', genresId: '' });

  //TODO pesquisar como tipar o history do react-router
  // Após pesquisa refatorar esse trecho
  const onSubmitNewMusic = () => {
    const currentError = { albumId: '', title: '', genresId: '' };
    let hashError = false;

    if (musicTitle.trim() === '') {
      currentError.title = 'empty name field';
      setMusicTitle('');
      hashError = true;
    }

    if (albumId.length > 36) {
      currentError.albumId = 'please select an album';
      hashError = true;
    }

    if (genresId.genres.length) {
      currentError.genresId = 'please select an or more genres';
    }

    if (!hashError) {
      const token = localStorage.getItem('token');
      axios
        .post(
          `${BASE_URL}/musics/`,
          {
            albumId: albumId,
            title: musicTitle,
            genresIds: genresId.genres,
          },
          { headers: { Authorization: token } }
        )
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

  const onChangeMusicTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMusicTitle(event.target.value);
  };

  const onChangeAlbumId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlbumId(event.target.value);
  };

  const onChangeGenresId = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (genresId.genres.find((genreId) => genreId === event.target.value)) {
      setGenresId({
        genres: genresId.genres.filter(
          (genreId) => genreId !== event.target.value
        ),
      });
    } else {
      setGenresId({ genres: [...genresId.genres, event.target.value] });
    }
  };

  return (
    <Container>
      <BoxMain>
        <BoxTitles>
          <TitleSign fontColor={theme.font.primary}>New Music</TitleSign>
          <SubTitleSign fontColor={theme.font.secondary}>
            Add a new song to your library
          </SubTitleSign>
        </BoxTitles>
        <form>
          <Input
            label="Title"
            placeholder="Title"
            value={musicTitle}
            onChange={onChangeMusicTitle}
            type="text"
            name="title"
            required={true}
            errorMessage={error['title']}
          />
        </form>
        <SelectOrCreateAlbum
          currentOptionSelected={albumId}
          onChange={onChangeAlbumId}
          theme={theme}
        />
        <SelectOrCreateGenre
          currentOptionsSelected={genresId.genres}
          onChange={onChangeGenresId}
          theme={theme}
        />
        <ButtonSubmit
          bgColor={theme.background.secondary}
          fontColor={theme.font.secondary}
          onClick={onSubmitNewMusic}
        >
          Create music
        </ButtonSubmit>
      </BoxMain>
    </Container>
  );
}
