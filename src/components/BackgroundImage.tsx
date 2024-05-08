import { motion } from 'framer-motion';
import { CurrentSlideData, Movie } from '@/types/types';

type Props = {
  transitionData: Movie;
  currentSlideData: CurrentSlideData;
};

function BackgroundImage({ transitionData, currentSlideData }: Props) {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.id}
          layoutId={transitionData.title}
          alt="Transition Image"
          transition={{
            opacity: { ease: 'linear' },
            layout: { duration: 0.6 },
          }}
          className=" absolute left-0 top-0 h-full w-full object-cover brightness-50"
          src={`https://image.tmdb.org/t/p/w500${transitionData.poster_path}`}
        />
      )}
      <motion.img
        alt="Current Image"
        key={
          `https://image.tmdb.org/t/p/w500${currentSlideData.data.poster_path}` +
          'transition'
        }
        src={`https://image.tmdb.org/t/p/original${currentSlideData.data.backdrop_path}`}
        className=" absolute left-0 top-0 h-full w-full object-cover brightness-50"
      />
    </>
  );
}

export default BackgroundImage;
