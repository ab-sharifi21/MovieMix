'use client';
import { AnimatePresence } from 'framer-motion';
import BackgroundImage from './BackgroundImage';
import Slides from './Slides';
import Controls from './Controls';
import { useState } from 'react';
import { CurrentSlideData, Genre, Movie } from '@/types/types';
import { MovieInfo } from './MovieInfo';
import { Header } from './header';

interface Props {
  movies: Movie[];
  genres: Genre[];
}

function Content({ movies, genres }: Props) {
  const [data, setData] = useState<Movie[]>(movies.slice(1));
  const [transitionData, setTransitionData] = useState<Movie>(movies[0]);

  const initData = movies[0];
  const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({
    data: initData,
    index: 0,
  });

  return (
    <>
      <AnimatePresence>
        <BackgroundImage currentSlideData={currentSlideData} />
        <div className="z-2 absolute h-full w-full">
          <Header />
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <MovieInfo
                movie={transitionData ? transitionData : currentSlideData.data}
                genres={genres}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:ml-2 md:justify-end md:p-6">
              <Slides movies={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={movies}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default Content;
