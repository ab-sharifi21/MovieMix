import { Carrousel } from '@/components/ActorsCarrousel';
import { MovieInfo } from '@/components/HomePage/MovieInfo';
import { getMovieActors } from '@/functions/getMovieActors';
import { getMovieById } from '@/functions/getMovieById';
import { Cast, MovieCredits, MovieDetail } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

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
  const { crew, cast: movieActors }: MovieCredits =
    await getMovieActors(movieId);

  const actorsImages: string[] = movieActors.map((actor: Cast) => {
    return `https://image.tmdb.org/t/p/w342${actor.profile_path}`;
  });

  const actorsNames: any = movieActors.map((actor: Cast) => {
    return { name: actor.name, character: actor.character };
  });

  const {
    backdrop_path,
    genres,
    poster_path,
    title,
    original_language,
    origin_country,
    homepage,
    status,
  } = movieDetail;

  return (
    <div className="w-full flex-col text-white">
      <section
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        }}
        className="relative h-screen w-full bg-cover bg-no-repeat"
      >
        <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6">
          <MovieInfo movie={movieDetail} genres={genres} />

          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-black">
              <h2 className="rounded-md bg-primaryColor p-1 text-sm font-semibold">
                Director:
              </h2>
              <span className="text-sm text-slate-400">{crew[0].name}</span>
            </div>
            <div className="flex gap-2">
              <p>
                <span className="text-xs font-semibold text-slate-200">
                  Original language:
                </span>
                <span className="text-xs text-slate-400">
                  {' '}
                  {original_language.toUpperCase()}
                </span>
              </p>
              <p>
                <span className="text-xs font-semibold text-slate-200">
                  Origin country:
                </span>
                <span className="text-xs text-slate-400">
                  {' '}
                  {origin_country}
                </span>
              </p>
            </div>
            <p>
              <span className="text-xs font-semibold text-slate-200">
                Status:
              </span>
              <span className="text-xs text-slate-400"> {status}</span>
            </p>
            <Link
              href={homepage}
              target="_blank"
              className="text-xs text-blue-500 hover:underline"
            >
              see more...
            </Link>
          </div>

          <Image
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            height={250}
            width={220}
            alt={`${title}' poster`}
            className="rounded"
          />
        </div>
      </section>

      <section className="flex w-full flex-col bg-black/40 px-3 py-6">
        <h3 className="mb-6 text-xl font-semibold text-slate-300">
          Meet some of the actors
        </h3>
        <Carrousel images={actorsImages} actorNames={actorsNames} />
      </section>
    </div>
  );
}
