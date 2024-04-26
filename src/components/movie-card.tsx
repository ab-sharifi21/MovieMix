import { Movie } from '@/types/types';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <article
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.poster_path}')`,
      }}
      className="relative h-[80vh] bg-cover bg-center bg-no-repeat transition-all flex-[0.5] ease-in duration-500 hover:flex-1"
    >
      {movie.title}
    </article>
  );
};
