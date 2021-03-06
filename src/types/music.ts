export type music = {
  album_id: string;
  author_id: string;
  created_at: string;
  updated_at: string;
  genres: genre[];
  id: string;
  title: string;
};

type genre = {
  id: string;
  name: string;
};

export type NewMusicData = {
  title: string;
  album_id: string;
  genres_id?: string[];
};
