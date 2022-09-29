export type CardMovie = {
  id: number;
  poster_path: string;
  original_title: string;
  vote_avarege: number;
};
type Genre = {
  id: number;
  name: string;
};

export type MovieDetail = {
  genres: Genre;
  release_date: string;
  status: string;
  vote_average: number;
  original_title: string;
  original_name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  first_air_date: string;
  last_air_date: string;
  episode_run_time: number[];
  runtime: number;
};
