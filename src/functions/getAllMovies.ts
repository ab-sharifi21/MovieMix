import { fetcher } from './fetcher';

export const getAllMovies = async () => {
  const path = 'discover/movie';
  return fetcher(path);
};
