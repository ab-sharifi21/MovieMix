"use client";
import { useEffect, useState } from 'react';
import { MovieList } from '@/components/MovieList';
import { getMoviesByGenre } from '@/functions/getMoviesByGenre';
import { Movie } from '@/types/types';

interface InfiniteScrollMoviesProps {
  initialMovies: Movie[];
  genreId: string;
}

const InfiniteScrollMovies = ({ initialMovies, genreId }: InfiniteScrollMoviesProps) => {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreMovies = async () => {
    setIsLoading(true);
    const { results: newMovies } = await getMoviesByGenre(`&with_genres=${genreId}&page=${page}`);
    setMovies((prevMovies) => [...prevMovies, ...newMovies]);
    setPage((prevPage) => prevPage + 1);
    setIsLoading(false);
  };

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !isLoading) {
      loadMoreMovies();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  return (
    <main className={`my-3 px-2 ${isLoading && 'relative'}`}>
      <MovieList movies={movies} />
      {isLoading && <p>Loading...</p> }
    </main>
  );
};

export default InfiniteScrollMovies;
