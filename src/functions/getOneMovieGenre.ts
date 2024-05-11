import { Genre, Movie } from '@/types/types';

export const getOneMovieGenres = (movie: Movie | any, genres: Genre[]) => {
  const movieGenres: Genre[] = [];

  if(movie.genre_ids) {
    movie.genre_ids.forEach((genreId: any) => {
      const genre: any = genres.find((genre) => genre.id === genreId);
      if (genre) {
        movieGenres.push({ id: genre.id, name: genre.name });
      }
    });
  } else {
    movieGenres.push(...movie.genres)
  }

  return movieGenres.slice(0, 3);
};
