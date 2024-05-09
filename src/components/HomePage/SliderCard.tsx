import React from 'react';
import { motion } from 'framer-motion';
import { Movie } from '@/types/types';

type Props = {
  movie: Movie;
};

function SliderCard({ movie }: Props) {
  return (
    <motion.div
      className="relative h-52 min-w-[250px] rounded-2xl shadow-md md:h-80 md:min-w-[208px]"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 100,
      }}
    >
      <motion.img
        layoutId={movie.title}
        alt="Transition Image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className=" absolute h-full w-full rounded-2xl object-cover brightness-75 "
      />
      <motion.div className="absolute z-10 flex h-full items-end p-4">
        <motion.div
          layout
          className=" mb-2 h-[2px] w-3 rounded-full bg-white"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SliderCard;
