import { Movie } from '@/types/types';
import { MovieItem } from './MovieItem';

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <section className="flex flex-wrap justify-center gap-3">
      {movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </section>
  );
};
