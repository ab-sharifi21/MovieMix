import { MovieList } from '@/components/MovieList';
import { getMoviesGenres } from '@/functions/getMovieGenres';
import { getMoviesByGenre } from '@/functions/getMoviesByGenre';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { Genre, Movie } from '@/types/types';

interface GenreHomePageProps {
  params: {
    genre: string;
  };
}

const GenreHomePage = async ({ params }: GenreHomePageProps) => {
  const { genre: genreName } = params;
  const { genres } = await getMoviesGenres();

  const genreId = genres.find(
    (genre: Genre) => genre.name.toLowerCase() === genreName,
  ).id;

  const {results: moviesByGenre}: {results: Movie[]} = await getMoviesByGenre(`&with_genres=${genreId}`)

  return (
    <div className="flex w-full flex-col px-2 text-white">
      <header className="mt-2 flex w-full justify-between bg-transparent p-2">
        <div className="flex items-center gap-1 text-sm font-semibold uppercase">
          <p className="rounded-md bg-primaryColor p-1 text-black">
            Top {genreName}
          </p>
          <p className="text-primaryColor">Movies</p>
        </div>
        <Link href="/" title="Home">
          <FaHome className="h-7 w-7 text-primaryColor transition-all duration-300 hover:scale-110 hover:text-white" />
        </Link>
      </header>

      <main className="my-3">
        <MovieList movies={moviesByGenre} />
      </main>
    </div>
  );
};

export default GenreHomePage;
