import Content from '@/components/HomePage/Content';
import { getAllMovies } from '@/functions/getAllMovies';
import { getMoviesGenres } from '@/functions/getMovieGenres';

export default async function Home() {
  const { results: movies } = await getAllMovies();
  const { genres } = await getMoviesGenres();

  return (
    <>
      <div className="flex w-full flex-col">
        <main className="relative min-h-screen select-none overflow-hidden text-white antialiased">
          <Content movies={movies} genres={genres} />
        </main>
      </div>
    </>
  );
}
