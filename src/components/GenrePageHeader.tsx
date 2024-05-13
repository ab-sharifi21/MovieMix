'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';

interface GenrePageHeaderProps {
  genreName: string;
}

export const GenrePageHeader = ({ genreName }: GenrePageHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`sticky right-0 top-0 z-30 flex w-full justify-between px-4 py-3 ${isScrolled ? 'sticky bg-black/45' : ''} `}
    >
      <div className="flex items-center gap-1 text-sm font-semibold uppercase">
        <p className="rounded-md bg-primaryColor p-1 text-black">
          Top {genreName}
        </p>
        <p className="text-primaryColor">Movies</p>
      </div>
      <Link href="/" title="Home">
        <FaHome className="h-7 w-7 text-primaryColor transition-all duration-300 hover:scale-110 hover:text-white" />
      </Link>
    </header>
  );
};
