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

  let allMovies: Movie[] = []
  let currentPage: number = 1

  while(currentPage <= 10) {
    const {results: moviesByGenre}: {results: Movie[]} = await getMoviesByGenre(`&with_genres=${genreId}&page=${currentPage}`)
    allMovies = allMovies.concat(moviesByGenre);
    currentPage++
  }


  return (
    <div className="flex w-full flex-col px-2 text-white">
      <header className="sticky top-0 right-0 z-30 flex w-full justify-between rounded-bl-md rounded-br-md bg-black/30 px-4 py-3 ">
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
        <MovieList movies={allMovies} />
      </main>
    </div>
  );
};

export default GenreHomePage;
