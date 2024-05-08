import { motion } from 'framer-motion';
import { CurrentSlideData, Movie } from '@/types/types';

type Props = {
  currentSlideData: CurrentSlideData;
};

function BackgroundImage({ currentSlideData }: Props) {
  return (
    <>
      <motion.img
        alt="Current Image"
        src={`https://image.tmdb.org/t/p/original${currentSlideData.data.backdrop_path}`}
        className=" absolute left-0 top-0 h-full w-full object-cover brightness-50"
      />
    </>
  );
}

export default BackgroundImage;
