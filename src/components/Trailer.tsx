'use client';
import { useState } from 'react';
import { FaCirclePlay } from 'react-icons/fa6';
import { Modal } from './HomePage/Modal';

export const Trailer = ({ trailer }: { trailer: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="mx-2 flex">
        <button
          className="flex cursor-pointer items-center gap-1 rounded-md border border-white/50 bg-primaryColor px-2 py-1 text-sm font-semibold text-black duration-300 hover:scale-105"
          onClick={openModal}
        >
          <FaCirclePlay className="h-4 w-4" />
          <span>Trailer</span>
        </button>
      </div>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          trailer={trailer}
        />
      )}
    </>
  );
};
