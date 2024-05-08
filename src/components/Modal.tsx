import { useEffect } from 'react';

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: any;
  trailer: string | any;
}

export const Modal = ({ isModalOpen, setIsModalOpen, trailer }: ModalProps) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modalBox = document.getElementById('modal-box');
      if (modalBox && !modalBox.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        id="modal-box"
        className={`absolute left-1/2 top-1/2 z-50 flex ${!isModalOpen ? 'hidden' : ''} min-h-[50vh] min-w-[80vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-xl sm:w-[385px] sm:min-w-[40vw]`}
      >
        <iframe
                className="absolute inset-0 w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${trailer}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

      </div>
    </>
  );
};
