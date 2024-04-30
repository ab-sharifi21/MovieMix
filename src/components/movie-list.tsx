import { Genre, Movie } from '@/types/types';
import { MovieItem } from './movie-item';

interface MovieListProps {
  movies: Movie[];
  genres: Genre[];
}

export const MovieList = ({ movies, genres }: MovieListProps) => {
  return (
    <ul>
      {movies.map((movie) => {
        return <MovieItem key={movie.id} />;
      })}
    </ul>
  );
};
