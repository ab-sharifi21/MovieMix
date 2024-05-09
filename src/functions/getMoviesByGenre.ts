import { fetcher } from './fetcher';

export const getMoviesByGenre = (query: string) => {
  const path = 'discover/movie';
  return fetcher(path, query);
};
