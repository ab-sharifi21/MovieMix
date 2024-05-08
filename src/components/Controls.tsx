import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Progress from './Progress';
import { CurrentSlideData, Movie } from '@/types/types';

type Props = {
  currentSlideData: CurrentSlideData;
  sliderData: Movie[];
  data: Movie[];
  transitionData: Movie;
  handleData: React.Dispatch<React.SetStateAction<Movie[]>>;
  handleTransitionData: React.Dispatch<React.SetStateAction<Movie>>;
  handleCurrentSlideData: React.Dispatch<
    React.SetStateAction<CurrentSlideData>
  >;
  initData: Movie;
};

function Controls({
  sliderData,
  data,
  transitionData,
  currentSlideData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  initData,
}: Props) {
  const handlePrev = () => {
    handleData((prevData) => [
      transitionData ? transitionData : initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);
    handleCurrentSlideData({
      data: transitionData ? transitionData : sliderData[0],
      index: sliderData.findIndex(
        (ele) => ele.poster_path === data[data.length - 1].poster_path,
      ),
    });
    handleTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {
    handleData((prev) => prev.slice(1));
    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex(
        (ele) => ele.poster_path === data[0].poster_path,
      ),
    });
    handleTransitionData(data[0]);
    setTimeout(() => {
      handleData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };

  return (
    <div className="flex items-center gap-2 px-1 py-4">
      <SliderButton handleClick={handlePrev}>
        <IoIosArrowBack className="text-lg" />
      </SliderButton>
      <SliderButton handleClick={handleNext}>
        <IoIosArrowForward className="text-lg" />
      </SliderButton>
      <Progress curIndex={currentSlideData.index} length={sliderData.length} />
    </div>
  );
}

export default Controls;

const SliderButton = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition duration-300
ease-in-out hover:scale-110 hover:border-2 hover:border-slate-800 hover:bg-primaryColor hover:text-black
"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
