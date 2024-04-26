import { Header, MovieList } from '@/components';
import { getAllMovies } from '@/functions/getAllMovies';

export default async function Home() {
  const allMovies = await getAllMovies();
  const movies = allMovies.slice(0, 10);
  return (
    <>
      <div className="flex flex-col px-2">
        <Header />
        <main className="flex flex-1 items-center">
          <MovieList movies={movies} />
        </main>
      </div>
    </>
  );
}
