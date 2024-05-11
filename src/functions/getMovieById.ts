import { fetcher } from './fetcher';

export const getMovieById = (movieId: string | number) => {
  const path = `movie/${movieId}`;
  return fetcher(path);
};
