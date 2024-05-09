import { motion } from 'framer-motion';
import { Genre, Movie } from '@/types/types';
import { getOneMovieGenres } from '@/functions/getOneMovieGenre';
import { getOneMovieTrailers } from '@/functions/getOneMovieTrailer';
import { useEffect, useState } from 'react';
import { Modal } from './Modal';
import { FaCirclePlay } from 'react-icons/fa6';

type Props = {
  movie: Movie;
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

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

  return (
    <motion.div
      initial="hidden"
      animate={'visible'}
      className={`flex flex-col text-[#D5D5D6]`}
    >
      <AnimatedText
        className="spacing overflow-hidden text-sm"
        data={movie.release_date}
      />
      <AnimatedText
        className="my-1 text-3xl font-semibold"
        data={movie.title}
      />
      <AnimatedText
        className="max-w-xs rounded-md bg-black/20 p-2 text-sm shadow-lg"
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

      <motion.div className="mx-2 flex">
        <button
          className="flex cursor-pointer items-center gap-1 rounded-md border border-white/50 bg-primaryColor px-2 py-1 text-sm font-semibold text-black duration-300 hover:scale-105"
          onClick={openModal}
        >
          <FaCirclePlay className="h-4 w-4" />
          <span>Trailer</span>
        </button>
      </motion.div>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          trailer={trailer}
        />
      )}
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
