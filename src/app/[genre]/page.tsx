import { getMoviesGenres } from "@/functions/getMovieGenres";
import { getMoviesByGenre } from "@/functions/getMoviesByGenre";
import { Genre, Movie } from "@/types/types";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

interface GenreHomePageProps {
  params: {
    genre: string;
  }
}

export default async function GenreHomePage({params}: GenreHomePageProps) {
  const {genre: genreName} = params
  const {genres} = await getMoviesGenres();
  const genreId = genres.find((genre: Genre) => genre.name.toLowerCase() === genreName).id 

  const {results: moviesByGenre}: {results: Movie[]} = await getMoviesByGenre(`&with_genres=${genreId}`);
  
  return (
    <div className="flex w-full flex-col px-2">
      <header className="flex justify-between p-2 bg-transparent w-full">
      <div className="flex items-center gap-1 text-sm font-semibold uppercase">
          <p className="rounded-md bg-primaryColor text-black p-1">Top {genreName}</p>
          <p className="text-primaryColor">Movies</p>
        </div>
        <Link
        href='/'
        title="Home"
        >
          <FaHome className="h-7 w-7 text-primaryColor hover:text-black transition-all hover:scale-110 duration-300" />
        </Link>
      </header>
      <main>
        <ul>
          {
            moviesByGenre.map(movie => {
              return (
                <li key={movie.id}>{movie.title}</li>
              )
            })
          }
        </ul>
      </main>
      <footer></footer>
    </div>
  );
}
