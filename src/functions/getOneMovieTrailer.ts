import { fetcher } from './fetcher';

export const getOneMovieTrailers = async (movieId: number | string) => {
  const path = `movie/${movieId}/videos`;
  const query = 'append_to_response=videos';
  return fetcher(path, query);
};
