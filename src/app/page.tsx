import { Header, MovieList } from '@/components';
import { getAllMovies } from '@/functions/getAllMovies';

export default async function Home() {
  const allMovies = await getAllMovies();
  const movies = allMovies.slice(0, 10);
  return (
    <>
    <div className='px-2 flex flex-col'>
      <Header />
        <main className='flex-1 flex items-center'>
          <MovieList movies={movies} />
        </main>
    </div>
    </>
  );
}
