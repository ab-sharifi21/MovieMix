import { MovieInfo } from '@/components/HomePage/MovieInfo';
import { getMovieActors } from '@/functions/getMovieActors';
import { getMovieById } from '@/functions/getMovieById';
import { MovieCredits, MovieDetail } from '@/types/types';

interface MoviePageProps {
  params: {
    id: string | number;
  };
}

export const generateMetadata = async ({ params }: MoviePageProps) => {
  const { id } = params;
  return {
    title: `#${id}`,
    description: `movie with id: ${id} page`,
  };
};

export default async function MoviePage({ params }: MoviePageProps) {
  const { id: movieId } = params;

  const movieDetail: MovieDetail = await getMovieById(movieId);
  const { cast: movieActors }: MovieCredits = await getMovieActors(movieId);

  const {
    backdrop_path,
    genres,
  } = movieDetail;

  console.log(genres);

  return (
    <div className="w-full flex-col text-white">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        }}
        className="relative h-screen w-full bg-cover bg-no-repeat"
      >
        <div className="absolute bottom-0 left-0 p-6">
          <MovieInfo movie={movieDetail} genres={genres} />

          <div></div>
        </div>
      </div>
    </div>
  );
}
