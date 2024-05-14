import { MovieList } from '@/components/MovieList';
import { getMoviesGenres } from '@/functions/getMovieGenres';
import { getMoviesByGenre } from '@/functions/getMoviesByGenre';
import { Genre, Movie } from '@/types/types';
import { GenrePageHeader } from '@/components/GenrePageHeader';

interface GenreHomePageProps {
  params: {
    genre: string;
  };
}

export async function generateMetadata({ params }: GenreHomePageProps) {
  const { genre } = params;
  return {
    title: `${genre.charAt(0).toUpperCase() + genre.slice(1)} movies`,
    description: `${genre} page created with next.js`,
  };
}

const GenreHomePage = async ({ params }: GenreHomePageProps) => {
  const { genre: genreName } = params;
  const { genres } = await getMoviesGenres();

  const genreId = genres.find(
    (genre: Genre) => genre.name.toLowerCase() === genreName,
  ).id;

  let allMovies: Movie[] = [];
  let currentPage: number = 1;

  while (currentPage <= 10) {
    const { results: moviesByGenre }: { results: Movie[] } =
      await getMoviesByGenre(`&with_genres=${genreId}&page=${currentPage}`);
    allMovies = allMovies.concat(moviesByGenre);
    currentPage++;
  }

  return (
    <div className="flex w-full flex-col bg-black/45 text-white">
      <GenrePageHeader genreName={genreName} />

      <main className="my-3 px-2">
        <MovieList movies={allMovies} />
      </main>
    </div>
  );
};

export default GenreHomePage;
