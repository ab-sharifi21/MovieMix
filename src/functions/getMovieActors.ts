import { fetcher } from './fetcher';

export const getMovieActors = (movieId: string | number) => {
  const path = `movie/${movieId}/credits`;
  return fetcher(path);
};
