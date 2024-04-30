import { Header, MovieList } from '@/components';
import { getAllMovies } from '@/functions/getAllMovies';
import { getMoviesGenres } from '@/functions/getMovieGenres';

export default async function Home() {
  const { results: allMovies } = await getAllMovies();
  const movies = allMovies.slice(0, 10);
  const genres = await getMoviesGenres();

  return (
    <>
      <div className="flex w-full flex-col px-2">
        <Header />
        <main className="flex flex-1 items-center">
          <MovieList movies={movies} genres={genres.genres} />
        </main>
      </div>
    </>
  );
}
