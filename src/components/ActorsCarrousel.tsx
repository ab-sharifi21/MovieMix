'use client';
import { NameCharacter } from '@/types/types';
import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface CarouselProps {
  images: string[];
  actorNames: NameCharacter[];
}

export const Carrousel = ({ images, actorNames }: CarouselProps) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextImage = () => {
    setStartIndex((prevIndex) =>
      prevIndex === images.length - 4 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1,
    );
  };

  return (
    <div className="relative mx-8 flex justify-between rounded-lg bg-black/40">
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white duration-300 hover:bg-primaryColor hover:text-black"
        onClick={prevImage}
      >
        <MdKeyboardArrowLeft className="h-6 w-6" />
      </button>
      {images.slice(startIndex, startIndex + 4).map((image, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${image})` }}
          className="flex h-[280px] w-[250px] items-end rounded-lg bg-cover bg-no-repeat"
        >
          <div className="m-2 w-full rounded-lg bg-black/15 p-2">
            <p className="font-semibold">
              {actorNames[startIndex + index].character}
            </p>
            <p className="text-sm">{actorNames[startIndex + index].name}</p>
          </div>
        </div>
      ))}
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white duration-300 hover:bg-primaryColor hover:text-black"
        onClick={nextImage}
      >
        <MdKeyboardArrowRight className="h-7 w-7" />
      </button>
    </div>
  );
};
