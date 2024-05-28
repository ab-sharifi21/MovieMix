import { getMoviesGenres } from '@/functions/getMovieGenres';
import { GenrePageHeader } from '@/components/GenrePageHeader';
import InfiniteScrollMovies from '@/components/InfiniteScrollMovies';
import { getMoviesByGenre } from '@/functions/getMoviesByGenre';

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

  const genre = genres.find(
    (genre: any) => genre.name.toLowerCase() === genreName,
  );

  if (!genre) {
    return <div>Genre not found</div>;
  }

  const { id: genreId } = genre;
  const initialMovies = await fetchInitialMovies(genreId);

  return (
    <div className="flex w-full flex-col bg-black/45 text-white">
      <GenrePageHeader genreName={genreName} />
      <InfiniteScrollMovies initialMovies={initialMovies} genreId={genreId} />
    </div>
  );
};

const fetchInitialMovies = async (genreId: string) => {
  const { results: movies } = await getMoviesByGenre(`&with_genres=${genreId}&page=1`);
  return movies;
};

export default GenreHomePage;
