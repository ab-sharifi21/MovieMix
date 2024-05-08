import { Genre, Movie } from '@/types/types';

export const getOneMovieGenres = (movie: Movie, genres: Genre[]) => {
  const movieGenres: Genre[] = [];

  movie.genre_ids.forEach((genreId) => {
    const genre: any = genres.find((genre) => genre.id === genreId);
    if (genre) {
      movieGenres.push({ id: genre.id, name: genre.name });
    }
  });

  return movieGenres.slice(0, 2);
};
