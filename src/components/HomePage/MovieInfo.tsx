'use client';
import { motion } from 'framer-motion';
import { Genre, Movie } from '@/types/types';
import { getOneMovieGenres } from '@/functions/getOneMovieGenre';
import { getOneMovieTrailers } from '@/functions/getOneMovieTrailer';
import { useEffect, useState } from 'react';
import { Trailer } from '../Trailer';
import { FaRegClock } from 'react-icons/fa';

type Props = {
  movie: Movie | any;
  genres: Genre[];
};
const item = {
  hidden: {
    y: '100%',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

export const MovieInfo = ({ movie, genres }: Props) => {
  const [trailer, setTrailer] = useState('');

  const movieGenres = getOneMovieGenres(movie, genres);

  useEffect(() => {
    const fetchTrailerData = async () => {
      try {
        const { results } = await getOneMovieTrailers(movie.id);
        if (results && results.length > 0) {
          const trailer = results.find(
            (video: any) => video.type === 'Trailer',
          );
          if (trailer) {
            setTrailer(trailer.key);
          } else {
            setTrailer(results[0].key);
          }
        } else {
          return 'No trailers found.';
        }
      } catch (error) {
        console.error('Error fetching trailer data:', error);
      }
    };

    fetchTrailerData();
  }, [movie.id]);

  const date =
    new Date(movie.release_date).getDate().toString() +
    '-' +
    new Date(movie.release_date)
      .toLocaleString('default', {
        month: 'long',
      })
      .toString() +
    '-' +
    new Date(movie.release_date).getFullYear().toString();

  return (
    <motion.div
      initial="hidden"
      animate={'visible'}
      className={`flex flex-col text-[#D5D5D6]`}
    >
      <AnimatedText className="spacing overflow-hidden text-sm" data={date} />
      <AnimatedText
        className="my-1 max-w-sm text-3xl font-semibold"
        data={movie.title}
      />
      <AnimatedText
        className={`${movie.runtime ? 'max-w-sm' : 'max-w-xs'} rounded-md bg-black/20 p-2 text-sm shadow-lg`}
        data={movie.overview}
      />
      <motion.div className="my-1 flex gap-2 p-2 text-sm">
        <motion.p>
          <motion.span className="rounded-md bg-primaryColor p-1 font-semibold text-black">
            vote:
          </motion.span>{' '}
          {movie.vote_average}
        </motion.p>
        <motion.p className="text-slate-400">({movie.vote_count})</motion.p>
        <motion.span className="text-primaryColor">|</motion.span>

        <motion.div className="flex gap-2">
          {movieGenres.map((genre) => {
            return (
              <motion.p
                key={genre.id}
                className="items-center text-xs text-slate-400"
              >
                {genre.name}{' '}
                <motion.span className="text-sm text-primaryColor">
                  |
                </motion.span>
              </motion.p>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div className="flex ">
        <Trailer trailer={trailer} />
        {movie.runtime && (
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold">Duration:</span>
            <span className="text-sm text-slate-300">{movie.runtime} mins</span>
            <FaRegClock className="text-primaryColor" />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const AnimatedText = ({
  data,
  className,
}: {
  data?: string;
  className?: string;
}) => {
  return (
    <span
      style={{
        overflow: 'hidden',
        display: 'inline-block',
      }}
    >
      <motion.p className={` ${className}`} variants={item} key={data}>
        {data}
      </motion.p>
    </span>
  );
};
