'use client';
import { Movie } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoPlayCircleOutline } from 'react-icons/io5';

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({ movie }: MovieItemProps) => {
  const pathName = usePathname();
  return (
    <Link href={`${pathName}/${movie.id}`}>
      <div className="group relative h-[200px] w-[330px]">
        <Image
          src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          alt={`${movie.title}'s poster`}
          width={330}
          height={200}
          priority={false}
          className="h-full w-full rounded-lg saturate-[1.1]"
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <p className="text-sm font-semibold text-slate-100">{movie.title}</p>
          <p className="text-xs text-slate-300">{movie.release_date}</p>
        </div>
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform text-slate-300 group-hover:block">
          <IoPlayCircleOutline className="h-12 w-12 transition-all duration-300 hover:scale-110" />
        </div>
      </div>
    </Link>
  );
};
