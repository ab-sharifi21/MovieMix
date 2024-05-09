import React from 'react';
import SliderCard from './SliderCard';
import { Movie } from '@/types/types';

type Props = {
  movies: Movie[];
};

function Slides({ movies }: Props) {
  return (
    <div className=" flex w-full gap-6">
      {movies.map((movie) => {
        return <SliderCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
}

export default Slides;
